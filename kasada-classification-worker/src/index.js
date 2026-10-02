import { KasadaSdkCloudflare } from '@kasada-packages/cloudflare-sdk';

const kasada = new KasadaSdkCloudflare({
    endpoints: [
        {
            protocol: '*',
            domain: '*',
            method: '*',
            path: '*',
        },
    ],
});

export default {
    async fetch(request, env) {
        try {
            // Proxy to Origin if the request does not match the list of protected endpoints (configured above)
            if (!(await kasada.requestMatchesProtectedEndpoints(request))) {
                return fetch(request);
            }

            // Use the Classification API to get the Classification of the incoming Request
            const { classificationContext, blockResponse } = await kasada.classify(request, {
                api: {
                    domain: env.KASADA_API_DOMAIN,
                    key: env.KASADA_API_KEY,
                },
            });
            
            // Block the request if the request is a Bad Bot and the Endpoint is in Protect Mode
            if (blockResponse !== undefined) {
                return await kasada.prepareResponse(blockResponse, classificationContext);
            }
            
            // Else, remove headers and body fields added by Kasada's Client-side SDKs to prevent Origin validation errors
            const transformedRequest = await kasada.prepareRequest(request, classificationContext);
            
            // ...and forward the request to the Origin
            const response = await fetch(transformedRequest);
            
            // Before returning a Response, while adding Kasada headers, etc.
            return await kasada.prepareResponse(response, classificationContext);
        } catch (error) {
            console.error('There was an error with the Kasada SDK: ', error);
            // There was an issue, fail open and proxy directly to the Origin
            return fetch(request);
        }
    },
};
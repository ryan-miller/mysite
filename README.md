# mysite

Personal website for Ryan Miller, built with [Astro](https://astro.build) as a fully static site with no client framework.

## Pages

| Route        | File                       | Content source            |
| ------------ | -------------------------- | ------------------------- |
| `/`          | `src/pages/index.astro`    | pulls from all data files |
| `/about/`    | `src/pages/about.astro`    | inline in the page        |
| `/resume/`   | `src/pages/resume.astro`   | `src/data/resume.ts`      |
| `/coaching/` | `src/pages/coaching.astro` | `src/data/coaching.ts`    |
| `/books/`    | `src/pages/books.astro`    | `src/data/books.ts`       |
| `/travels/`  | `src/pages/travels.astro`  | `src/data/travels.ts`     |
| `/blog/`     | `src/pages/blog/`          | `src/content/blog/*.md`   |
| `/login/`    | `src/pages/login.astro`    | posts to `/api/login` (not implemented yet) |

Site-wide name, headline, email, and social links live in `src/data/profile.ts`.

## Editing content

Personal details are placeholders marked `TODO`. Find them all with:

```sh
grep -rn TODO src/
```

- **Resume:** LinkedIn blocks automated imports, so copy details from your profile into `src/data/resume.ts`.
- **Books:** add entries to `books` with `shelf: 'reading' | 'read' | 'to-read'`. The landing page's "Right now" card shows the book on the `reading` shelf.
- **Blog:** add a Markdown file to `src/content/blog/` with `title`, `description`, and `date` frontmatter. Set `draft: true` to hide it.
- **Travels:** add trips to `trips`. Mark the next one `upcoming: true` and it appears as "Next stop" on the landing page. List state codes in `statesVisited` to fill in the map.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Deploying

The `dist/` folder is plain static HTML, so any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set `site` in `astro.config.mjs` to your final domain before deploying.

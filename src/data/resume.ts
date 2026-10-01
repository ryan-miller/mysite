// Mirrors the structure of a LinkedIn profile.
// LinkedIn blocks automated scraping, so copy your details in from
// https://www.linkedin.com/in/ryan-miller-0abb253b1/ — every TODO below is a placeholder.

export interface Role {
  title: string;
  start: string; // e.g. 'Jan 2022'
  end?: string; // omit for "Present"
  location?: string;
  type?: string; // Full-time, Contract, ...
  description?: string;
  highlights?: string[];
  skills?: string[];
}

export interface Experience {
  company: string;
  url?: string;
  roles: Role[];
}

export const resume = {
  connections: '500+',
  openTo: ['Speaking', 'Advising', 'Coaching'],
  about: `TODO: Paste your LinkedIn "About" section here. A strong one reads like a short story:
what you do, who you do it for, what you're known for, and what you're curious about next.`,

  featuredSkills: ['Leadership', 'Strategy', 'Customer Success', 'Coaching'],

  experience: [
    {
      company: 'TODO: Current Company',
      url: '',
      roles: [
        {
          title: 'TODO: Current Title',
          start: 'TODO 2023',
          location: 'Remote',
          type: 'Full-time',
          description: 'TODO: One or two sentences on scope and impact.',
          highlights: [
            'TODO: A quantified win (e.g., grew X by 40% in 12 months)',
            'TODO: A leadership or cross-functional achievement',
            'TODO: Something you built, launched, or fixed',
          ],
          skills: ['TODO skill', 'TODO skill'],
        },
      ],
    },
    {
      company: 'TODO: Previous Company',
      roles: [
        {
          title: 'TODO: Senior Title (promotion)',
          start: 'TODO 2020',
          end: 'TODO 2023',
          location: 'TODO: City, ST',
          type: 'Full-time',
          highlights: ['TODO: Highlight', 'TODO: Highlight'],
        },
        {
          title: 'TODO: Earlier Title',
          start: 'TODO 2017',
          end: 'TODO 2020',
          type: 'Full-time',
          highlights: ['TODO: Highlight'],
        },
      ],
    },
    {
      company: 'TODO: Earlier Company',
      roles: [
        {
          title: 'TODO: Title',
          start: 'TODO 2013',
          end: 'TODO 2017',
          description: 'TODO: Short description.',
        },
      ],
    },
  ] satisfies Experience[],

  education: [
    {
      school: 'TODO: University',
      degree: 'TODO: Degree, Field of Study',
      years: 'TODO – TODO',
      notes: '',
    },
  ],

  certifications: [
    { name: 'USA Triathlon Level I Coach', issuer: 'USA Triathlon', year: 'TODO' }, // TODO: confirm/replace
    { name: 'TODO: Professional certification', issuer: 'TODO: Issuer', year: 'TODO' },
  ],

  skills: [
    { name: 'TODO: Top skill', endorsements: 0 },
    { name: 'Leadership', endorsements: 0 },
    { name: 'Coaching', endorsements: 0 },
    { name: 'Strategy', endorsements: 0 },
    { name: 'Communication', endorsements: 0 },
    { name: 'Endurance Training', endorsements: 0 },
  ],

  volunteering: [
    { role: 'TODO: Volunteer role', org: 'TODO: Organization', years: 'TODO' },
  ],

  languages: [{ name: 'English', level: 'Native or bilingual proficiency' }],
};

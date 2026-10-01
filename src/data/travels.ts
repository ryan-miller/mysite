// Airstream travel log. Placeholder trips; replace with your own.

export const rig = {
  // TODO: your actual rig details
  name: 'TODO: Name your Airstream',
  model: 'TODO: e.g. Airstream Flying Cloud 25FB',
  year: 'TODO',
  towVehicle: 'TODO: Tow vehicle',
  mods: ['TODO: Solar upgrade', 'TODO: Lithium batteries', 'TODO: Bike rack'],
};

export const stats = [
  { value: 'TODO', label: 'Miles towed' },
  { value: 'TODO', label: 'States visited' },
  { value: 'TODO', label: 'Nights on the road' },
  { value: 'TODO', label: 'National parks' },
];

export interface Trip {
  title: string;
  dates: string;
  route: string;
  miles?: number;
  nights?: number;
  highlights: string[];
  campgrounds?: string[];
  tag: string; // e.g. 'Desert', 'Coast', 'Mountains'
  upcoming?: boolean;
}

export const trips: Trip[] = [
  {
    title: 'Next up: TODO destination',
    dates: 'TODO',
    route: 'TODO → TODO',
    highlights: ['TODO: What you are most excited about'],
    tag: 'Planned',
    upcoming: true,
  },
  {
    title: 'TODO: Southwest Desert Loop',
    dates: 'TODO 2026',
    route: 'TODO: Moab → Capitol Reef → Bryce → Zion',
    miles: 0,
    nights: 0,
    highlights: [
      'TODO: Sunrise ride along a canyon rim',
      'TODO: Best boondocking spot of the trip',
    ],
    campgrounds: ['TODO: Campground name'],
    tag: 'Desert',
  },
  {
    title: 'TODO: Pacific Coast Run',
    dates: 'TODO 2025',
    route: 'TODO: Olympic Peninsula → Oregon Coast → Redwoods',
    miles: 0,
    nights: 0,
    highlights: ['TODO: Highlight', 'TODO: Highlight'],
    tag: 'Coast',
  },
  {
    title: 'TODO: Race-cation',
    dates: 'TODO 2025',
    route: 'TODO: Home → Race venue',
    miles: 0,
    nights: 0,
    highlights: ['TODO: Combined a race with a week on the road'],
    tag: 'Race trip',
  },
];

// Two-letter codes of states you've camped in. Used for the states grid.
export const statesVisited: string[] = []; // TODO: e.g. ['UT', 'AZ', 'CO']

export const tips = [
  { title: 'Arrive before dark', body: 'Backing in by headlamp is a character-building exercise you only need once.' },
  { title: 'The 3-3-3 rule', body: 'Under 300 miles, arrive by 3pm, stay at least 3 nights. Your shoulders will thank you.' },
  { title: 'Train where you park', body: 'Every campground is a new long-run route. Pack the bike, the shoes, and the goggles.' },
];

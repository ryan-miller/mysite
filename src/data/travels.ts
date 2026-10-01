// Airstream travel log. Placeholder trips; replace with your own.

export const rig = {
  // TODO: your actual rig details
  name: 'OPSHUNS',
  model: 'Airstream International 25FBT',
  year: '2023',
  towVehicle: '2024 Ford F-250 Tremor',
  mods: ['300w Solar', '200 ah Battleborn LifePO4 batteries', 'One Up bike rack'],
};

export const stats = [
  { value: '12000', label: 'Miles towed' },
  { value: '5', label: 'States visited' },
  { value: '~550', label: 'Nights on the road' },
  { value: '0', label: 'National parks' },
];

export interface Trip {
  title: string;
  dates: string;
  route?: string;
  miles?: number;
  nights?: number;
  highlights?: string[];
  campgrounds?: string[];
  tag: string; // e.g. 'Desert', 'Coast', 'Mountains'
  upcoming?: boolean;
}

export const trips: Trip[] = [
  {
    title: 'Next up: Escalante, UT',
    dates: '10/3 - 10/10',
    route: 'Flagstaff -> Page -> Escalante',
    highlights: ['First National Park - Bryce Canyon'],
    tag: 'Planned',
    campgrounds: ['Antelope RV -> Escalante Petrified Forest State Park'],
    upcoming: true,
  },
  {
    title: 'Back to Flagstaff, AZ through October',
    dates: 'Until 10/25',
    //route: '',
    //miles: 0,
    //nights: 0,
    //highlights: [
      //'TODO: Sunrise ride along a canyon rim',
      //'TODO: Best boondocking spot of the trip',
    //],
    campgrounds: ['Village Camp Flagstaff'],
    tag: 'Mountains',
  },
];

// Two-letter codes of states you've camped in. Used for the states grid.
export const statesVisited: string[] = []; // TODO: e.g. ['UT', 'AZ', 'CO']

export const tips = [
  { title: 'Arrive before dark', body: 'Backing in by headlamp is a character-building exercise you only need once.' },
  { title: 'The 3-3-3 rule', body: 'Under 300 miles, arrive by 3pm, stay at least 3 nights. Your shoulders will thank you.' },
  { title: 'Train where you park', body: 'Every campground is a new long-run route. Pack the bike, the shoes, and the goggles.' },
];

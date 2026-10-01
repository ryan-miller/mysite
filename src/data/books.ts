// Your bookshelf. Add, remove, or re-shelve freely.
// shelf: 'reading' | 'read' | 'to-read'. favorite + rating are optional.
// The sample titles are placeholders. Swap in your own.

export type Shelf = 'reading' | 'read' | 'to-read';

export interface Book {
  title: string;
  author: string;
  shelf: Shelf;
  genre: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  favorite?: boolean;
  year?: number; // year you read it
  note?: string; // a one-line takeaway
  color?: string; // cover color; auto-picked if omitted
}

export const readingGoal = { year: 2026, target: 12, done: 12 }; // TODO: your numbers

export const books: Book[] = [
  {
    title: 'Remarkably Bright Creatures',
    author: 'Shelby Van Pelt',
    shelf: 'read',
    //genre: 'Sport & Science',
    //note: 'The limits of performance are more in the mind than we think.',
  },
  {
    title: 'The Heart's Invisible Furies',
    author: 'John Boyne',
    shelf: 'reading',
    //genre: 'Travel',
    rating: 5,
    //favorite: true,
    //note: 'The original road-trip-with-a-camper book.',
  },
  {
    title: 'Born to Run',
    author: 'Christopher McDougall',
    shelf: 'read',
    genre: 'Sport & Science',
    rating: 4,
    note: 'Joy is a training principle.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    shelf: 'read',
    genre: 'Growth',
    rating: 4,
    note: 'Systems beat goals, in the office and on the bike.',
  },
  {
    title: 'The Obstacle Is the Way',
    author: 'Ryan Holiday',
    shelf: 'read',
    genre: 'Philosophy',
    rating: 4,
    favorite: true,
  },
  {
    title: 'Blue Highways',
    author: 'William Least Heat-Moon',
    shelf: 'to-read',
    genre: 'Travel',
  },
  {
    title: 'The Triathlete’s Training Bible',
    author: 'Joe Friel',
    shelf: 'read',
    genre: 'Sport & Science',
    rating: 5,
    favorite: true,
    note: 'Still the reference shelf for periodization.',
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    shelf: 'read',
    genre: 'Fiction',
    rating: 5,
  },
  {
    title: 'Desert Solitaire',
    author: 'Edward Abbey',
    shelf: 'to-read',
    genre: 'Nature',
  },
  {
    title: 'Range',
    author: 'David Epstein',
    shelf: 'to-read',
    genre: 'Growth',
  },
];

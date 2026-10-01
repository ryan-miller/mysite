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
    title: 'The Heart\'s Invisible Furies',
    author: 'John Boyne',
    shelf: 'reading',
    //genre: 'Travel',
    rating: 5,
    //favorite: true,
    //note: 'The original road-trip-with-a-camper book.',
  },
  {
    title: 'The River Is Waiting',
    author: 'Wally Lamb',
    shelf: 'read',
    //genre: 'Travel',
    rating: 5,
    //favorite: true,
    note: 'Classic Wally. Destroyed me for a bit.',
  },
  {
    title: 'The First Time I Saw Him',
    author: '',
    shelf: 'read',
    genre: 'Mystery',
    rating: 5,
    //favorite: true,
    note: 'The sequel to The Last Thing He Told Me.',
  },
  {
    title: 'Gone Before Goodbye',
    author: 'Reese Witherspoon',
    shelf: 'read',
    genre: 'Suspense',
    rating: 5,
    //favorite: true,
    //note: 'The original road-trip-with-a-camper book.',
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    shelf: 'read',
    //genre: 'Travel',
    rating: 5,
    //favorite: true,
    //note: 'The original road-trip-with-a-camper book.',
  },
  {
    title: 'A Little Life',
    author: '',
    shelf: 'Paused',
    //genre: 'Travel',
    //rating: ,
    //favorite: true,
    note: 'Might be my first ever DNF',
  },
  {
    title: 'Atmosphere',
    author: 'Taylor Jenkins Reid',
    shelf: 'read',
    genre: 'Historical Fiction',
    rating: 5,
    //favorite: true,
    note: 'Destroed me for a bit.',
  },
];

export interface Dish {
  id: string;
  name: string;
  frenchName?: string;
  courseNumber?: number;
  description: string;
  ingredients: string[];
  pairing?: string;
  price: string;
  dietary: ('GF' | 'DF' | 'V' | 'VG' | 'NF' | 'Caviar' | 'Truffle')[];
  image: string;
  signature?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  frenchTitle: string;
  subtitle: string;
  price: string;
  duration: string;
  coursesCount?: number;
  capacity?: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface TastingMenu {
  id: string;
  title: string;
  frenchTitle: string;
  subtitle: string;
  price: string;
  duration: string;
  coursesCount: number;
  description: string;
  dishes: Dish[];
  pairingOption: {
    name: string;
    price: string;
    description: string;
  };
  highlightNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Plating' | 'Ambiance' | 'Cellar' | 'Craft';
  imageUrl: string;
  caption: string;
  details?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  rating: number;
  quote: string;
  date: string;
  experienceType: string;
}

export interface ReservationBooking {
  guests: number;
  date: string;
  timeSlot: string;
  seatingArea: 'Main Dining' | 'The Hearth Counter' | 'Glasshouse Courtyard' | 'Sommelier Private Salon';
  menuChoice: string;
  winePairing: boolean;
  fullName: string;
  email: string;
  phone: string;
  dietaryNotes: string;
  specialOccasion: string;
}


export type DestinationId = 'spiti' | 'ladakh' | 'uttarakhand' | 'himachal';

export interface DestinationMeta {
  id: DestinationId;
  name: string;
  tagline: string;
  description: string;
  bestSeason: string;
  startingPrice: number;
  image: string;
  popularSpots: string[];
}

export interface DayPlan {
  day: number;
  title: string;
  description: string;
  stayCity: string;
  mealsIncluded: string;
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  destination: DestinationId;
  destinationName: string;
  durationDays: number;
  durationNights: number;
  pricePerPerson: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  category: 'Adventure' | 'Cultural & Heritage' | 'Spiritual & Serene' | 'Honeymoon & Romantic' | 'Family Explorer' | 'Road Trip & Offbeat';
  badge?: 'Bestseller' | 'Trending' | 'Top Rated' | 'Premium Choice';
  featuredImage: string;
  gallery: string[];
  route: string[];
  pickupDrop: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: DayPlan[];
  hotelOptions: {
    standard: string;
    deluxe: string;
    luxury: string;
  };
}

export interface FilterState {
  destination: 'all' | DestinationId;
  duration: 'all' | 'short' | 'medium' | 'long';
  category: string;
  maxBudget: number;
  searchQuery: string;
}

export interface BookingFormState {
  packageId: string;
  packageTitle: string;
  customerName: string;
  phone: string;
  email: string;
  adults: number;
  children: number;
  travelDate: string;
  hotelTier: 'standard' | 'deluxe' | 'luxury';
  pickupCity: string;
  specialRequests: string;
}

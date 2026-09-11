export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  tripTitle: string;
  destination: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export const reviewsData: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Aarav & Priya Sharma',
    location: 'Mumbai, Maharashtra',
    tripTitle: 'Heaven on Earth: Kashmir Golden Paradise Circuit',
    destination: 'Kashmir',
    rating: 5,
    date: 'August 2026',
    comment: 'SkyWander made our Kashmir honeymoon completely stress-free! The private houseboat on Dal Lake was straight out of a painting, and the driver Bilal bhai was courteous, punctual, and knew all the best scenic spots.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-2',
    name: 'Vikramaditya Rathore & Family',
    location: 'Ahmedabad, Gujarat',
    tripTitle: 'Spiti Valley Complete Circuit',
    destination: 'Spiti Valley',
    rating: 5,
    date: 'July 2026',
    comment: 'The Spiti 4x4 expedition was an experience of a lifetime. Camping near Chandratal Lake under millions of stars was magical. The oxygen cylinders and reliable 4x4 vehicle gave our family complete peace of mind.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-3',
    name: 'Neha Kapoor & Friends',
    location: 'Bengaluru, Karnataka',
    tripTitle: 'Royal Rajasthan Heritage & Thar Desert Safari',
    destination: 'Rajasthan',
    rating: 5,
    date: 'January 2026',
    comment: 'From the luxury Swiss tent in Jaisalmer to the sunset boat ride on Lake Pichola in Udaipur, every single arrangement exceeded our expectations. Transparent pricing with no hidden surprises!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-4',
    name: 'Sunil & Sunita Mehra',
    location: 'Delhi NCR',
    tripTitle: 'Divine Kedarnath & Badrinath Sacred Circuit',
    destination: 'Uttarakhand',
    rating: 5,
    date: 'May 2026',
    comment: 'Being elderly travelers, we were anxious about the Kedarnath Yatra. The SkyWander team arranged priority shuttle registration, spotless guesthouses, and a dedicated driver who treated us like family.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-5',
    name: 'Rohan Deshmukh',
    location: 'Pune, Maharashtra',
    tripTitle: 'Manali, Solang Valley & Kasol Pine Trail',
    destination: 'Himachal Pradesh',
    rating: 5,
    date: 'June 2026',
    comment: 'We booked a college reunion trip to Himachal. The Atal Tunnel drive to Sissu and riverside wooden chalets in Kasol were incredible. Super fast communication on WhatsApp whenever we had queries.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
  },
];

export interface TravelTip {
  title: string;
  destination: string;
  season: string;
  badge: string;
  advice: string;
}

export const travelTipsData: TravelTip[] = [
  {
    title: 'When to visit Spiti Valley for roads & snow',
    destination: 'Spiti Valley',
    season: 'June to October',
    badge: 'Road Trip Guide',
    advice: 'Kunzum Pass is typically open between mid-June and mid-October. For snow lovers, winter Spiti expeditions via the Shimla route operate from December to February.',
  },
  {
    title: 'Gondola Cable Car booking for Gulmarg',
    destination: 'Kashmir',
    season: 'Year Round',
    badge: 'Kashmir Tip',
    advice: 'Book Gulmarg Gondola Phase 1 & 2 tickets at least 3-4 weeks in advance during peak summer and winter ski seasons as tickets are limited per day.',
  },
  {
    title: 'Best weather for Rajasthan Forts & Desert',
    destination: 'Rajasthan',
    season: 'October to March',
    badge: 'Desert Safari',
    advice: 'Winter months provide pleasant daytime temperatures (20°C - 26°C) perfect for walking through Amer Fort, Mehrangarh, and enjoying evening desert camp bonfires.',
  },
  {
    title: 'Essential registration for Uttarakhand Yatras',
    destination: 'Uttarakhand',
    season: 'May to November',
    badge: 'Yatra Advisory',
    advice: 'Biometric Char Dham registration is mandatory for Kedarnath and Badrinath. Our travel managers assist you with this at zero extra cost upon booking.',
  },
  {
    title: 'Atal Tunnel & Rohtang Pass permits',
    destination: 'Himachal Pradesh',
    season: 'May to November',
    badge: 'Himachal Advisory',
    advice: 'While Atal Tunnel is open year-round, Rohtang Pass requires an NGT green permit with daily quota. We pre-book this on your behalf when included in your package.',
  },
];

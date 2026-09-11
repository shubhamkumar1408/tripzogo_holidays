import { DestinationId, DestinationMeta } from '../types';

export const destinationsData: DestinationMeta[] = [
  {
    id: 'spiti',
    name: 'Spiti Valley',
    tagline: 'High-Altitude Himalayan Desert & Ancient Monasteries',
    description: 'Explore the rugged terrains of Kaza, Key Monastery, Kibber, Tabo, and high mountain passes with crystal-clear Chandratal Lake.',
    bestSeason: 'May – Oct (Winter Spiti: Dec – Feb)',
    startingPrice: 20000,
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80',
    popularSpots: ['Kaza', 'Key Monastery', 'Chandratal', 'Hikkim', 'Komic', 'Tabo'],
  },
  {
    id: 'ladakh',
    name: 'Leh Ladakh',
    tagline: 'Land of High Passes, Blue Lakes & Stargazing',
    description: 'Traverse the legendary Khardung La, ride double-humped camels in Nubra Valley, camp by Pangong Tso, and visit ancient gompas.',
    bestSeason: 'May – Oct',
    startingPrice: 35000,
    image: '/images/leh-ladakh-pangong.jpg',
    popularSpots: ['Leh', 'Nubra Valley', 'Pangong Lake', 'Khardung La', 'Magnetic Hill', 'Diskit'],
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    tagline: 'Char Dham, Sacred Kedarnath & Alpine Treks',
    description: 'Spiritual pilgrimages to Kedarnath and Char Dham, plus breathtaking Himalayan treks like Chopta Tungnath, Valley of Flowers & Kedarkantha.',
    bestSeason: 'May – Jun & Sep – Nov (Winter Treks: Dec – Feb)',
    startingPrice: 5000,
    image: '/images/chardham-badrinath.jpg',
    popularSpots: ['Kedarnath', 'Char Dham', 'Chopta Tungnath', 'Valley of Flowers', 'Kedarkantha', 'Rishikesh'],
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    tagline: 'Pine Forests, Scenic Passes & Riverside Cafes',
    description: 'Experience the magic of Manali, chilled-out Kasol, offbeat Jibhi & Sojha, Tibetan serenity in Mcleodganj, and the thrilling Hampta Pass trek.',
    bestSeason: 'All Year (Treks: Jun – Oct)',
    startingPrice: 6000,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80',
    popularSpots: ['Manali', 'Kasol', 'Jibhi & Sojha', 'Mcleodganj', 'Hampta Pass', 'Tirthan Valley'],
  },
];

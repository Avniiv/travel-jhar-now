// Mock data for the Johar Jharkhand platform
export interface Destination {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  price: number;
  features: string[];
  highlights: string[];
  bestTime: string;
  duration: string;
  category: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  pricePerNight: number;
  amenities: string[];
  roomTypes: string[];
  destination: string;
  coordinates: { lat: number; lng: number };
}

export interface Guide {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  pricePerDay: number;
  languages: string[];
  specialties: string[];
  experience: number;
  isVerified: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  type: 'homestay' | 'artisan' | 'experience';
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  price: number;
  features: string[];
  owner: string;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  highlights: string[];
  destinations: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Hundru Falls',
    description: 'One of the most spectacular waterfalls in Jharkhand, Hundru Falls cascades from a height of 98 meters. Located near Ranchi, this natural wonder is formed by the Subarnarekha River and offers breathtaking views, especially during the monsoon season.',
    shortDescription: 'Spectacular 98-meter waterfall near Ranchi',
    location: 'Ranchi',
    rating: 4.5,
    reviewCount: 124,
    image: '/src/assets/hundru-falls.jpg',
    price: 500,
    features: ['Natural Pool', 'Trekking', 'Photography', 'Monsoon Special'],
    highlights: ['98-meter cascade', 'Subarnarekha River', 'Natural swimming pool', 'Scenic viewpoints'],
    bestTime: 'July to February',
    duration: '4-6 hours',
    category: 'Waterfalls'
  },
  {
    id: '2',
    name: 'Netarhat',
    description: 'Known as the "Queen of Chotanagpur", Netarhat is a scenic hill station famous for its sunrise and sunset views. The rolling hills, dense forests, and pleasant climate make it a perfect getaway for nature lovers and peace seekers.',
    shortDescription: 'Queen of Chotanagpur hill station',
    location: 'Latehar',
    rating: 4.7,
    reviewCount: 89,
    image: '/src/assets/netarhat-hills.jpg',
    price: 800,
    features: ['Sunrise Point', 'Sunset Views', 'Hill Station', 'Forest Trails'],
    highlights: ['Magnolia Point sunrise', 'Koel View Point', 'Netarhat Residential School', 'Pine forests'],
    bestTime: 'October to March',
    duration: '2-3 days',
    category: 'Hill Stations'
  },
  {
    id: '3',
    name: 'Tribal Villages',
    description: 'Experience the authentic tribal culture of Jharkhand by visiting traditional villages. Interact with local communities, learn about their customs, witness traditional dances, and understand their sustainable way of life.',
    shortDescription: 'Authentic tribal cultural experiences',
    location: 'Various',
    rating: 4.8,
    reviewCount: 56,
    image: '/src/assets/tribal-village.jpg',
    price: 1200,
    features: ['Cultural Immersion', 'Traditional Crafts', 'Folk Dances', 'Local Cuisine'],
    highlights: ['Santhali culture', 'Traditional huts', 'Tribal festivals', 'Handicraft workshops'],
    bestTime: 'November to February',
    duration: '1-2 days',
    category: 'Cultural'
  },
  {
    id: '4',
    name: 'Betla National Park',
    description: 'A tiger reserve and national park covering 979 square kilometers, Betla is home to tigers, elephants, leopards, and various bird species. The park offers jeep safaris and nature walks through dense Sal forests.',
    shortDescription: 'Tiger reserve with diverse wildlife',
    location: 'Palamu',
    rating: 4.3,
    reviewCount: 78,
    image: '/src/assets/hero-jharkhand.jpg',
    price: 1500,
    features: ['Tiger Safari', 'Wildlife Photography', 'Bird Watching', 'Nature Trails'],
    highlights: ['Bengal tigers', 'Asiatic elephants', 'Sal forests', 'Kechki waterfalls'],
    bestTime: 'November to June',
    duration: '2-3 days',
    category: 'Wildlife'
  },
  {
    id: '5',
    name: 'Jonha Falls',
    description: 'Also known as Gautamdhara, Jonha Falls is a beautiful 43-meter high waterfall surrounded by hills and dense forests. The falls have religious significance and offer a perfect spot for picnics and photography.',
    shortDescription: '43-meter waterfall with religious significance',
    location: 'Ranchi',
    rating: 4.2,
    reviewCount: 92,
    image: '/src/assets/hundru-falls.jpg',
    price: 400,
    features: ['Religious Site', 'Picnic Spot', 'Trekking', 'Photography'],
    highlights: ['Gautamdhara temple', 'Natural pool', 'Hill views', 'Peaceful environment'],
    bestTime: 'July to March',
    duration: '3-4 hours',
    category: 'Waterfalls'
  },
  {
    id: '6',
    name: 'Dassam Falls',
    description: 'A magnificent waterfall created by the Kanchi River, Dassam Falls drops from a height of 44 meters. The falls are surrounded by dense forests and offer excellent opportunities for adventure activities.',
    shortDescription: 'Magnificent 44-meter cascade by Kanchi River',
    location: 'Ranchi',
    rating: 4.4,
    reviewCount: 67,
    image: '/src/assets/hundru-falls.jpg',
    price: 600,
    features: ['Adventure Sports', 'Rock Climbing', 'Rappelling', 'Nature Photography'],
    highlights: ['Kanchi River', 'Rock formations', 'Adventure activities', 'Forest trails'],
    bestTime: 'August to February',
    duration: '4-5 hours',
    category: 'Waterfalls'
  }
];

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Forest View Resort',
    description: 'A luxurious eco-resort nestled in the hills with panoramic forest views and modern amenities.',
    location: 'Netarhat',
    rating: 4.6,
    reviewCount: 45,
    image: '/src/assets/netarhat-hills.jpg',
    pricePerNight: 3500,
    amenities: ['Restaurant', 'Spa', 'Bonfire', 'Nature Walks', 'WiFi'],
    roomTypes: ['Deluxe', 'Suite', 'Forest Cottage'],
    destination: 'Netarhat',
    coordinates: { lat: 23.4667, lng: 84.0833 }
  },
  {
    id: '2',
    name: 'Waterfall Inn',
    description: 'Budget-friendly accommodation near Hundru Falls with basic amenities and local hospitality.',
    location: 'Ranchi',
    rating: 4.1,
    reviewCount: 78,
    image: '/src/assets/hundru-falls.jpg',
    pricePerNight: 1200,
    amenities: ['Restaurant', 'Parking', 'Room Service', 'Travel Desk'],
    roomTypes: ['Standard', 'Deluxe'],
    destination: 'Hundru Falls',
    coordinates: { lat: 23.4094, lng: 85.4606 }
  },
  {
    id: '3',
    name: 'Tribal Heritage Stay',
    description: 'Experience authentic tribal lifestyle in traditional huts with modern comfort.',
    location: 'Khunti',
    rating: 4.8,
    reviewCount: 32,
    image: '/src/assets/tribal-village.jpg',
    pricePerNight: 2000,
    amenities: ['Traditional Meals', 'Cultural Programs', 'Handicraft Shop', 'Village Tours'],
    roomTypes: ['Traditional Hut', 'Mud House'],
    destination: 'Tribal Villages',
    coordinates: { lat: 23.0733, lng: 85.2833 }
  },
  {
    id: '4',
    name: 'Safari Lodge Betla',
    description: 'Wildlife lodge inside Betla National Park offering comfortable stays and safari packages.',
    location: 'Palamu',
    rating: 4.3,
    reviewCount: 56,
    image: '/src/assets/hero-jharkhand.jpg',
    pricePerNight: 4000,
    amenities: ['Safari Packages', 'Restaurant', 'Naturalist Guide', 'Bonfire', 'Library'],
    roomTypes: ['Safari Tent', 'Forest Lodge', 'Tree House'],
    destination: 'Betla National Park',
    coordinates: { lat: 23.8833, lng: 84.1833 }
  }
];

export const guides: Guide[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    description: 'Experienced wildlife guide with 8 years of expertise in Betla National Park. Specializes in tiger tracking and bird watching.',
    location: 'Betla National Park',
    rating: 4.9,
    reviewCount: 67,
    image: '/src/assets/hero-jharkhand.jpg',
    pricePerDay: 2000,
    languages: ['Hindi', 'English', 'Santhali'],
    specialties: ['Wildlife Safari', 'Bird Watching', 'Photography'],
    experience: 8,
    isVerified: true
  },
  {
    id: '2',
    name: 'Sunita Devi',
    description: 'Cultural heritage expert and tribal art enthusiast. Provides immersive experiences in traditional villages.',
    location: 'Tribal Villages',
    rating: 4.8,
    reviewCount: 43,
    image: '/src/assets/tribal-village.jpg',
    pricePerDay: 1500,
    languages: ['Hindi', 'Santhali', 'Mundari'],
    specialties: ['Cultural Tours', 'Tribal Arts', 'Traditional Crafts'],
    experience: 6,
    isVerified: true
  },
  {
    id: '3',
    name: 'Amit Singh',
    description: 'Adventure enthusiast and trekking guide. Expert in waterfall treks and hill station tours.',
    location: 'Ranchi',
    rating: 4.7,
    reviewCount: 89,
    image: '/src/assets/hundru-falls.jpg',
    pricePerDay: 1800,
    languages: ['Hindi', 'English'],
    specialties: ['Trekking', 'Waterfall Tours', 'Adventure Sports'],
    experience: 5,
    isVerified: true
  },
  {
    id: '4',
    name: 'Priya Sharma',
    description: 'Nature photographer and hill station specialist. Knows the best spots for sunrise and sunset views.',
    location: 'Netarhat',
    rating: 4.6,
    reviewCount: 34,
    image: '/src/assets/netarhat-hills.jpg',
    pricePerDay: 2200,
    languages: ['Hindi', 'English'],
    specialties: ['Photography', 'Nature Tours', 'Sunrise/Sunset Points'],
    experience: 4,
    isVerified: true
  }
];

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'Santhal Handicrafts',
    type: 'artisan',
    description: 'Authentic Santhali handicrafts including traditional jewelry, pottery, and textiles made by local artisans.',
    location: 'Dumka',
    rating: 4.7,
    reviewCount: 56,
    image: '/src/assets/cultural-marketplace.jpg',
    price: 500,
    features: ['Traditional Jewelry', 'Pottery', 'Handwoven Textiles', 'Wood Carvings'],
    owner: 'Mangal Murmu'
  },
  {
    id: '2',
    name: 'Village Homestay',
    type: 'homestay',
    description: 'Experience authentic village life with a local family. Includes traditional meals and cultural activities.',
    location: 'Khunti',
    rating: 4.8,
    reviewCount: 23,
    image: '/src/assets/tribal-village.jpg',
    price: 1800,
    features: ['Traditional Meals', 'Cultural Activities', 'Village Tours', 'Farming Experience'],
    owner: 'Raman Oraon'
  },
  {
    id: '3',
    name: 'Tribal Dance Experience',
    type: 'experience',
    description: 'Learn traditional tribal dances and participate in cultural ceremonies with local communities.',
    location: 'Saraikela',
    rating: 4.9,
    reviewCount: 34,
    image: '/src/assets/cultural-marketplace.jpg',
    price: 800,
    features: ['Dance Lessons', 'Traditional Music', 'Cultural Ceremonies', 'Costume Try-on'],
    owner: 'Geeta Mahato'
  },
  {
    id: '4',
    name: 'Forest Camping',
    type: 'experience',
    description: 'Overnight camping experience in the forests with bonfire, storytelling, and nature walks.',
    location: 'Netarhat',
    rating: 4.5,
    reviewCount: 67,
    image: '/src/assets/netarhat-hills.jpg',
    price: 2500,
    features: ['Tent Accommodation', 'Bonfire', 'Nature Walks', 'Star Gazing'],
    owner: 'Vikash Kumar'
  }
];

export const itineraries: Itinerary[] = [
  {
    id: '1',
    title: 'Cultural Heritage Trail',
    description: 'Immerse yourself in Jharkhand\'s rich tribal culture with visits to traditional villages, handicraft centers, and cultural performances.',
    duration: '5 Days / 4 Nights',
    price: 15000,
    rating: 4.8,
    reviewCount: 45,
    image: '/src/assets/cultural-marketplace.jpg',
    highlights: ['Tribal village stays', 'Traditional craft workshops', 'Folk dance performances', 'Local cuisine tasting'],
    destinations: ['Tribal Villages', 'Dumka', 'Saraikela'],
    difficulty: 'Easy'
  },
  {
    id: '2',
    title: 'Waterfall Adventure',
    description: 'Explore the magnificent waterfalls of Jharkhand with trekking, swimming, and photography opportunities.',
    duration: '4 Days / 3 Nights',
    price: 12000,
    rating: 4.6,
    reviewCount: 67,
    image: '/src/assets/hundru-falls.jpg',
    highlights: ['Hundru Falls trek', 'Jonha Falls temple visit', 'Dassam Falls adventure', 'Photography workshops'],
    destinations: ['Hundru Falls', 'Jonha Falls', 'Dassam Falls'],
    difficulty: 'Moderate'
  },
  {
    id: '3',
    title: 'Wildlife & Nature',
    description: 'Experience the diverse wildlife and natural beauty of Jharkhand with safari tours and nature walks.',
    duration: '6 Days / 5 Nights',
    price: 20000,
    rating: 4.7,
    reviewCount: 34,
    image: '/src/assets/hero-jharkhand.jpg',
    highlights: ['Tiger safari at Betla', 'Bird watching', 'Nature photography', 'Forest camping'],
    destinations: ['Betla National Park', 'Netarhat', 'Palamu Fort'],
    difficulty: 'Moderate'
  },
  {
    id: '4',
    title: 'Hill Station Retreat',
    description: 'Relax and rejuvenate in the serene hill stations of Jharkhand with scenic views and peaceful environment.',
    duration: '3 Days / 2 Nights',
    price: 8000,
    rating: 4.5,
    reviewCount: 56,
    image: '/src/assets/netarhat-hills.jpg',
    highlights: ['Sunrise at Magnolia Point', 'Sunset views', 'Nature walks', 'Local sightseeing'],
    destinations: ['Netarhat', 'Ranchi'],
    difficulty: 'Easy'
  }
];

export const reviews = [
  {
    id: '1',
    user: 'Priya Sharma',
    rating: 5,
    comment: 'Amazing experience! The tribal village stay was authentic and the hosts were incredibly welcoming.',
    date: '2024-01-15',
    location: 'Mumbai',
    destination: 'Tribal Villages'
  },
  {
    id: '2',
    user: 'Rohit Verma',
    rating: 4,
    comment: 'Hundru Falls is breathtaking during monsoon. The trek was moderate and totally worth it.',
    date: '2024-01-10',
    location: 'Delhi',
    destination: 'Hundru Falls'
  },
  {
    id: '3',
    user: 'Anjali Gupta',
    rating: 5,
    comment: 'Netarhat sunrise views are magical. Perfect place for a peaceful getaway from city life.',
    date: '2024-01-05',
    location: 'Kolkata',
    destination: 'Netarhat'
  }
];
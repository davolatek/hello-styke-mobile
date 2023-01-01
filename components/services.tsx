import {
  Support,
  Cleaning,
  Concierge,
  Shopping,
  Repair,
  Truck,
} from "../assets/images/svg/icons";

import {
  painter,
  cleaner,
  drycleaner,
  driver,
} from "../src/utils/assets";
export const Services = [
  {
    image: <Cleaning />,
    name: "Cleaning",
    id: 1,
  },
  {
    image: <Support />,
    name: "Administrative Support",
    id: 2,
  },
  {
    image: <Concierge />,
    name: "Concierge",
    id: 3,
  },
  {
    image: <Shopping />,
    name: "Shopping",
    id: 4,
  },
  {
    image: <Repair />,
    name: "Repair & Installation",
    id: 5,
  },
  {
    image: <Truck />,
    name: "Moving & Transit",
    id: 6
  },
];

export const PopularServices = [
  {
    image: cleaner,
    id: 1,
    name: "Abigail Rose",
    service: 'Home Cleaning',
    pay: '4,000',
    rating: '4.0',
    review: '1.2k',
    category: 'cleaner',
    page: 'Cleaning',
    bookmarked: true
  },
  {
    image: painter,
    id: 2,
    name: "Bruck Raff",
    service: 'House Painting',
    pay: '5,500',
    rating: '4.0',
    review: '1.2k',
    category: 'painter',
    page: 'Cleaning',
    bookmarked: false
  },
  {
    image: drycleaner,
    id: 3,
    name: "Zainab Munzik",
    service: 'Home Cleaning',
    pay: '3,000',
    rating: '4.0',
    review: '1.2k',
    category: 'cleaner',
    page: 'Shopping',
    bookmarked: false
  },
  {
    image: driver,
    id: 4,
    name: "Mike Abdul",
    service: 'Driver',
    pay: '30,000',
    rating: '4.0',
    review: '1.2k',
    category: 'driver',
    page: 'Moving & Transit',
    bookmarked: true
  },
  {
    image: painter,
    id: 5,
    name: "Mike Abdul",
    service: 'Plumber',
    pay: '32,000',
    rating: '4.0',
    review: '1.2k',
    category: 'ac repair',
    page: 'Administrative support',
    bookmarked: true
  },
];

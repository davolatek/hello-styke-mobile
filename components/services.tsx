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
  clean,
  admin,
  trolley,
  repair,
  container,
  desk,
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
    id: 6,
  },
];

export const PopularServices = [
  {
    image: cleaner,
    id: 1,
    name: "Abigail Rose",
    service: "Home Cleaning",
    pay: "4,000",
    rating: "4.0",
    review: "1.2k",
    category: "cleaner",
    page: "Cleaning",
    bookmarked: true,
  },
  {
    image: painter,
    id: 2,
    name: "Bruck Raff",
    service: "House Painting",
    pay: "5,500",
    rating: "4.0",
    review: "1.2k",
    category: "painter",
    page: "Cleaning",
    bookmarked: false,
  },
  {
    image: drycleaner,
    id: 3,
    name: "Zainab Munzik",
    service: "Home Cleaning",
    pay: "3,000",
    rating: "4.0",
    review: "1.2k",
    category: "cleaner",
    page: "Shopping",
    bookmarked: false,
  },
  {
    image: driver,
    id: 4,
    name: "Mike Abdul",
    service: "Driver",
    pay: "30,000",
    rating: "4.0",
    review: "1.2k",
    category: "driver",
    page: "Moving & Transit",
    bookmarked: true,
  },
  {
    image: painter,
    id: 5,
    name: "Mike Abdul",
    service: "Plumber",
    pay: "32,000",
    rating: "4.0",
    review: "1.2k",
    category: "ac repair",
    page: "Administrative support",
    bookmarked: true,
  },
];
export const reviews = [
  {
    image: painter,
    id: 1,
    date: "1 week ago",
    name: "Cameron Williamson",
    review:
      "This is the first time I’ve used her services, and the results were amazing.",
    rating: "1.0",
    bookmarked: false,
    likes: "650",
  },
  {
    image: painter,
    id: 1,
    date: "1 week ago",
    name: "Cameron Williamson",
    review:
      "This is the first time I’ve used her services, and the results were amazing.",
    rating: "2.0",
    bookmarked: true,
    likes: "650",
  },
  {
    image: painter,
    id: 1,
    date: "1 week ago",
    name: "Cameron Williamson",
    review:
      "This is the first time I’ve used her services, and the results were amazing.",
    rating: "5.0",
    bookmarked: false,
    likes: "650",
  },
  {
    image: painter,
    id: 1,
    date: "1 week ago",
    name: "Cameron Williamson",
    review:
      "This is the first time I’ve used her services, and the results were amazing.",
    rating: "2.0",
    bookmarked: true,
    likes: "650",
  },
];
export const jobBookings = [
  {
    image: cleaner,
    id: 1,
    name: "Abigail Rose",
    service: "Home Cleaning",
    type: "Cancelled",
  },
  {
    image: painter,
    id: 2,
    name: "Bruck Raff",
    service: "House Painting",
    type: "Upcoming",
    date: "Dec 12, 2023",
    startTime: " 9:00 AM",
    endTime: "12:00 PM",
    location: "3 Badagri, Lagos State.",
  },
  {
    image: drycleaner,
    id: 3,
    name: "Zainab Munzik",
    service: "Home Cleaning",
    type: "Completed",
    date: "Dec 12, 2023",
    startTime: " 9:00 AM",
    endTime: "12:00 PM",
    location: "3 Badagri, Lagos State.",
  },
  {
    image: driver,
    id: 4,
    name: "Mike Abdul",
    service: "Driver",
    type: "Completed",
    date: "Dec 12, 2023",
    startTime: " 9:00 AM",
    endTime: "12:00 PM",
    location: "3 Badagri, Lagos State.",
  },
  {
    image: painter,
    id: 5,
    name: "Mike Abdul",
    service: "Plumber",
    type: "Upcoming",
    date: "Dec 12, 2023",
    startTime: " 9:00 AM",
    endTime: "12:00 PM",
    location: "3 Badagri, Lagos State.",
  },
];

export const ChatMessages = [
  {
    image: cleaner,
    id: 1,
    name: "Cameron Williamson",
    message: "Trust me, you did a great ...",
    type: "Outgoing",
    date: "Nov 12, 2023",
  },
  {
    image: painter,
    id: 2,
    name: "Bruck Raff",
    message: "How are you doing?",
    type: "Incoming",
    date: "Nov 12, 2023",
  },
  {
    image: drycleaner,
    id: 3,
    name: "Zainab Munzik",
    service: "Home Cleaning",
    message: "When will you come to get ...",
    type: "Outgoing",
    date: "Nov 12, 2023",
  },
  {
    image: driver,
    id: 4,
    name: "Mike Abdul",
    message: "Trust me, you did a great ...",
    type: "Incoming",
    date: "Nov 12, 2023",
  },
  {
    image: painter,
    id: 5,
    name: "Mike Abdul",
    message: "Trust me, you did a great ...",
    type: "Missed",
    date: "Nov 12, 2023",
  },
];
export const OneService = [
  {
    id: 1,
    type: "cleaning",
    name: "House Cleaning Service",
  },
  {
    id: 2,
    type: "cleaning",
    name: "Disinfecting Service",
  },
  {
    id: 3,
    type: "cleaning",
    name: "Move-in Cleaning",
  },
  {
    id: 4,
    type: "cleaning",
    name: "Move-out Cleaning",
  },
  {
    id: 5,
    type: "cleaning",
    name: "Carpet Cleaning Service",
  },
  {
    id: 6,
    type: "cleaning",
    name: "Car Washing",
  },
  {
    id: 7,
    type: "cleaning",
    name: "Laundry Service",
  },
  {
    id: 8,
    type: "repair & installation",
    name: "TV Mounting",
  },
  {
    id: 9,
    type: "repair & installation",
    name: "CCTV Installation",
  },
  {
    id: 10,
    type: "repair & installation",
    name: "AC Repair & Installation",
  },
  {
    id: 11,
    type: "repair & installation",
    name: "Cables & Dish Installation",
  },
  {
    id: 12,
    type: "administrative support",
    name: "Office Cleaning",
  },
  {
    id: 13,
    type: "administrative support",
    name: "Office Administrator",
  },
  {
    id: 14,
    type: "administrative support",
    name: "Technical Setup Service",
  },
  {
    id: 15,
    type: "concierge",
    name: "personal assistant",
  },
  {
    id: 16,
    type: "concierge",
    name: "Virtual Assistant",
  },
  {
    id: 17,
    type: "concierge",
    name: "Wait In-line",
  },
  {
    id: 18,
    type: "shopping",
    name: "Delivery Service",
  },
];
export const AllServices = [
  {
    image: clean,
    name: "Cleaning",
    id: 1,
  },
  {
    image: admin,
    name: "Administrative Support",
    id: 2,
  },
  {
    image: desk,
    name: "Concierge",
    id: 3,
  },
  {
    image: trolley,
    name: "Shopping",
    id: 4,
  },
  {
    image: repair,
    name: "Repair & Installation",
    id: 5,
  },
  {
    image: container,
    name: "Moving & Transit",
    id: 6,
  },
];

export const Transactions = [
  {
    id: 1,
    date: "Nov 26, 2023",
    name: "Diana Russell",
    amount: "23,000",
    type: "inflow",
  },
  {
    id: 2,
    date: "Nov 28, 2023",
    name: "Diana Russell",
    amount: "44,000",
    type: "outflow",
  },
  {
    id: 3,
    date: "Nov 30, 2023",
    name: "Diana Russell",
    amount: "200,000",
    type: 'inflow'
  },
  {
    id: 4,
    date: "Dec 4, 2023",
    name: "Diana Russell",
    amount: "4,000",
    type: 'inflow'
  },
  {
    id: 5,
    date: "Dec 9, 2023",
    name: "Diana Russell",
    amount: "2,000",
    type: 'outflow'
  },
];

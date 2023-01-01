import {
  Support,
  Cleaning,
  Concierge,
  Shopping,
  Repair,
  Truck,
} from "../assets/images/svg/icons";

import { painter, cleaner, drycleaner, driver } from "../src/utils/assets";
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

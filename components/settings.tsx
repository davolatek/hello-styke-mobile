import {
  Person2,
  Card,
  Notification,
  People,
  Logout,
  Security,
  Language,
  Moon,
  Help,
} from "../assets/images/svg/icons";

export const Settings = [
  {
    name: "Edit Profile",
    icon: <Person2 />,
    page: "edit_profile",
    id: 1,
  },
  {
    name: "Notification",
    icon: <Notification width={15} height={17.65} />,
    page: "notification",
    id: 2,
  },
  {
    name: "Payment",
    icon: <Card />,
    page: "payment_options",
    id: 3,
  },
  {
    name: "Security",
    icon: <Security />,
    page: "security",
    id: 4,
  },
  {
    name: "Language",
    icon: <Language />,
    page: "#",
    id: 5,
  },
  {
    name: "Dark Mode",
    icon: <Moon />,
    page: "#",
    id: 6,
  },
  {
    name: "Invite Friends",
    icon: <People />,
    page: "invite",
    id: 7,
  },
  {
    name: "Help Center",
    icon: <Help />,
    page: "#",
    id: 8,
  },
  {
    name: "Logout",
    icon: <Logout />,
    page: "#",
    id: 9,
  },
];

export const notificationList = [
  {
    name: "General Notification",
    id: 1,
  },
  {
    name: "Special Offers",
    id: 2,
  },
  {
    name: "Promo & Discounts",
    id: 3,
  },
  {
    name: "Payment",
    id: 4,
  },
  {
    name: "App Update",
    id: 5,
  },
  {
    name: "New Service Available",
    id: 6,
  },
  {
    name: "New Tips Available",
    id: 7,
  },
];
export const security = [
  {
    name: "Face ID",
    id: 1,
  },
  {
    name: "Biometic ID",
    id: 2,
  },
  {
    name: "Password",
    id: 3,
  },
];
export const friendList = [
  {
    name: "General George",
    phone: "008054667542",
    id: 1,
  },
  {
    name: "Grace Young",
    phone: "008054667542",
    id: 2,
  },
  {
    name: "Fred Peters",
    phone: "008054667542",
    id: 3,
  },
  {
    name: "Priscillia John",
    phone: "008054667542",
    id: 4,
  },
];

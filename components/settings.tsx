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
  PortfolioIcon,
  GuarantorIcon,
  AccountIcon,
  SettingIcon,
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
export const TaskerSettings = [
  {
    name: "Personal Information",
    icon: <Person2 />,
    page: "personal_info",
    id: 1,
  },
  {
    name: "Portfolio",
    icon: <PortfolioIcon />,
    page: "",
    id: 2,
  },
  {
    name: "Bank Details",
    icon: <Card />,
    page: "bank_details",
    id: 3,
  },
  {
    name: "Wallet",
    icon: <Card />,
    page: "wallet",
    id: 4,
  },
  {
    name: "Guarantors Form",
    icon: <GuarantorIcon />,
    page: "guarantor_form",
    id: 5,
  },
  {
    name: "Account Verification",
    icon: <AccountIcon />,
    page: "acct_verification",
    id: 6,
  },
  {
    name: "Language",
    icon: <Language />,
    page: "#",
    id: 7,
  },
  {
    name: "Dark Mode",
    icon: <Moon />,
    page: "#",
    id: 8,
  },
  {
    name: "Invite Friends",
    icon: <People />,
    page: "invite",
    id: 9,
  },
  {
    name: "Help Center",
    icon: <Help />,
    page: "#",
    id: 10,
  },
  {
    name: "Settings",
    icon: <SettingIcon />,
    page: "#",
    id: 11,
  },
  {
    name: "Logout",
    icon: <Logout />,
    page: "#",
    id: 12,
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

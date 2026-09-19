export const site = {
  name: "Plusnet Broadband Services Limited",
  phone: "08078089082",
  email: "info@plusnet.ng",
  offices: [
    { city: "Abuja Office", address: "#8 Toamasina Street, Wuse 2. FCT, Abuja" },
    { city: "Lagos Office", address: "#39 Osolo Way Ajao Estate Isolo Lagos" },
  ],
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Plusnet",
    href: "/our-network",
    children: [
      { label: "Our Network", href: "/our-network" },
      { label: "Why Plusnet", href: "/why-plusnet" },
      { label: "Switching to Plusnet", href: "/switching-to-plusnet" },
      { label: "Customer Testimonial", href: "/customer-testimonial" },
      { label: "Partner With Us", href: "/partner-with-us" },
    ],
  },
  {
    label: "Broadband",
    href: "/package-guide",
    children: [
      { label: "Package Guide", href: "/package-guide" },
      { label: "Switching to Plusnet", href: "/switching-to-plusnet" },
      { label: "Sales Inquiries", href: "/contact-us" },
    ],
  },
  {
    label: "Selfcare",
    href: "/support-portal",
    children: [
      { label: "Help & Support", href: "/support-portal" },
      { label: "My Account", href: "/support-portal" },
    ],
  },
];

export const packages = [
  {
    name: "Unlimited Access",
    price: "N19,350",
    speed: "Up to 10Mbps download and upload speed, burstable to 30Mbps",
  },
  {
    name: "Unlimited Starter",
    price: "N27,850",
    speed: "Up to 10Mbps download and upload speed, burstable to 40Mbps",
  },
  {
    name: "Unlimited Extra",
    price: "N35,470",
    speed: "Up to 10Mbps download and upload speed, burstable to 60Mbps",
    featured: true,
  },
  {
    name: "Unlimited Elite",
    price: "N53,750",
    speed: "Up to 20Mbps download and upload speed, burstable to 70Mbps",
  },
];

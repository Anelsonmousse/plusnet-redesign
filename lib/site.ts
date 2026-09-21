export const site = {
  name: "Plusnet Broadband Services Limited",
  phone: "08078089082",
  email: "info@plusnet.ng",
  portal: "https://portal.plusnet.ng",
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
      { label: "My Account", href: "https://portal.plusnet.ng" },
    ],
  },
];

export const installationFee = "N75,250";

export const packages = [
  { name: "Unlimited Access", price: "N19,350", speed: "40 Mbps" },
  { name: "Unlimited Starter", price: "N26,875", speed: "50 Mbps" },
  { name: "Unlimited Extra", price: "N35,475", speed: "70 Mbps", featured: true },
  { name: "Unlimited Elite", price: "N53,750", speed: "80 Mbps" },
];

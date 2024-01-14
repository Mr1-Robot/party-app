// Nav Links
export const navItems = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "About Us", href: "/about-us" },
  { id: 2, title: "Party Starty", href: "/party" },
];

export const cardsData = [
  {
    id: 0,
    img: "/hackathon.png",
    title: "Aswar Academy",
    description:
      "Aswar Academy, where knowledge meets inspiration. As a beacon of educational ex- cellence, we strive to empower minds and foster a culture of lifelong learning",
  },
  {
    id: 1,
    img: "/img-1.webp",
    title: "Hub 200",
    description:
      "Computiq is a leading software shop delivering on their mission of technical solutions and education. It is a legally registered entity,",
  },
  {
    id: 2,
    img: "/img-2.webp",
    title: "Aswar",
    description:
      "Aswar group company presents a wide range of engineering services and technical solutions for all projects, including: - Engineering consultancy.",
  },
];

// Footer Quick Links
export const footerLinks = [
  {
    id: 0,
    heading: "Quick Links",
    links: [
      { id: 0, title: "Home", href: "/" },
      { id: 1, title: "About Us", href: "/about-us" },
      { id: 2, title: "Hosting Party", href: "/party" },
    ],
  },

  {
    id: 1,
    heading: "Sponsered By",
    links: [
      { id: 0, title: "Aswar Co.", href: "https://aswar.com" },
      { id: 1, title: "Hub200", href: "https://computiq.com" },
      { id: 2, title: "HurryAppHackathon", href: "https://hurryapphackthon" },
    ],
  },
];

// FRAMER MOTION VARIANTS NAVBAR

// Unordered List Variants
export const listItemVariants = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

// List Item Variants
export const itemsVariants = {
  hidden: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

// Logo Variants
export const logoVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -40 },
  animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.3 } },
};

// Action Buttons Variants
export const signInVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.7 } },
};

export const signUpVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.8 } },
};

// FRAMER MOTION HERO
// Text Variants
export const heroText = {
  hidden: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1 } },
};

// Action Btn Variants
export const actionBtn = {
  hidden: { scale: 1 },
  whileHover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 500 },
  },
  whileTap: { scale: 0.95 },
};

// Main Img Variants
export const mainImg = {
  hidden: { opacity: 0, scale: 0.8 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 1.2 },
  },
};

// Card Variants
export const cardsVariants = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

export const cardVariant = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

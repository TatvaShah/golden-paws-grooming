import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Golden Paws",
  tagline: "Dog grooming for Pomeranians and small breeds.",
  category: "Dog grooming",
  schemaType: "LocalBusiness",
  area: "Mississauga, ON",
  siteUrl: "https://golden-paws-grooming-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#4e565b" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Mississauga dog grooming",
    headline: "Grooming with care and precision",
    subhead: "Dog grooming and de-shedding, including Pomeranians and small breeds. Text to book your appointment.",
    images: [
      { src: "/images/post-1.jpg", alt: "A Pomeranian after a groom at Golden Paws" },
      { src: "/images/post-8.jpg", alt: "A fluffy white Pomeranian on the grooming table" },
      { src: "/images/post-9.jpg", alt: "A small white dog after a groom at Golden Paws" },
    ],
    primaryCta: { label: "Text to book", href: "tel:+16478351008" },
    secondaryCta: { label: "See the grooms", href: "#gallery" },
  },

  highlights: ["Dog grooming", "De-shedding", "Pomeranians and small breeds", "Text to book"],

  about: {
    title: "Welcome to Golden Paws",
    body: [
      "Golden Paws provides dog grooming in Mississauga, including Pomeranians and small breeds, along with de-shedding.",
      "The groomer placed 2nd at the Hyponic Vietnam grooming competition in 2026 and 3rd at ISCC Vietnam. Book by text, Instagram DM, or Facebook message.",
    ],
    image: { src: "/images/post-8.jpg", alt: "A fluffy white Pomeranian on the grooming table" },
  },

  menu: {
    label: "Services",
    title: "Our services",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Grooming",
        items: [
          { name: "Dog grooming" },
          { name: "De-shedding" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent grooms",
    items: [
      { src: "/images/post-1.jpg", alt: "A Pomeranian after a groom at Golden Paws", caption: "Pomeranian groom" },
      { src: "/images/post-8.jpg", alt: "A fluffy white Pomeranian on the grooming table", caption: "On the table" },
      { src: "/images/post-9.jpg", alt: "A small white dog after a groom at Golden Paws", caption: "A small breed groom" },
      { src: "/images/post-10.jpg", alt: "A Pomeranian sitting in the salon", caption: "In the salon" },
      { src: "/images/post-5.jpg", alt: "A fluffy white dog after grooming", caption: "A fluffy finish" },
      { src: "/images/post-2.jpg", alt: "Golden Paws at the Hyponic Vietnam grooming competition", caption: "Hyponic Vietnam 2026" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "golden_paws_1900",
    embeds: ["https://www.instagram.com/p/De_iAMShuY-/", "https://www.instagram.com/p/De54N-3gdUP/"],
  },

  order: {
    label: "How to book",
    title: "Book an appointment",
    intro: "Text 647-835-1008 to book, or send a message on Instagram or Facebook.",
    dmMessage: "Hi Golden Paws! I would like to book a groom.\nDog breed:\nService:\nPreferred date:",
    headerCtaLabel: "DM to book",
    links: [{ label: "Text to book", href: "tel:+16478351008" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Text 647-835-1008, or send a message on Instagram or Facebook." },
    { q: "Where are you located?", a: "Golden Paws is at 1900 Dundas St E, Mississauga, Ontario." },
    { q: "What services do you offer?", a: "Dog grooming and de-shedding, including Pomeranians and small breeds." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mississauga, Ontario",
    phone: "647-835-1008",
    address: "1900 Dundas St E, Mississauga, ON",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/golden_paws_1900/" }],
  },

  seo: {
    title: "Golden Paws | Dog grooming in Mississauga",
    description: "Dog grooming and de-shedding in Mississauga, including Pomeranians and small breeds. Text 647-835-1008 to book.",
    keywords: ["dog grooming Mississauga", "Pomeranian groomer Mississauga", "Golden Paws"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

import type { ProductDetails } from '~/types/product-details';

const synhopeM6Plus: ProductDetails = {
  id: 1,
  fileName: 'synhopeM6Plus',
  info: {
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701618666/typesOfIrrigators/portable/Synhope-b08/kqe8imskviqh6vic6xbl.webp",
    imageSmall: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701618666/typesOfIrrigators/portable/Synhope-b08/raqx09dsxkupdjhcgg7v.webp",
    alt: "SYNHOPE M6Plus Water Flosser",
    title: "SYNHOPE M6Plus Water Flosser",
    subtitle: "Mini Cordless Portable Oral Irrigator",
    description: "The SYNHOPE M6Plus is an ultra-compact water flosser designed for home and travel. With its telescopic water tank, 3 cleaning modes, and long battery life, it offers effective plaque removal and gum care.",
    price: "$27.99",
    updatedDate: "2020-09-16",
    buyLink: "https://amzn.to/46MIggT",
    cta: "Buy Now on Amazon",
    rating: {
      stars: 4.2,
      reviews: 14801,
    },
    characteristics: [
      "Telescopic water tank",
      "High pressure water pulse: 1200 times/min",
      "140PSI strong water pressure",
      "3 cleaning modes: Soft, Pulse, Strong",
      "IPX7 waterproof design",
      "USB rechargeable with 30-day battery life",
    ],
  },
  tableOfContent: [
    { id: "#overview", content: "Overview" },
    { id: "#features", content: "Features" },
    { id: "#comparison", content: "Comparison" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: "SYNHOPE M6Plus Water Flosser",
    description: "Compact, efficient, and travel-friendly oral care solution.",
    subtext: "Designed for effective plaque removal and gum health.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "Portable Design",
        description: "Telescopic water tank and lightweight build make it easy to carry anywhere.",
      },
      {
        title: "Three Cleaning Modes",
        description: "Choose between Soft, Pulse, and Strong modes for personalized cleaning.",
      },
      {
        title: "IPX7 Waterproof",
        description: "Safe to use in wet environments with leak-proof design.",
      },
      {
        title: "Long Battery Life",
        description: "Rechargeable battery provides up to 30 days of use on a single charge.",
      },
      {
        title: "High Pressure Cleaning",
        description: "Delivers 1200 water pulses per minute and 140PSI for deep cleaning.",
      },
      {
        title: "360-Degree Rotating Nozzle",
        description: "Ensures thorough cleaning, reaching every corner of the mouth.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "How the SYNHOPE M6Plus stands out from competitors.",
    models: [
      {
        id: 1,
        productUrl: "/reviews/portable-oral-irrigators/best/synhopeM6Plus",
        model: "SYNHOPE M6Plus",
        image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701618666/typesOfIrrigators/portable/Synhope-b08/raqx09dsxkupdjhcgg7v.webp",
        alt: "SYNHOPE M6Plus",
        prime: true,
        dimensions: "4.88 inches compact size",
        tips: "Includes 4 replacement jet nozzles",
        capacity: "Telescopic water tank",
        highlight: "Lightweight and portable",
        problem: "Limited water capacity for extended sessions",
        price: "$27.99",
        satisfaction: "4.2 out of 5 stars",
        view: "View on Amazon",
      },
    ],
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Understand the strengths and limitations of the SYNHOPE M6Plus.",
    cta: "Buy Now",
    buyLink: "https://amzn.to/46MIggT",
    pros: [
      { title: "Compact and portable design" },
      { title: "Effective plaque removal" },
      { title: "Affordable price" },
    ],
    cons: [
      { title: "Smaller water tank capacity" },
      { title: "May not suit heavy-duty cleaning needs" },
    ],
  },
};

export default synhopeM6Plus;

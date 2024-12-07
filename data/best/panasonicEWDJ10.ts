import type { ProductDetails } from '~/types/product-details'

const panasonicEWDJ10: ProductDetails = {
  id: 4,
  fileName: 'panasonicEWDJ10',
  info: {
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701541960/typesOfIrrigators/portable/Panasonic-EW-DJ10/k2z9vwzvovgs6rfzzemh.webp",
    imageSmall: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701541960/typesOfIrrigators/portable/Panasonic-EW-DJ10/k2z9vwzvovgs6rfzzemh.webp",
    alt: "Panasonic Portable Water Flosser EW-DJ10",
    title: "Panasonic EW-DJ10 Portable Water Flosser",
    subtitle: "Cordless and Travel-Friendly Oral Irrigator",
    description: "The Panasonic EW-DJ10 offers an easy and effective way to maintain oral hygiene with targeted water jets. Its portable, collapsible design is perfect for home and travel use.",
    price: "$36.99",
    updatedDate: "2024-12-01",
    buyLink: "https://amzn.to/3RvvXBh",
    cta: "Buy on Amazon",
    rating: {
      stars: 4.2,
      reviews: 1171,
    },
    characteristics: [
      "530 kPa water pressure",
      "165 ml water tank capacity",
      "Two-speed settings",
      "Collapsible and travel-friendly design",
      "Battery-operated (2 AA batteries)",
    ]
  },
  tableOfContent: [
    { id: "#title", content: "Overview" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: "Panasonic EW-DJ10 Overview",
    description: "Compact, portable, and effective for a healthier smile on the go.",
    subtext: "Portable water flossing made simple.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "Dual-Speed Pulses",
        description: "High-speed for normal cleaning and low-speed for sensitive gums.",
      },
      {
        title: "Portable Design",
        description: "Collapsible for travel, with a built-in water tank in the handle.",
      },
      {
        title: "Easy Maintenance",
        description: "Waterproof and washable under running water.",
      },
      {
        title: "Battery-Powered",
        description: "Operates with 2 AA batteries for up to 20 minutes of use.",
      },
      {
        title: "Targeted Cleaning",
        description: "Water jets remove food debris, plaque, and bacteria effectively.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "How the Panasonic EW-DJ10 stacks up against other portable irrigators.",
    models: [
      {
        id: 1,
        productUrl: "/reviews/portable-oral-irrigators/best/panasonicEWDJ10",
        model: "Panasonic EW-DJ10",
        image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701541960/typesOfIrrigators/portable/Panasonic-EW-DJ10/k2z9vwzvovgs6rfzzemh.webp",
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: "$36.99",
        satisfaction: "High customer satisfaction with 4.2/5 stars",
        view: "View on Amazon",
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Weighing the benefits and drawbacks of the Panasonic EW-DJ10.",
    cta: "Buy on Amazon",
    buyLink: "https://amzn.to/3RvvXBh",
    pros: [
      { title: "Portable and travel-friendly" },
      { title: "Easy to clean and maintain" },
      { title: "Affordable price point" },
    ],
    cons: [
      { title: "Limited water tank capacity" },
      { title: "Battery replacement required" },
    ],
  },
}

export default panasonicEWDJ10;

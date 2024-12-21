import type { ProductDetails } from '~/types/product-details';
import { synhopeM6PlusGlobalData } from './01-global'

const synhopeM6Plus: ProductDetails = {
  id: 2,
  fileName: 'synhopeM6Plus',
  info: {
    image: synhopeM6PlusGlobalData.image,
    alt: "SYNHOPE Mini Cordless Portable Water Flosser",
    title: "SYNHOPE Mini Cordless Water Flosser",
    subtitle: "Portable Oral Irrigator for Travel and Home",
    description: "Compact and efficient water flosser designed for easy travel and effective oral hygiene. Featuring a telescopic water tank, 3 cleaning modes, and IPX7 waterproof design.",
    price: synhopeM6PlusGlobalData.productPrice,
    updatedDate: synhopeM6PlusGlobalData.updatedDate,
    buyLink: synhopeM6PlusGlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 4.2,
      reviews: 15671,
    },
    characteristics: [
      "Compact and portable design",
      "Telescopic water tank",
      "3 cleaning modes (Soft, Pulse, Strong)",
      "IPX7 waterproof for safe usage",
      "Long battery life with USB charging",
    ],
  },
  tableOfContent: [
    { id: "#title", content: "Overview" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: "SYNHOPE Mini Cordless Portable Water Flosser",
    description: "Effortless oral care with a compact and travel-friendly water flosser.",
    subtext: "Perfect for daily use and on-the-go dental hygiene.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      { title: "Compact Design", description: "Easy to carry with a telescopic water tank for portability." },
      { title: "High Pressure Performance", description: "1200 water pulses per minute with 140 PSI pressure." },
      { title: "3 Cleaning Modes", description: "Choose from Soft, Pulse, or Strong modes to suit your needs." },
      { title: "IPX7 Waterproof", description: "Safe to use under running water without leaks." },
      { title: "Long Battery Life", description: "Lasts up to 30 days on a full charge." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "See how the SYNHOPE Mini Cordless Water Flosser stacks up against similar products.",
    models: [
      {
        id: 1,
        path: synhopeM6PlusGlobalData.path || "/products/synhope-flosser",
        model: "SYNHOPE Mini Cordless",
        image: synhopeM6PlusGlobalData.image,
        alt: "SYNHOPE Mini Cordless Water Flosser",
        prime: true,
        dimensions: "Palm-sized, lightweight design",
        tips: "Includes 4 replacement jet tips",
        capacity: "Telescopic water tank for up to 50 seconds of flossing",
        highlight: "Portable design ideal for travel",
        problem: "Limited water capacity compared to larger models",
        price: synhopeM6PlusGlobalData.productPrice,
        satisfaction: "Compact and efficient for daily use.",
      }
    ],
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "An honest look at the strengths and limitations of the SYNHOPE Mini Cordless Water Flosser.",
    cta: "Buy on Amazon",
    buyLink: synhopeM6PlusGlobalData.amazonUrl,
    pros: [
      { title: "Compact and travel-friendly" },
      { title: "Effective cleaning with high water pressure" },
      { title: "Long-lasting battery life" },
    ],
    cons: [
      { title: "Limited water tank capacity" },
      { title: "Not ideal for extensive cleaning sessions" },
    ],
  },
}

export default synhopeM6Plus;

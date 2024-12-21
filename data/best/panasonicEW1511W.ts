import type { ProductDetails } from '~/types/product-details'
import { panasonicEW1511WGlobalData, waterpikwp580GlobalData, synhopeM6PlusGlobalData } from './01-global'

const panasonicEW1511W: ProductDetails = {
  id: panasonicEW1511WGlobalData.id,
  fileName: 'panasonicEW1511W',
  info: {
    image: panasonicEW1511WGlobalData.image,
    alt: "Panasonic Portable Water Flosser EW-DJ10",
    title: "Panasonic EW1511W Portable Water Flosser, 165ml.",
    subtitle: "For Dental, Bridge and Orthodontic Care",
    description: "Portable oral irrigator with ultrasonic cleaning for effective dental hygiene. Ideal for braces, bridges, and general care.",
    price: panasonicEW1511WGlobalData.productPrice,
    updatedDate: panasonicEW1511WGlobalData.updatedDate,
    buyLink: panasonicEW1511WGlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: panasonicEW1511WGlobalData.rating,
    characteristics: [
      "Cordless and portable design",
      "Ultrasonic water stream for thorough cleaning",
      "Effective for braces and bridges",
      "Five pressure settings",
      "Easy-to-fill water tank",
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
    title: "Panasonic Professional Cordless Water Flosser",
    description: "The Panasonic EW1511W Portable Water Flosser is a compact and powerful device, perfect for maintaining oral hygiene on the go with its 165ml. water tank and high water pulsation for effective cleaning.",
    subtext: "Portable solution for maintaining oral hygiene.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      { title: "Ultrasonic Cleaning", description: "Provides deep cleaning with powerful ultrasonic water stream." },
      { title: "Cordless Design", description: "Portable and travel-friendly for convenience." },
      { title: "Adjustable Pressure", description: "Five settings to suit various dental needs." },
      { title: "Easy-to-Fill Tank", description: "Refillable reservoir with ample capacity." },
      { title: "Ergonomic Build", description: "Comfortable grip for effortless use." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "A detailed comparison of the EW1511W with other Panasonic models.",
    models: [
      {
        id: 1,
        path: panasonicEW1511WGlobalData.path,
        model: "EW-DJ10-W",
        image: panasonicEW1511WGlobalData.image,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: panasonicEW1511WGlobalData.productPrice,
        satisfaction: panasonicEW1511WGlobalData.rating.stars,
      },
      {
        id: 2,
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
        satisfaction: synhopeM6PlusGlobalData.rating.stars,
      },
      {
        id: 3,
        path: waterpikwp580GlobalData.path,
        model: "Waterpik Cordless Express",
        image: waterpikwp580GlobalData.image,
        alt: "Waterpik Cordless Express Water Flosser",
        prime: false,
        dimensions: "11.75 x 2.5 x 3.63 inches",
        tips: "2 Precision (Classic)",
        capacity: "Up to 30 seconds",
        highlight: "Most affordable",
        problem: "Shorter battery life",
        price: waterpikwp580GlobalData.productPrice,
        satisfaction: waterpikwp580GlobalData.rating.stars,
      },
      {
        id: 4,
        path: panasonicEW1511WGlobalData.path,
        model: "EW-DJ10-W",
        image: panasonicEW1511WGlobalData.image,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: panasonicEW1511WGlobalData.productPrice,
        satisfaction: panasonicEW1511WGlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Weighing the benefits and drawbacks of the Panasonic EW-DJ10.",
    cta: "Buy on Amazon",
    buyLink: panasonicEW1511WGlobalData.amazonUrl,
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

export default panasonicEW1511W;
import type { ProductDetails } from '~/types/product-details'
import { panasonicEWDJ10GlobalData } from './01-global'

const panasonicEW1511W: ProductDetails = {
  id: 1,
  fileName: 'panasonicEW1511W',
  info: {
    image: panasonicEWDJ10GlobalData.image,
    alt: "Panasonic Portable Water Flosser EW-DJ10",
    title: "Panasonic EW1511W Portable Water Flosser, 165ml.",
    subtitle: "For Dental, Bridge and Orthodontic Care",
    description: "Portable oral irrigator with ultrasonic cleaning for effective dental hygiene. Ideal for braces, bridges, and general care.",
    price: panasonicEWDJ10GlobalData.productPrice,
    updatedDate: panasonicEWDJ10GlobalData.updatedDate,
    buyLink: panasonicEWDJ10GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 4.4,
      reviews: 532,
    },
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
    description: "Advanced dental care with ultrasonic cleaning technology.",
    subtext: "Your portable solution for maintaining oral hygiene.",
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
        path: panasonicEWDJ10GlobalData.path,
        model: "EW-DJ10-W",
        image: panasonicEWDJ10GlobalData.image,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: panasonicEWDJ10GlobalData.productPrice,
        satisfaction: "4.2/5",
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Weighing the benefits and drawbacks of the Panasonic EW-DJ10.",
    cta: "Buy on Amazon",
    buyLink: panasonicEWDJ10GlobalData.amazonUrl,
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

import type { ProductDetails } from '~/types/product-details'
import { waterpikwp580GlobalData } from './01-global'

const waterpikwp580: ProductDetails = {
  id: 1,
  fileName: 'waterpikwp580',
  info: {
    image: waterpikwp580GlobalData.image,
    alt: "Waterpik Cordless Advanced 2.0 Water Flosser",
    title: "Waterpik WP-580 Cordless Advanced 2.0 Water Flosser",
    subtitle: "Rechargeable, Portable Water Flosser for Teeth, Gums, Braces",
    description: "The Waterpik Cordless Advanced 2.0 Water Flosser is a rechargeable, portable water flosser that removes plaque and debris between teeth and along the gumline. It is clinically proven to be up to 2x more effective than string floss for removing plaque and improving gum health.",
    price: waterpikwp580GlobalData.productPrice,
    updatedDate: waterpikwp580GlobalData.updatedDate,
    buyLink: waterpikwp580GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 4.3,
      reviews: 65050,
    },
    characteristics: [
      "Cordless and Portable",
      "Rechargeable Battery",
      "3 Pressure Settings",
      "Waterproof",
      "Easy to Fill Reservoir",
      "4 Flossing Tips Included",
      "ADA Accepted",
    ]
  },
  tableOfContent: [
    { id: "#Overview", content: "Overview" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "Overview",
    title: "Waterpik Cordless Advanced 2.0 Water Flosser",
    description: "A Comprehensive Guide",
    subtext: "Enhance Your Oral Hygiene with this Powerful and Portable Water Flosser",
  },
  features: {
    id: "features",
    title: "Key Features of the Waterpik Cordless Advanced 2.0",
    data: [
      { title: "Cordless and Portable", description: "Convenient for travel and small bathrooms." },
      { title: "Rechargeable Battery", description: "Lasts up to 4 weeks on a single charge." },
      { title: "3 Pressure Settings", description: "Allows for customization to suit your comfort level." },
      { title: "Waterproof", description: "Can be used in the shower for added convenience." },
      { title: "Easy to Fill Reservoir", description: "Effortlessly refill with water." },
      { title: "4 Flossing Tips Included", description: "Includes Precision, Plaque Seeker, and Orthodontic tips for various needs." },
      { title: "ADA Accepted", description: "Proven safe and effective by the American Dental Association." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Water Flossers",
    description: "Here's how the Waterpik Cordless Advanced 2.0 compares to other popular models:",
    models: [
      {
        id: 0,
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
        satisfaction: "4.2 stars",
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons of the Waterpik Cordless Advanced 2.0",
    description: "Here's a summary of the advantages and disadvantages of the Waterpik Cordless Advanced 2.0 Water Flosser:",
    cta: "Buy on Amazon",
    buyLink: waterpikwp580GlobalData.amazonUrl,
    pros: [
      { title: "Effective Plaque Removal" },
      { title: "Improved Gum Health" },
      { title: "Cordless and Portable" },
      { title: "Rechargeable Battery" },
      { title: "Multiple Pressure Settings" },
      { title: "Waterproof Design" },
      { title: "ADA Accepted" },
    ],
    cons: [
      { title: "Reservoir Size Might Be Small for Some" },
      { title: "Mixed Reviews on Battery Life" },
    ],
  },
}

export default waterpikwp580
import type { ProductDetails } from '~/types/product-details'
import { waterpikwp580GlobalData, waterpikwp660GlobalData, synhopeM6PlusGlobalData, panasonicEW1511WGlobalData } from './01-global'

const waterpikwp580: ProductDetails = {
  id: waterpikwp580GlobalData.id,
  fileName: 'waterpik-wp580',
  info: {
    images: waterpikwp580GlobalData.images,
    alt: "Waterpik Cordless WP 580 Advanced 2.0 Water Flosser",
    title: "Waterpik Cordless WP 580 Advanced 2.0 Water Flosser, 280 ml.",
    description: "The Waterpik Cordless Advanced 2.0 Water Flosser is a rechargeable, portable water flosser that removes plaque and debris between teeth and along the gumline. It is clinically proven to be up to 2x more effective than string floss for removing plaque and improving gum health.  Designed for easy and effective dental care, featuring a 360-degree rotating tip, rechargeable battery, and portability.",
    price: waterpikwp580GlobalData.productPrice,
    updatedDate: waterpikwp580GlobalData.updatedDate,
    buyLink: waterpikwp580GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: waterpikwp580GlobalData.rating,
    video: waterpikwp580GlobalData.videoUrl,
    video2: waterpikwp580GlobalData.videoUrl2,
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
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik WP 580" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The sentiment of the reviews is overwhelmingly positive, highlighting the Waterpik Cordless Advanced Water Flosser as an effective, convenient, and user-friendly product. Customers praise its portability, ease of use, cleaning ability, and features like waterproofing, rechargeable batteries, and ADA acceptance. While some mention minor drawbacks like the small water reservoir and occasional recharging needs, these are largely overshadowed by the product's benefits. Overall, it is viewed as a valuable addition to oral hygiene routines.",
    subtext: "For a visual review and demonstration of the Waterpik Cordless WP 580, you may find the following videos helpful:"
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
        id: 1,
        path: waterpikwp580GlobalData.path,
        model: "WP 580",
        image: waterpikwp580GlobalData.images[0].thumbnail,
        alt: "Waterpik Cordless Express Water Flosser",
        prime: false,
        dimensions: "4 x 2.8 x 11.6 in, 7 oz",
        tips: "2 Precision (Classic)",
        capacity: "207 ml.",
        highlight: "Most affordable",
        problem: "Shorter battery life",
        price: waterpikwp580GlobalData.productPrice,
        satisfaction: waterpikwp580GlobalData.rating.stars,
      },
      {
        id: 2,
        path: waterpikwp660GlobalData.path,
        model: "Waterpik WP-660",
        image: waterpikwp660GlobalData.images[0].thumbnail,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 1.46 lbs',
        tips: "4 included tips",
        capacity: "650 ml",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: waterpikwp660GlobalData.productPrice,
        satisfaction: waterpikwp660GlobalData.rating.stars,
      },
      {
        id: 3,
        path: synhopeM6PlusGlobalData.path || "/products/synhope-flosser",
        model: "SYNHOPE Mini Cordless",
        image: synhopeM6PlusGlobalData.images[0].thumbnail,
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
        id: 4,
        path: panasonicEW1511WGlobalData.path,
        model: "EW-DJ10-W",
        image: panasonicEW1511WGlobalData.images[0].thumbnail,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "360-degree rotating tip, rechargeable, portable, waterproof",
        problem: "Smaller water reservoir",
        price: panasonicEW1511WGlobalData.productPrice,
        satisfaction: panasonicEW1511WGlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Waterpik Cordless Advanced 2.0",
    description: "Here's a summary of the advantages and disadvantages of the Waterpik Cordless Advanced 2.0 Water Flosser:",
    cta: "Buy on Amazon",
    buyLink: waterpikwp580GlobalData.amazonUrl,
    pros: [
      { title: "Portable and travel-friendly" },
      { title: "Rechargeable with long battery life" },
      { title: "Waterproof for shower use" },
    ],
    cons: [
      { title: "Smaller water reservoir" },
      { title: "Higher price point" },],
  },
}

export default waterpikwp580
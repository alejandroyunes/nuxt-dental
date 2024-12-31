import type { ProductDetails } from '~/types/product-details';
import { waterpikwp660GlobalData, waterpikwp580GlobalData, synhopeM6PlusGlobalData, panasonicEW1511WGlobalData } from './01-global';

const waterpikwp660: ProductDetails = {
  id: waterpikwp660GlobalData.id,
  fileName: 'waterpikwp660',
  info: {
    images: waterpikwp660GlobalData.images,
    alt: "Waterpik WP-660 Aquarius Water Flosser",
    title: "Waterpik Aquarius WP-660  Water Flosser, 650ml.",
    description: "The Waterpik Aquarius water flosser features advanced technology for effective plaque removal and healthier gums. It's clinically proven to be more effective than string floss and is ADA accepted.",
    price: waterpikwp660GlobalData.productPrice,
    updatedDate: waterpikwp660GlobalData.updatedDate,
    buyLink: waterpikwp660GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: waterpikwp580GlobalData.rating,
    video: waterpikwp660GlobalData.videoUrl,
    video2: waterpikwp660GlobalData.videoUrl2,
    characteristics: [
      "ADA accepted for safety and effectiveness",
      "Removes up to 99.9% of plaque bacteria",
      "Two modes: Floss and Hydro-Pulse Massage",
      "10 pressure settings for a custom clean",
      "Includes 7 flossing tips for multiple needs",
    ],
  },
  tableOfContent: [
    { id: "#overview", content: "Overview" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "overview",
    title: "Waterpik Aquarius WP-660 Overview",
    description: "A professional-grade water flosser with advanced features designed to improve oral health.",
    subtext: "Achieve a cleaner, healthier mouth with the Waterpik Aquarius.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "Advanced Pressure Control",
        description: "10 settings for a custom clean, ranging from gentle to maximum pressure.",
      },
      {
        title: "Two Flossing Modes",
        description: "Floss mode for plaque removal and Hydro-Pulse Massage mode for gum stimulation.",
      },
      {
        title: "Large Reservoir",
        description: "90+ seconds of water capacity for uninterrupted flossing.",
      },
      {
        title: "Rotating Tip Handle",
        description: "360-degree rotation for easy access to all areas, including back teeth.",
      },
      {
        title: "ADA Accepted",
        description: "Proven safety and effectiveness, endorsed by dental professionals.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "Discover how the Waterpik Aquarius stacks up against other water flossers in the market.",
    models: [
      {
        id: 1,
        path: waterpikwp660GlobalData.path,
        model: "Waterpik WP-660",
        image: waterpikwp660GlobalData.images[0].thumbnail,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 1.46 lbs',
        tips: "4 included tips",
        capacity: "650 ml.",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: waterpikwp660GlobalData.productPrice,
        satisfaction: waterpikwp660GlobalData.rating.stars,
      },
      {
        id: 2,
        path: waterpikwp580GlobalData.path,
        model: "Waterpik Cordless Express",
        image: waterpikwp580GlobalData.images[0].thumbnail,
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
        id: 3,
        path: synhopeM6PlusGlobalData.path,
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
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: panasonicEW1511WGlobalData.productPrice,
        satisfaction: panasonicEW1511WGlobalData.rating.stars,
      },
    ],
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Evaluate the strengths and limitations of the Waterpik Aquarius WP-660.",
    cta: "Buy on Amazon",
    buyLink: waterpikwp660GlobalData.amazonUrl,
    pros: [
      { title: "Effective plaque removal" },
      { title: "Improves gum health" },
      { title: "Large reservoir capacity" },
    ],
    cons: [
      { title: "Limited to 120VAC/60Hz outlets" },
      { title: "Requires corded electric source" },
    ],
  },
};

export default waterpikwp660;

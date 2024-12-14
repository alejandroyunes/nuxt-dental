import type { ProductDetails } from '~/types/product-details'
import { heyaxa2302WFGlobalData } from './global'
import { he } from '@formkit/i18n'

export const heyaxa2302WF: ProductDetails = { 
  id: 1,
  fileName: 'heyaxa2302WF',
  info: {
    image: heyaxa2302WFGlobalData.imageLarge,
    imageSmall: heyaxa2302WFGlobalData.imageSmall,
    alt: "HEYAXA Water Dental Flosser - Black",
    title: "HEYAXA 1000ML Water Dental Flosser",
    subtitle: "Professional Oral Irrigator with UV Storage",
    description: "Efficient and deep cleaning for gum health and oral hygiene. Featuring a 1000ML tank, 10 adjustable pressure levels, and 7 nozzles for family use.",
    price: heyaxa2302WFGlobalData.productPrice,
    updatedDate: heyaxa2302WFGlobalData.updatedDate,
    buyLink: heyaxa2302WFGlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 4.4,
      reviews: 117,
    },
    characteristics: [
      "1000ML large water tank for uninterrupted cleaning",
      "10 adjustable pressure levels (30-125 PSI)",
      "7 nozzles for various oral care needs",
      "Unique UV storage compartment for hygiene",
      "Corded electric design for consistent power",
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
    title: "HEYAXA 1000ML Dental Water Flosser",
    description: "Experience superior oral hygiene with this advanced oral irrigator.",
    subtext: "Perfect for family use, braces, and gum health.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "Efficient Deep Cleaning",
        description: "High pulsation frequency (1250-1700 times/min) to remove food residues and prevent oral issues.",
      },
      {
        title: "Large 1000ML Water Tank",
        description: "Provides up to 180 seconds of uninterrupted cleaning.",
      },
      {
        title: "10 Adjustable Pressure Levels",
        description: "Pressure range from 30 to 125 PSI, suitable for all ages.",
      },
      {
        title: "7 Nozzles Included",
        description: "3 Classic, 1 Periodontal, 1 Orthodontic, 1 Dental Plaque, 1 Tongue Cleaner.",
      },
      {
        title: "UV Storage Compartment",
        description: "Keeps nozzles hygienic with built-in UV light.",
      },
      {
        title: "Corded Electric Design",
        description: "Reliable power without charging issues.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "How the HEYAXA Water Flosser stands out.",
    models: [
      {
        id: 1,
        path: heyaxa2302WFGlobalData.path,
        model: "HEYAXA 2302WF",
        image: heyaxa2302WFGlobalData.imageSmall,
        alt: "HEYAXA 2302WF Water Flosser",
        prime: true,
        dimensions: "10 x 8 x 6 inches",
        tips: "6",
        capacity: "900ML",
        highlight: "Compact and portable",
        problem: "Smaller tank capacity",
        price: "$49.99",
        satisfaction: "4.0/5",
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "An honest look at the benefits and drawbacks.",
    cta: "Buy on Amazon",
    buyLink: heyaxa2302WFGlobalData.amazonUrl,
    pros: [
      { title: "Large water tank for extended cleaning sessions" },
      { title: "10 pressure settings for customizable comfort" },
      { title: "Includes 7 nozzles for family use" },
    ],
    cons: [
      { title: "Corded design may limit portability" },
      { title: "Noise levels up to 75 decibels during operation" },
    ],
  },
}

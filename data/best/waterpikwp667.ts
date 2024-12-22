import type { ProductDetails } from '~/types/product-details'
import { waterpikwp667GlobalData } from './01-global'

const waterpikwp667: ProductDetails = {
  id: waterpikwp667GlobalData.id,
  fileName: 'waterpikwp667',
  info: {
    image: waterpikwp667GlobalData.image,
    alt: "Waterpik Aquarius Water Flosser WP-667 in Gray",
    title: "Waterpik Aquarius WP-667 Water Flosser Professional, 650ml.",
    subtitle: "Electric Power with 10 Settings & 7 Tips",
    description: "The Waterpik Aquarius Water Flosser features advanced water flossing technology with 10 pressure settings and 7 tips for various dental needs. It improves gum health, removes 99.9% of plaque, and is ADA accepted.",
    price: waterpikwp667GlobalData.productPrice,
    updatedDate: waterpikwp667GlobalData.updatedDate,
    buyLink: waterpikwp667GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: waterpikwp667GlobalData.rating,
    characteristics: [
      "10 Pressure Settings",
      "7 Flossing Tips for Multiple Needs",
      "Removable Water Reservoir with 90+ Seconds of Flossing Time",
      "Compact and Contemporary Design",
      "ADA Accepted for Safety and Effectiveness",
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
    title: "Waterpik Aquarius WP-667 Overview",
    description: "Explore the advanced features of the Waterpik Aquarius WP-667, designed for superior dental care.",
    subtext: "Professional-grade water flosser for teeth, gums, braces, and more.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      { title: "10 Pressure Settings", description: "Ranging from extra low to extra high for customized cleaning." },
      { title: "7 Flossing Tips", description: "Includes Precision, Plaque Seeker, Orthodontic, and Pik Pocket tips." },
      { title: "Removable Water Reservoir", description: "Provides over 90 seconds of continuous flossing time." },
      { title: "ADA Accepted", description: "Clinically proven effective for plaque removal and gum health." },
      { title: "360-Degree Rotating Tip", description: "Easily reaches all areas, including back teeth." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "See how the Waterpik Aquarius WP-667 stacks up against other popular water flossers.",
    models: [
      {
        id: 0,
        path: waterpikwp667GlobalData.path,
        model: "Waterpik Aquarius WP-667",
        image: waterpikwp667GlobalData.image,
        alt: "Waterpik Aquarius WP-667 in Gray",
        prime: false,
        dimensions: "10.35 x 4.7 x 3.8 inches",
        tips: "7 Tips (4 Precision, 1 Plaque Seeker, 1 Orthodontic, 1 Pik Pocket)",
        capacity: "650ml.",
        highlight: "10 Pressure Settings, ADA Accepted",
        problem: "Not cordless; requires power outlet.",
        price: waterpikwp667GlobalData.productPrice,
        satisfaction: waterpikwp667GlobalData.rating.stars,
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Understand the advantages and limitations of the Waterpik Aquarius WP-667.",
    cta: "Buy on Amazon",
    buyLink: waterpikwp667GlobalData.amazonUrl,
    pros: [
      { title: "Effective plaque removal and gum health improvement." },
      { title: "Multiple tips for various dental needs." },
      { title: "ADA Accepted for safety and effectiveness." },
    ],
    cons: [
      { title: "Requires a power outlet; not cordless." },
      { title: "Larger footprint compared to portable models." },
    ],
  },
}

export default waterpikwp667

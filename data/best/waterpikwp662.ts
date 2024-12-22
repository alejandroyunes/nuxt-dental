import type { ProductDetails } from '~/types/product-details'
import { waterpikwp662GlobalData } from './01-global'

const waterpikwp662: ProductDetails = {
  id: waterpikwp662GlobalData.id,
  fileName: 'waterpikwp662',
  info: {
    image: waterpikwp662GlobalData.image,
    alt: "Waterpik Aquarius Water Flosser Professional For Teeth, Gums, Braces, Dental Care, Electric Power With 10 Settings, 7 Tips For Multiple Users And Needs, ADA Accepted, Black WP-662",
    title: "Waterpik Aquarius WP-662 Water Flosser, 650ml.",
    subtitle: "Professional Dental Care",
    description: "The Waterpik Aquarius Water Flosser removes up to 99.9% of plaque and is up to 50% more effective than traditional floss for improving gum health. Simply fill the reservoir with warm water, place the tip in your mouth, and begin flossing.",
    price: waterpikwp662GlobalData.productPrice,
    updatedDate: waterpikwp662GlobalData.updatedDate,
    buyLink: waterpikwp662GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: waterpikwp662GlobalData.rating,
    characteristics: [
      "10 pressure settings",
      "7 tips for multiple users",
      "22 oz removable reservoir",
      "ADA accepted",
      "Corded electric with advanced features",
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
    title: "Waterpik Aquarius Water Flosser",
    description: "Aquarius is a high-performance water flosser that offers improved pressure with 10 settings for a customized cleaning experience, a massage mode to stimulate gums, and a built-in timer/pacer that briefly pauses at 30 seconds and 1 minute to help monitor flossing time.",
    subtext: "The 650ml reservoir provides 90 seconds of flossing without needing to refill. Its small, maneuverable handle makes it easy to floss all areas, including back teeth, and includes a convenient water on/off switch.",
  },
  features: {
    id: "features",
    title: "",
    data: [
      { title: "10 Pressure Settings", description: "Allows customized cleaning for sensitive gums to deep cleaning." },
      { title: "ADA Accepted", description: "Proven safety and effectiveness for dental care." },
      { title: "Large Reservoir", description: "650ml. capacity for over 90 seconds of use without refilling." },
      { title: "7 Tips Included", description: "Suitable for multiple users and dental needs." },
      { title: "Built-in Timer", description: "Pauses briefly at 30 and 60 seconds to track flossing time." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "Evaluate how the Waterpik Aquarius WP-662 stands out against similar products.",
    models: [
      {
        id: 0,
        path: waterpikwp662GlobalData.path,
        model: "WP-662",
        image: waterpikwp662GlobalData.image,
        alt: "Waterpik Aquarius Black WP-662",
        prime: true,
        dimensions: "5.5 x 6.5 x 10 inches",
        tips: "7 included",
        capacity: "650ml.",
        highlight: "ADA accepted with advanced pressure settings",
        problem: "Not portable (requires corded power)",
        price: waterpikwp662GlobalData.productPrice,
        satisfaction: waterpikwp662GlobalData.rating.stars,
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Explore the benefits and limitations of the Waterpik Aquarius WP-662.",
    cta: "Buy on Amazon",
    buyLink: waterpikwp662GlobalData.amazonUrl,
    pros: [
      { title: "10 adjustable pressure settings" },
      { title: "Includes 7 tips for multiple users" },
      { title: "ADA accepted for safety and effectiveness" },
    ],
    cons: [
      { title: "Requires corded power" },
      { title: "Not portable" },
    ],
  },
}

export default waterpikwp662

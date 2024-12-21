import type { ProductDetails } from '~/types/product-details';
import { waterpikwp660GlobalData } from './01-global';

const waterpikwp660: ProductDetails = {
  id: 3,
  fileName: 'waterpikwp660',
  info: {
    image: waterpikwp660GlobalData.image,
    alt: "Waterpik Aquarius WP-660 Water Flosser",
    title: "Waterpik Aquarius WP-660 Water Flosser",
    subtitle: "Professional, Advanced Water Flossing Technology",
    description: "The Waterpik Aquarius water flosser features advanced technology for effective plaque removal and healthier gums. It's clinically proven to be more effective than string floss and is ADA accepted.",
    price: waterpikwp660GlobalData.productPrice,
    updatedDate: waterpikwp660GlobalData.updatedDate,
    buyLink: waterpikwp660GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 4.6,
      reviews: 143427,
    },
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
        image: waterpikwp660GlobalData.image,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 1.46 lbs',
        tips: "4 included tips",
        capacity: "650 ml",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: waterpikwp660GlobalData.productPrice,
        satisfaction: "8/10",
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

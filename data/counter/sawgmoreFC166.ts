import type { ProductDetails } from '~/types/product-details';
import { turewellFC165GlobalData } from './01-global';
import { h2oflossHF9GlobalData } from './01-global';
import { sawgmoreFC166GlobalData } from './01-global';
import { heyaxa2302WFGlobalData } from './01-global';

const sawgmoreFC166: ProductDetails = {
  id: 3,
  fileName: 'sawgmoreFC166',
  info: {
    image: sawgmoreFC166GlobalData.image,
    alt: "Sawgmore FC166 Water Flosser Oral Irrigator ",
    title: "Sawgmore FC166, Water Flosser Oral Irrigator, 600ml.",
    subtitle: "Easy and efficient, deep cleaning",
    description: "The perfect tooth cleaner for those with braces, implants, crowns, or periodontal pockets. Sawgmore water flosser can effectively remove 99.9% of plaque and solve various oral problems.",
    price: sawgmoreFC166GlobalData.productPrice,
    updatedDate: sawgmoreFC166GlobalData.updatedDate,
    buyLink: sawgmoreFC166GlobalData.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: {
      stars: 4.3,
      reviews: 3771,
    },
    characteristics: [
      "Level pressure control adjustment",
      "600ML large detachable water tank",
      "8 Jets for various cleaning needs",
      "360° nozzle rotation",
      "Anti-leakage design ensures no liquid leaks during high-pressure use",
      "Available in black and white",
    ],
  },
  tableOfContent: [
    {
      content: '\u2022 The Best of the Sawgmore FC166 Water Flosser',
      id: `#the-best-of-sawgmoreFC166`,
    },
    {
      content: '\u2022 Best features of the Sawgmore FC166',
      id: `#features-of-sawgmoreFC166`,
    },
    {
      content: '\u2022 Comparison table with other irrigators',
      id: `#how-does-the-sawgmoreFC166-compares-to-other-irrigators`,
    },
    {
      content: '\u2022 Pros and Cons of the Sawgmore FC166?',
      id: `#pros-and-cons`,
    },
  ],
  title: {
    id: "the-best-of-sawgmoreFC166",
    title: "The Best of the Sawgmore FC166 Water Flosser",
    description: "Sawgmore water flosser can effectively remove 99.9% of plaque and solve various oral problems.",
    subtext: "Advanced technology for enhanced performance.",
  },
  features: {
    id: "features-of-sawgmoreFC166",
    title: "Best Features of the Sawgmore FC166",
    data: [
      { title: "Effectively Clean", description: "Removes food debris between teeth with 1250-1700 pulsations per minute." },
      { title: "Adjustable Cleaning Modes", description: "10 water pressure settings from 30 to 125 PSI." },
      { title: "Large Capacity", description: "600ML tank allows for 90 seconds of continuous use." },
      { title: "Multiple Nozzles", description: "6 kinds of unique tips for various cleaning needs." },
      { title: "Portable and Reliable", description: "Leak-proof design ensures safe and convenient use." },
    ],
  },
  comparison: {
    id: "how-does-the-sawgmoreFC166-compares-to-other-irrigators",
    title: "Comparison with Other Irrigators",
    description: "How the Sawgmore FC166 stands out in the market.",
    models: [
      {
        id: 1,
        path: sawgmoreFC166GlobalData.path,
        model: "Sawgmore FC166",
        image: sawgmoreFC166GlobalData.image,
        alt: "FC166 Water Flosser",
        prime: true,
        dimensions: "7.9 x 4.5 x 3.9 inches",
        tips: "8",
        capacity: "600ml",
        highlight: "10 adjustable pressure levels",
        problem: "May require frequent refills at high settings",
        price: sawgmoreFC166GlobalData.productPrice,
        satisfaction: "8/10'",
      },
      {
        id: 2,
        path: turewellFC165GlobalData.path,
        model: 'Turewell FC165',
        image: turewellFC165GlobalData.image,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 1.7 lbs',
        tips: '8',
        capacity: '600 ml',
        highlight: '8 Nozzles, Value, Ease of use',
        problem: 'Water Resistance',
        price: turewellFC165GlobalData.productPrice,
        satisfaction: '8/10',
      },
      {
        id: 3,
        path: h2oflossHF9GlobalData.path,
        model: 'H2ofloss HF-9',
        image: h2oflossHF9GlobalData.image,
        alt: 'H2ofloss HF-9 Oral Irrigator',
        prime: true,
        dimensions: '8.39 x 2.56 x 4 in, 4.14 lbs',
        tips: '13',
        capacity: '800 ml',
        highlight: 'User-Friendly Design, Versatility and Cleaning Power',
        problem: 'Leaking Problems, Noise Levels',
        price: h2oflossHF9GlobalData.productPrice,
        satisfaction: '9/10',
      },
      {
        id: 4,
        path: heyaxa2302WFGlobalData.path,
        model: "HEYAXA 2302WF",
        image: heyaxa2302WFGlobalData.image,
        alt: "HEYAXA 2302WF Water Flosser",
        prime: true,
        dimensions: "10 x 8 x 6 inches",
        tips: "6",
        capacity: "900ML",
        highlight: "Compact and portable",
        problem: "Smaller tank capacity",
        price: heyaxa2302WFGlobalData.productPrice,
        satisfaction: "4.0/5",
      },
    ],
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Sawgmore FC166",
    description: "An honest look at the Sawgmore FC166 Water Flosser.",
    cta: "Buy on Amazon",
    buyLink: sawgmoreFC166GlobalData.amazonUrl,
    pros: [
      { title: "High quality and value" },
      { title: "Variety of interchangeable attachments" },
      { title: "Affordable pricing" },
    ],
    cons: [
      { title: "Large reservoir can be messy to refill" },
      { title: "Water pulsation can be noisy" },
    ],
  },
};

export default sawgmoreFC166
import type { ProductDetails } from '~/types/product-details';
import { sawgmoreFC166GlobalData } from './global';
import { turewellFC165GlobalData } from './global';
import { h2oflossHF9GlobalData } from './global';
import { oeeterM01GlobalData } from './global';
import turewellFC165 from './turewellFC165';

const h2oflossHF9: ProductDetails = {
  id: 2,
  fileName: 'h2oflossHF9',
  info: {
    image: h2oflossHF9GlobalData.image,
    alt: "H2ofloss HF-9 Dental Water Flosser",
    title: "H2ofloss HF-9, Dental Water Flosser, 800ml.",
    subtitle: "Professional Countertop Oral Irrigator",
    description: "Elevate your oral hygiene with 13 multifunctional tips, 800ml capacity, and a quiet design. Removes up to 99.9% of plaque and offers a customizable cleaning experience.",
    price: h2oflossHF9GlobalData.productPrice,
    updatedDate: h2oflossHF9GlobalData.updatedDate,
    buyLink: h2oflossHF9GlobalData.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: {
      stars: 4.3,
      reviews: 16116,
    },
    characteristics: [
      "13 Multifunctional Tips for versatile oral care.",
      "5 Water Pressure Settings with a range from 5-110 PSI.",
      "1200 Pulses/Minute Frequency for effective plaque removal.",
      "Quiet design with overheat protection function.",
      "Exclusive Prime price with free shipping to Colombia.",
      "Pause function on the handle for ease of use.",
      "Compatible with 110VAC/60Hz outlets for North America.",
      "24-month warranty for peace of mind.",
    ],
  },
  tableOfContent: [
    {
      content: '\u2022 The Best of the H2ofloss HF-9 Water Flosser',
      id: `#the-best-of-h2ofloss`
    },
    {
      content: '\u2022 Best features of the H2ofloss HF-9',
      id: `#features-of-h2ofloss`
    },
    {
      content: '\u2022 Comparison table with other irrigators',
      id: `#how-does-the-h2ofloss-compares-to-other-irrigators`
    },
    {
      content: '\u2022 Pros and Cons of the H2ofloss HF-9?',
      id: `#pros-and-cons`
    },
  ],
  title: {
    id: "the-best-of-h2ofloss",
    title: "The Best of the H2ofloss HF-9 Water Flosser",
    description: "Discover the top features and benefits of the H2ofloss HF-9 Water Flosser. Keep your oral health in check with advanced pulse frequency, customizable water pressure settings, and more!",
    subtext: "The 800ml capacity and overheat protection ensure a convenient and safe experience. Ideal for the whole family, including those with braces, implants, crowns, or periodontal pockets.",
  },
  features: {
    id: "features-of-h2ofloss",
    title: "Best features of the H2ofloss HF-9",
    data: [
      {
        title: "Multifunctional Tips",
        description: "13 multifunctional tips for versatile oral care.",
      },
      {
        title: "Water Pressure Settings",
        description: "5 customizable water pressure settings ranging from 5-110 PSI.",
      },
      {
        title: "Pulse Frequency",
        description: "1200 pulses/minute for effective plaque removal.",
      },
      {
        title: "User-Friendly Design",
        description: "Quiet design with overheat protection.",
      },
      {
        title: "Large Capacity",
        description: "800ml water tank for convenience.",
      },
      {
        title: "Family Friendly",
        description: "Suitable for the whole family, including those with braces or implants.",
      },
      {
        title: "Pause Function",
        description: "Pause function on the handle for ease of use.",
      },
      {
        title: "Warranty",
        description: "24-month warranty and 24-hour email support.",
      },
    ],
  },
  comparison: {
    id: "how-does-the-h2ofloss-compares-to-other-irrigators",
    title: "Compare the H2ofloss HF-9 with other irrigators",
    description: "In this table, you can see all the affordable countertop models, their features, notable advantages, user ratings, and the results of our analyses in 2024.",
    models: [
      {
        id: 1,
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
        id: 4,
        path: oeeterM01GlobalData.path,
        model: "Oeeter M01",
        image: oeeterM01GlobalData.image,
        alt: "Oeeter M01 Water Dental Flosser",
        prime: true,
        dimensions: "8 x 6 x 4 inches",
        tips: "7 Tips",
        capacity: "600ML",
        highlight: "Compact and portable design with magnetic handle",
        problem: "Lower water capacity compared to competitors",
        price: oeeterM01GlobalData.productPrice,
        satisfaction: "4.0/5",
      },
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the H2ofloss HF-9",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the H2ofloss Dental Water Flosser, HF-9, 800ml is the right fit for them.",
    cta: "Buy Now on Amazon",
    buyLink: h2oflossHF9GlobalData.amazonUrl,
    pros: [
      { title: "Great performance and cleaning capabilities" },
      { title: "Affordable, offering good value for the price" },
      { title: "User-friendly with easy pressure control" },
      { title: "Effective at cleaning between teeth" },
      { title: "24-month warranty and 24-hour email support" },
      { title: "Exclusive Prime price and free shipping to Colombia" },
    ],
    cons: [
      { title: "Mixed opinions on build quality and durability" },
      { title: "Noise levels may be bothersome for some users" },
      { title: "Leaks reported by some users" },
    ],
  },
};

export default h2oflossHF9;
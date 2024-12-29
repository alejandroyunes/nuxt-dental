import type { ProductDetails } from '~/types/product-details'
import { oeeterM01GlobalData } from './01-global'
import { h2oflossHF9GlobalData } from './01-global'
import { sawgmoreFC166GlobalData } from './01-global'
import { turewellFC165GlobalData } from './01-global'

const oeeterM01: ProductDetails = {
  id: oeeterM01GlobalData.id,
  fileName: 'oeeterM01',
  info: {
    images: oeeterM01GlobalData.images,
    alt: "Oeeter M01 Water Dental Flosser",
    title: "Oeeter M01, Water Dental Flosser, 600ml.",
    description: "Oeeter M01 water dental flosser offers 10 adjustable pressure settings, 3 cleaning modes, 7 tips, and a 600ml water reservoir for effective oral hygiene.",
    price: oeeterM01GlobalData.productPrice,
    updatedDate: oeeterM01GlobalData.updatedDate,
    buyLink: oeeterM01GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: oeeterM01GlobalData.rating,
    video: oeeterM01GlobalData.videoUrl,
    video2: oeeterM01GlobalData.videoUrl2,
    characteristics: [
      "10 Adjustable Pressure Settings",
      "3 Cleaning Modes: Normal, Soft, Pulse",
      "7 Flossing Tips for All Needs",
      "Convenient Magnetic Handle",
      "600ML Water Reservoir",
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
    title: "Oeeter M01 Water Dental Flosser",
    description: "Experience professional oral care with Oeeter M01. Designed for effective teeth cleaning and gum health.",
    subtext: "Your journey to a healthier smile starts here.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "10 Adjustable Pressure Settings",
        description: "Customize your flossing routine with pressure levels up to 125PSI.",
      },
      {
        title: "3 Cleaning Modes",
        description: "Choose from Normal, Soft, and Pulse for tailored oral care.",
      },
      {
        title: "7 Flossing Tips",
        description: "Includes tips for all needs: classic, periodontal, orthodontic, and tongue cleaning.",
      },
      {
        title: "Magnetic Handle",
        description: "Stylish and convenient handle design with an ON/OFF switch.",
      },
      {
        title: "600ML Water Reservoir",
        description: "High-capacity reservoir for up to 180 seconds of continuous use.",
      },
      {
        title: "User-Friendly Design",
        description: "Easy-to-clean removable water reservoir and built-in tip storage.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "How the Oeeter M01 stands out among competitors.",
    models: [
      {
        id: 1,
        path: oeeterM01GlobalData.path,
        model: "Oeeter M01",
        image: oeeterM01GlobalData.images[0].thumbnail,
        alt: "Oeeter M01 Water Dental Flosser",
        prime: true,
        dimensions: "8 x 6 x 4 inches",
        tips: "7 Tips",
        capacity: "600ML",
        highlight: "Compact and portable design with magnetic handle",
        problem: "Lower water capacity compared to competitors",
        price: oeeterM01GlobalData.productPrice,
        satisfaction: oeeterM01GlobalData.rating.stars,
      },
      {
        id: 2,
        path: turewellFC165GlobalData.path,
        model: 'Turewell FC165',
        image: turewellFC165GlobalData.images[0].thumbnail,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 1.7 lbs',
        tips: '8',
        capacity: '600 ml',
        highlight: '8 Nozzles, Value, Ease of use',
        problem: 'Water Resistance',
        price: turewellFC165GlobalData.productPrice,
        satisfaction: turewellFC165GlobalData.rating.stars,
      },
      {
        id: 3,
        path: sawgmoreFC166GlobalData.path,
        model: "Sawgmore FC166",
        image: sawgmoreFC166GlobalData.images[0].thumbnail,
        alt: "FC166 Water Flosser",
        prime: true,
        dimensions: "7.9 x 4.5 x 3.9 inches",
        tips: "8",
        capacity: "600ml",
        highlight: "10 adjustable pressure levels",
        problem: "May require frequent refills at high settings",
        price: sawgmoreFC166GlobalData.productPrice,
        satisfaction: sawgmoreFC166GlobalData.rating.stars,
      },
      {
        id: 4,
        path: h2oflossHF9GlobalData.path,
        model: 'H2ofloss HF-9',
        image: h2oflossHF9GlobalData.images[0].thumbnail,
        alt: 'H2ofloss HF-9 Oral Irrigator',
        prime: true,
        dimensions: '8.39 x 2.56 x 4 in, 4.14 lbs',
        tips: '13',
        capacity: '800 ml',
        highlight: 'User-Friendly Design, Versatility and Cleaning Power',
        problem: 'Leaking Problems, Noise Levels',
        price: h2oflossHF9GlobalData.productPrice,
        satisfaction: h2oflossHF9GlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "What makes the Oeeter M01 a great choice.",
    cta: "Buy on Amazon",
    buyLink: oeeterM01GlobalData.amazonUrl,
    pros: [
      { title: "Adjustable pressure for personalized cleaning" },
      { title: "Multiple tips for diverse oral care needs" },
      { title: "Large water reservoir for extended use" },
    ],
    cons: [
      { title: "Corded electric, not portable" },
      { title: "May require a learning curve for first-time users" },
    ],
  },
}

export default oeeterM01

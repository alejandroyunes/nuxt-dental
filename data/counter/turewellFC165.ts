import type { ProductDetails } from '~/types/product-details'
import { h2oflossHF9GlobalData } from './global'
import { sawgmoreFC166GlobalData } from './global'
import { turewellFC165GlobalData } from './global'
import { oeeterM01GlobalData } from './global'

export const turewellFC165: ProductDetails = {
  id: 1,
  fileName: 'turewellFC165',
  info: {
    image: turewellFC165GlobalData.imageLarge,
    imageSmall: turewellFC165GlobalData.imageSmall,
    alt: 'Turewell Water Flossing Oral Irrigator',
    title: "Turewell Water Flossing Oral Irrigator FC165, 600ml",
    subtitle: "Dental Water Teeth Cleaner",
    description: "The Turewell FC165 effectively removes 99.99% of debris, offering superior oral care by reaching areas traditional methods miss, ideal for braces, kids, and those seeking deep cleaning.",
    price: turewellFC165GlobalData.productPrice,
    updatedDate: turewellFC165GlobalData.updatedDate,
    buyLink: turewellFC165GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 4.3,
      reviews: 20300,
    },
    characteristics: [
      "Prevents tooth decay, dental calculus, bleeding, and hypersensitivity.",
      "Ideal for braces and kids.",
      "600ml larger water tank, easy to clean and removable.",
      "3 high-pressure tips and 5 specialized tips for various needs.",
      "3-minute smart timer for safety and device lifespan.",
    ]
  },
  tableOfContent: [
    {
      content: '\u2022 The Best of the Turewell FC165 Water Flosser',
      id: `#the-best-of-turewell`
    },
    {
      content: '\u2022 Features of the Turewell FC165',
      id: `#features-of-turewell`
    },
    {
      content: '\u2022 Comparison table with other irrigators',
      id: `#how-does-the-turewell-compares-to-other-irrigators`
    },
    {
      content: '\u2022 Pros and Cons',
      id: `#pros-and-cons`
    },
  ],
  title: {
    id: "the-best-of-turewell",
    title: "Turewell Water Flossing Oral Irrigator FC165, 600ml",
    description: "A budget-friendly water flosser with 8 nozzles and a 600ml tank, providing a complete solution for oral hygiene.",
    subtext: "Best for braces, kids, and those looking for an efficient, easy-to-use water flosser."
  },
  features: {
    id: "features-of-turewell",
    title: "Features of the Turewell FC165",
    data: [
      { title: "Powerful Cleaning", description: "With up to 1700 pulses per minute, it removes food debris and massages gums effectively." },
      { title: "Multiple Pressure Settings", description: "Adjustable pressure from 30 to 125 PSI, suitable for various user needs." },
      { title: "Large Capacity", description: "The 600ml water tank provides up to 90 seconds of continuous flossing." },
      { title: "Variety of Tips", description: "Comes with 8 interchangeable nozzles for a variety of needs." },
      { title: "Smart Timer", description: "The built-in timer ensures automatic shutdown after 3 minutes to prevent overuse." },
      { title: "Anti-Leakage Design", description: "Prevents water leakage during high-pressure usage." },
      { title: "Easy to Use", description: "Simple controls and ergonomic design make it user-friendly." },
      { title: "Affordable", description: "Offers excellent value for its features and performance." },
    ],
  },
  comparison: {
    id: "how-does-the-turewell-compares-to-other-irrigators",
    title: "Compare the Turewell FC165 with other irrigators",
    description: "See how the Turewell FC165 compares to similar models in terms of features, price, and user satisfaction.",
    models: [
      {
        id: 1,
        path: turewellFC165GlobalData.path,
        model: 'Turewell FC165',
        image: turewellFC165GlobalData.imageSmall,
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
        id: 2,
        path: sawgmoreFC166GlobalData.path,
        model: "Sawgmore FC166",
        image: sawgmoreFC166GlobalData.imageSmall,
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
        id: 3,
        path: h2oflossHF9GlobalData.path,
        model: 'H2ofloss HF-9',
        image: h2oflossHF9GlobalData.imageSmall,
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
        path: oeeterM01GlobalData.path,
        model: "Oeeter M01",
        image: oeeterM01GlobalData.imageSmall,
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
    title: "Pros and Cons of the Turewell FC165",
    description: "Pros and cons to help you decide if the Turewell FC165 is the right choice for your oral hygiene needs.",
    cta: "Buy Now on Amazon",
    buyLink: turewellFC165GlobalData.amazonUrl,
    pros: [
      { title: "Good value for the price." },
      { title: "Effectively removes plaque and debris." },
      { title: "Easy to set up and use." },
      { title: "Comes with a variety of tips for different needs." },
    ],
    cons: [
      { title: "Customers have mixed opinions on the size." },
      { title: "Can be messy during use." },
      { title: "Water pulsation could generate noise." },
    ],
  },
}
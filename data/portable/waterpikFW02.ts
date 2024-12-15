import type { ProductDetails } from '~/types/product-details'
import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592bkGlobalData, coslusC20F5020EGlobalData } from './01-global'

const waterpikF02: ProductDetails = {
  id: 1,
  fileName: 'waterpikFW02',
  info: {
    image: waterPikWF02GlobalData.image,
    alt: "Waterpik Water Flosser Model WF-02",
    title: "Waterpik WF-02, Water Flosser Model 29.5ml.",
    subtitle: "Cordless Express Portable Water Flosser",
    description: "Clinically proven to remove up to 99.9% of plaque, the Cordless Express combines water pressure with pulsating action for an exceptional clean that traditional methods can't match.",
    price: waterPikWF02GlobalData.productPrice,
    updatedDate: waterPikWF02GlobalData.updatedDate,
    buyLink: waterPikWF02GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: {
      stars: 5,
      reviews: 78232,
    },
    characteristics: [
      "Portable and waterproof design.",
      "2 pressure settings (45-75 PSI) for customizable cleaning.",
      "1200 water pulses per minute.",
      "Easy-to-fill, removable 5-ounce reservoir for 30 seconds of flossing time.",
      "2 JT-450E water flossing tips.",
      "Compact dimension.",
    ],
  },
  tableOfContent: [
    {
      content: '\u2022 The Best of Waterpik WF-02',
      id: `#the-best-of-waterpic-wf02`
    },
    {
      content: '\u2022 Why Choose Waterpik WF-02?',
      id: `#why-waterpic-wf02`
    },
    {
      content: '\u2022 Comparison table with other irrigators',
      id: `#how-does-the-waterpik-compares-to-other-irrigators`
    },
    {
      content: '\u2022 Pros and Cons',
      id: `#pro-and-cons-wf02`
    },
  ],
  title: {
    id: 'the-best-of-waterpic-wf02',
    title: 'The Best of Waterpik Model WF-02 Professional Water Flosser',
    description: "Waterpik's Cordless Express Water Flosser, featuring a battery-operated, portable, and waterproof design, is perfect for on-the-go oral care. With 2 pressure settings, a water on/off slider, 30 seconds of flossing time, and included AA batteries.",
    subtext: "It's easy to use anytime, anywhere, for healthier gums and brighter teeth.",
  },
  features: {
    id: 'why-waterpic-wf02',
    title: 'Why Choose Waterpik WF-02?',
    data: [
      {
        title: 'Portability and On-the-Go Use',
        description: 'Designed for travel, small bathrooms, and shower use, providing flexibility and convenience in maintaining oral hygiene wherever you go.',
      },
      {
        title: 'Waterproof Construction',
        description: "Waterproof construction enhances durability and allows for use in the shower, adding versatility to your oral care routine.",
      },
      {
        title: 'Clinically Proven Plaque Removal',
        description: "Clinically proven to remove up to 99.9% of plaque, offering an effective solution for superior oral cleanliness compared to traditional brushing and flossing.",
      },
      {
        title: 'Mouthwash Compatibility',
        description: "Users can add their favorite mouthwash for a personalized and fresher clean, enhancing the overall flossing experience.",
      },
      {
        title: 'Manufacturer\'s Warranty and Customer Support',
        description: "Backed by a 1-year manufacturer's warranty, ensuring product reliability and customer satisfaction.",
      }
    ]
  },
  comparison: {
    id: 'how-does-the-waterpik-compares-to-other-irrigators',
    title: 'Compare the Waterpik WF-02 with other irrigators',
    description: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
        path: '/reviews/portable-and-affordable-oral-irrigators/waterpikF02', 
        model: 'Waterpik WF-02',
        image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp',
        alt: 'Waterpik Model WF-02',
        prime: true,
        dimensions: '3.6 x 2.5 x 11.75 in, 11.68 oz',
        tips: '2',
        capacity: '5oz reservoir for 30 seconds of flossing time',
        highlight: 'Economical, Portable, Customizable.',
        problem: 'Battery replacement, Limited water capacity.',
        price: '$37.71',
        satisfaction: '9/10',
      },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons-wf02',
    title: "Pros and Cons Waterpik Model WF-02",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Waterpik Cordless Express WF-02 is the right fit for them.",
    cta: 'Buy Now on Amazon',
    buyLink: waterPikWF02GlobalData.amazonUrl,
    pros: [
      {
        title: 'Ideal for travel, small bathrooms, and on-the-go oral care.',
      },
      {
        title: 'Runs on 3 AA batteries (included), eliminating the need for charging cords.',
      },
      {
        title: 'Allows for use in the shower, enhancing versatility and convenience.',
      },
      {
        title: ' Removable 5-ounce reservoir with easy-fill design for convenient use.',
      },

    ],
    cons: [
      {
        title: 'Requires regular replacement of 3 AA batteries (every 1-2 months, depending on use).',
      },
      {
        title: 'The 5-ounce reservoir may require refilling for extended flossing sessions.',
      },
      {
        title: 'While customizable, the flosser provides only two pressure settings.',
      },
    ]
  },
}

export default waterpikF02
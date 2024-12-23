import type { ProductDetails } from '~/types/product-details'
import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592bkGlobalData, insmartFC256GlobalData } from './01-global'

const inSmartFC256: ProductDetails = {
  id: insmartFC256GlobalData.id,
  fileName: 'inSmartFC256',
  info: {
    image: insmartFC256GlobalData.image,
    alt: 'InSmart Professional Cordless Water Dental Flosser FC256, 300ml',
    title: "InSmart FC256 Professional Cordless Water Dental Flosser, 300ml.",
    subtitle: 'Dentists highly recommend and choose the global-brand InSmart Portable Water Dental Flosser because it goes beyond the limitations of daily brushing.',
    description: 'Upgrade your oral care routine with the InSmart Professional Cordless Water Dental Flosser. Featuring a 300ML detachable tank, 1800 times/minute water pulse, and 4 cleaning modes, this rechargeable flosser ensures efficient plaque removal and gum health. Perfect for home and travel.',
    price: insmartFC256GlobalData.productPrice,
    updatedDate: insmartFC256GlobalData.updatedDate,
    buyLink: insmartFC256GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: insmartFC256GlobalData.rating,
    characteristics: [
      "Cordless and Portable for home and travel use.",
      "Charging with all USB port.",
      "Nozzle Tips for the whole family.",
      "Convenient travel carrying bag.",
      "Long-lasting 2000 mAh rechargeable battery.",
      "Easy-to-clean detachable water tank.",
      "Quiet operation with four water pressure modes.",
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
    title: 'The Best of InSmart FC256',
    description: "This portable water flosser creates over 1400-1800 pulsations/min of water jets, reaching areas normal toothbrushes can't, ensuring healthy gums and a thorough teeth clean. Its IPX7 waterproof design allows for use in the shower, featuring four operation modes for a personalized experience.",
    subtext: 'With a large 300ml water tank and extended 2000 mAh battery life, it\'s perfect for daily use at home and on the go.',
  },
  features: {
    id: "features",
    title: 'Why Choose InSmart FC256?',
    data: [
      {
        title: 'InSmart cordless',
        description: 'water dental flosser is an extremely convenient option over traditional oral irrigators. It provides flossing excellence with the convenience of being cordless and rechargeable.',
      },
      {
        title: 'It is perfect',
        description: 'for the removal of food residue between teeth and below the gums, where brushing alone cannot reach. It excels at removing hard-to-reach areas that can cause bad breath and tooth decay.',
      },
      {
        title: 'Built-in 2000mAh',
        description: 'Li-ion rechargeable battery operates for up to 30 days on a full charge, offering excellent standby time.',
      },
      {
        title: 'Separate flosser',
        description: 'and water tank design allows easy cleaning of dirt and plaque in the water tank, keeping the device hygienic.',
      },
    ]
  },
  comparison: {
    id: "comparison",
    title: 'Compare the InSmart FC256 with other irrigators',
    description: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
        path: insmartFC256GlobalData.path,
        model: 'InSmart FC256',
        image: insmartFC256GlobalData.image,
        alt: 'InSmart FC256 Oral Irrigator Image',
        prime: true,
        dimensions: '8.27 x 3.15 x 1.97 in, 14.07 oz',
        tips: '6',
        capacity: '300ml',
        highlight: 'Travel Carrying bag, Ease of use, Size, 4 Water Pressure Modes',
        problem: 'Battery Life, Durability, Nozzle Wear',
        price: insmartFC256GlobalData.productPrice,
        satisfaction: insmartFC256GlobalData.rating.stars,
      },
      {
        id: 2,
        path: nicwellF5025GlobalData.path,
        model: 'Nicwell F5025',
        image: nicwellF5025GlobalData.image,
        alt: 'Nicwell 300ml Oral Irrigator',
        prime: true,
        dimensions: '8.11 x 4.06 x 2.73 in, 14.4 oz',
        tips: "6 replaceable tips",
        capacity: "300ml",
        highlight: "Offers 5 cleaning modes with advanced features.",
        problem: "Slightly heavier than Nicefeel.",
        price: nicwellF5025GlobalData.productPrice,
        satisfaction: nicwellF5025GlobalData.rating.stars,
      },
      {
        id: 3,
        path: waterPikWF02GlobalData.path,
        model: 'Waterpik WF-02',
        image: waterPikWF02GlobalData.image,
        alt: 'Waterpik Model WF-02',
        prime: true,
        dimensions: "3.6 x 2.5 x 11.75 inches",
        tips: "Includes 2 Classic Jet Tips",
        capacity: "150ml",
        highlight: "No outlets or charging needed",
        problem: "Requires regular battery replacement",
        price: waterPikWF02GlobalData.productPrice,
        satisfaction: waterPikWF02GlobalData.rating.stars,
      },
      {
        id: 4,
        path: nicefeelFC1592bkGlobalData.path,
        model: 'Nicefeel FC1592-BK',
        image: nicefeelFC1592bkGlobalData.image,
        alt: 'Nicefeel FC1592-BK Oral Irrigator Image',
        prime: true,
        dimensions: '0.3 x 0.31 x 0.87 in, 13 oz',
        tips: '4',
        capacity: '300ml',
        highlight: 'Battery-powered, memory function, 3 cleaning modes',
        problem: 'Not suitable for large families',
        price: nicefeelFC1592bkGlobalData.productPrice,
        satisfaction: nicefeelFC1592bkGlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: 'Pros and Cons of InSmart FC256',
    cta: 'Buy on Amazon',
    buyLink: insmartFC256GlobalData.amazonUrl,
    description: "It's essential to consider these customer experiences to make an informed decision about the InSmart Professional Cordless Water Dental Flosser, ensuring it meets your needs for oral care and convenience.",
    pros: [
      {
        title: 'Large 300ml water reservoir for uninterrupted use.',
      },
      {
        title: '1400-1800 times/minute high-pressure water pulse for effective cleaning.',
      },
      {
        title: 'Latest 2000mAh lithium battery for long-lasting use (up to 30 days on a full charge).',
      },
      {
        title: 'Low-noise design for a comfortable and quiet experience.',
      },
    ],
    cons: [
      {
        title: 'Reports of breakage after a few months of use, including issues with the device not holding a charge.',
      },
      {
        title: 'Complaints about the tip breaking, indicating potential fragility of the nozzle.',
      },
    ],
  },

};

export default inSmartFC256;
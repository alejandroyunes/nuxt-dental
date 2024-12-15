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
      stars: 4.2,
      reviews: 48061,
    },
    characteristics: [
      "Portable",
      "Waterproof for Shower Use",
      "Removes Plaque",
      "ADA Accepted",
      "Gum Health"
    ],
  },
  tableOfContent: [
    { id: "#title", content: "Overview" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: "Waterpik Cordless Water Flosser",
    description: "Battery Operated & Portable, ADA Accepted, for Travel & Home",
    subtext: "Waterpik's Cordless Express Water Flosser, featuring a battery-operated, portable, and waterproof design, is perfect for on-the-go oral care. With 2 pressure settings, a water on/off slider, 30 seconds of flossing time, and included AA batteries, it's easy to use anytime, anywhere, for healthier gums and brighter teeth.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "Battery Operated",
        description: "Powered by 3 AA batteries, no outlets or charging needed."
      },
      {
        title: "Waterproof for Shower Use",
        description: "Perfect for use in the shower, adding convenience."
      },
      {
        title: "ADA Accepted",
        description: "Accepted by the American Dental Association for safety and effectiveness."
      },
      {
        title: "Removes Plaque",
        description: "Removes up to 99.9% of plaque and bacteria from treated areas."
      },
      {
        title: "Portable Design",
        description: "Compact and travel-friendly for on-the-go use."
      },
      {
        title: "Easy to Use",
        description: "Fill the reservoir and glide the tip along the gumline for healthier gums."
      },
      {
        title: "Two Pressure Settings",
        description: "Adjustable water pressure for a customized cleaning experience."
      },
      {
        title: "Long-lasting Batteries",
        description: "Includes 3 AA batteries, lasting 1-2 months with daily use."
      },
    ]
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "Compare the Waterpik Cordless Express with other models for travel and home use.",
    models: [
      {
        id: 1,
        path: '/reviews/portable-and-affordable-oral-irrigators/waterpikF02', 
        model: 'Waterpik WF-02',
        image: waterPikWF02GlobalData.image,
        alt: 'Waterpik Model WF-02',
        prime: true,
        dimensions: "3.6 x 2.5 x 11.75 inches",
        tips: "Includes 2 Classic Jet Tips",
        capacity: "5 oz Reservoir",
        highlight: "No outlets or charging needed",
        problem: "Requires regular battery replacement",
        price: waterPikWF02GlobalData.productPrice,
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
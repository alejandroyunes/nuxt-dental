import type { ProductDetails } from '~/types/product-details'
import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592bkGlobalData, coslusC20F5020EGlobalData } from './01-global'

const waterpikF02: ProductDetails = {
  id: waterPikWF02GlobalData.id,
  fileName: 'waterpikWF02',
  info: {
    images: waterPikWF02GlobalData.images,
    alt: "Waterpik WF 02 Water Flosser, 29.5ml.",
    title: "Waterpik WF 02 Water Flosser, 29.5ml.",
    subtitle: "Cordless Express Portable Water Flosser",
    description: "The Waterpik WF 02 Cordless Express Water Flosser is a portable, battery-operated device designed to enhance oral hygiene by effectively removing plaque and debris between teeth and along the gumline. Its cordless design and compact size make it an excellent choice for individuals with small bathrooms or those who travel frequently.",
    price: waterPikWF02GlobalData.productPrice,
    updatedDate: waterPikWF02GlobalData.updatedDate,
    buyLink: waterPikWF02GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: waterPikWF02GlobalData.rating,
    video: waterPikWF02GlobalData.videoUrl,
    characteristics: [
      "Portable",
      "Waterproof for Shower Use",
      "Removes Plaque",
      "ADA Accepted",
      "Gum Health",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#feedback", content: "Feedback and Video" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback and Videos",
    description: "Users appreciate the WF 02 for its ease of use and portability, noting its effectiveness in cleaning and suitability for travel. However, some users mention the reservoir's limited capacity, necessitating refills during use. Additionally, the lack of a rotating nozzle and absence of a travel pouch are noted as areas for improvement.",
    subtext: "For a visual review and demonstration of the Waterpik WF-02, you may find the following video helpful:"
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      {
        title: "Portability",
        description: "Powered by three AA batteries, the WF 02 eliminates the need for charging cables, enhancing its convenience for travel. Its lightweight and waterproof design allows for use in the shower, adding to its versatility."
      },
      {
        title: "Performance",
        description: "The device offers two pressure settings, ranging from 45 to 75 PSI, delivering up to 1,200 water pulses per minute. This functionality ensures efficient removal of plaque and food particles, contributing to improved gum health."
      },
      {
        title: "Reservoir Capacity",
        description: "Equipped with a removable 5-ounce (approximately 150 milliliters) water reservoir, the WF 02 provides up to 30 seconds of continuous flossing time. While this may require some users to refill during sessions, it is a common trait among portable water flossers."
      },
      {
        title: "Ease of Use",
        description: "The flosser includes two flossing tips and an advanced pressure control system with two settings. Its ergonomic design ensures a comfortable grip, and the absence of cords enhances maneuverability during use."
      }
    ]
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "Compare the Waterpik Cordless Express with other models for travel and home use.",
    models: [
      {
        id: 1,
        path: waterPikWF02GlobalData.path,
        model: 'Waterpik WF 02',
        image: waterPikWF02GlobalData.images[0].thumbnail,
        alt: 'Waterpik Model WF 02',
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
        id: 2,
        path: nicwellF5025GlobalData.path,
        model: 'Nicwell F5025',
        image: nicwellF5025GlobalData.images[0].thumbnail,
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
        path: nicefeelFC1592bkGlobalData.path,
        model: 'Nicefeel FC1592-BK',
        image: nicefeelFC1592bkGlobalData.images[0].thumbnail,
        alt: 'Nicefeel FC1592-BK Oral Irrigator Image',
        prime: true,
        dimensions: '0.3 x 0.31 x 0.87 in, 13 oz',
        tips: '4',
        capacity: '300 ml',
        highlight: 'Battery-powered, memory function, 3 cleaning modes',
        problem: 'Not suitable for large families',
        price: nicefeelFC1592bkGlobalData.productPrice,
        satisfaction: nicefeelFC1592bkGlobalData.rating.stars,
      },
      {
        id: 4,
        path: coslusC20F5020EGlobalData.path,
        model: 'Coslus F5020E',
        image: coslusC20F5020EGlobalData.images[0].thumbnail,
        alt: 'Coslus F5020E Oral Irrigator',
        prime: true,
        dimensions: '2.17 x 2.74 x 12.2 in, 15.31 oz',
        tips: '5',
        capacity: '300ml',
        highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
        problem: 'Limited water capacity',
        price: coslusC20F5020EGlobalData.productPrice,
        satisfaction: coslusC20F5020EGlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: "Pros and Cons Waterpik Model WF 02",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Waterpik Cordless Express WF 02 is the right fit for them.",
    cta: 'Buy Now on Amazon',
    buyLink: waterPikWF02GlobalData.amazonUrl,
    pros: [
      { title: 'Ideal for travel, small bathrooms, and on-the-go oral care.' },
      { title: 'Runs on 3 AA batteries (included), eliminating the need for charging cords.' },
      { title: 'Allows for use in the shower, enhancing versatility and convenience.' },
      { title: 'Removable 5-ounce reservoir with easy-fill design for convenient use.' },
    ],
    cons: [
      { title: 'Requires regular replacement of 3 AA batteries (every 1-2 months, depending on use).' },
      { title: 'The 5-ounce reservoir may require refilling for extended flossing sessions.' },
      { title: 'While customizable, the flosser provides only two pressure settings.' },
    ]
  },
}

export default waterpikF02
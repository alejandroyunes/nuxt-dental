import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592bkGlobalData, coslusC20F5020EGlobalData } from './01-global'
import type { ProductDetails } from '~/types/product-details'

const nicefeelFC1592: ProductDetails = {
  id: nicefeelFC1592bkGlobalData.id,
  fileName: 'nicefeelFC1592',
  info: {
    images: nicefeelFC1592bkGlobalData.images,
    alt: 'Nicefeel Cordless Water Flosser FC1592BK, 300ml',
    title: "Nicefeel Cordless Water Flosser FC1592BK, 300ml.",
    subtitle: 'State-of-the-art oral care device designed for optimal gum health and effective teeth cleaning',
    description: "The Nicefeel Cordless Water Flosser is not just effective but also incredibly convenient. It’s portable, rechargeable, and waterproof—perfect for on-the-go flossing, whether at home or traveling. Its compact size means it won’t take up much space in your bathroom, which is a bonus for those who are tight on space.",
    price: nicefeelFC1592bkGlobalData.productPrice,
    updatedDate: nicefeelFC1592bkGlobalData.updatedDate,
    buyLink: nicefeelFC1592bkGlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: nicefeelFC1592bkGlobalData.rating,
    video: nicefeelFC1592bkGlobalData.videoUrl,
    characteristics: [
      'Battery Powered: 1400mAh',
      'Portable',
      'Multiple Pressure Settings',
      'Multiple Operation Modes',
      'Rechargeable',
      'Multiple Tips',
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
    title: 'The Best of Nicefeel FC1592BK',
    description: "The Nicefeel Cordless Water Flosser packs a punch with its 300ml water tank, offering uninterrupted flossing. With its IPX7 waterproof design, you can even use it in the shower for added convenience. It boasts three modes—Normal, Soft, and Pulse—allowing you to customize the flossing experience to suit your needs.",
    subtext: "It’s particularly useful for those with sensitive gums or braces, offering a gentle yet thorough clean. Plus, the 360° rotating nozzle ensures that every nook and cranny is covered, leaving your teeth feeling fresh and clean.",
  },
  features: {
    id: "features",
    title: 'Why Choose the Nicefeel FC1592BK?',
    data: [
      {
        title: 'Detachable and Cleanable Water Tank',
        description: 'The 300ml tank is easy to fill and clean, designed with a leak-proof drainage system for safety and comfort.',
      },
      {
        title: 'Memory Function with 3 Cleaning Modes',
        description: 'Choose from Normal, Soft, or Pulse modes. The Memory Function remembers your preferred mode, even after the device is turned off.',
      },
      {
        title: '360° Rotating Long Nozzle',
        description: 'Reaches 99.99% of food residues in every corner that traditional brushing can’t reach.',
      },
      {
        title: 'Compact and Portable Design',
        description: 'Perfect for travel, offering convenience without sacrificing performance.',
      },
    ]
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Nicefeel FC1592BK with other irrigators',
    description: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
        path: nicefeelFC1592bkGlobalData.path,
        model: 'Nicefeel FC1592-BK',
        image: nicefeelFC1592bkGlobalData.images[0].thumbnail,
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
        path: waterPikWF02GlobalData.path,
        model: 'Waterpik WF-02',
        image: waterPikWF02GlobalData.images[0].thumbnail,
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
    id: 'pro-and-cons-nicefeelFC1592bk',
    title: 'Pros and Cons of Nicefeel FC1592BK',
    description:
      'Evaluate the advantages and disadvantages of the Nicefeel FC1592-BK Cordless Water Flosser.',
    cta: 'Buy Now on Amazon',
    buyLink: nicefeelFC1592bkGlobalData.amazonUrl,
    pros: [
      { title: 'Large Water Tank: 300ml capacity for uninterrupted use.' },
      { title: 'Efficient Cleaning: 1800 times/minute high pressure water pulse for effective removal of food residues.' },
      { title: 'Memory Function: Allows presetting and remembering preferred cleaning modes.' },
      { title: 'Orthodontic Tip: Great for users with braces and orthodontic appliances.' }
    ],
    cons: [
      { title: ' Initial Charging Time: Requires 4 hours of charging before first-time use.' },
      { title: 'Nozzle Replacement: Suggested to change nozzles every 3 months for optimal health.' },
      { title: 'Noisy: Louder than other models.' }
    ],
  },
};

export default nicefeelFC1592;
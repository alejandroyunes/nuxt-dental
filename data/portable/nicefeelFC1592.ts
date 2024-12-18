import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592bkGlobalData, coslusC20F5020EGlobalData } from './01-global'
import type { ProductDetails } from '~/types/product-details'

const nicefeelFC1592: ProductDetails = {
  id: 3,
  fileName: 'nicefeelFC1592',
  info: {
    image: nicefeelFC1592bkGlobalData.image,
    alt: 'Nicefeel Cordless Water Flosser FC1592BK, 300ml',
    title: "Nicefeel Cordless Water Flosser FC1592BK, 300ml.",
    subtitle: 'State-of-the-art oral care device designed for optimal gum health and effective teeth cleaning',
    description: "Experience the pinnacle of oral care with Nicefeel's Cordless Water Flosser—a portable and rechargeable solution that enhances gum health, teeth cleaning, and overall hygiene.",
    price: nicefeelFC1592bkGlobalData.productPrice,
    updatedDate: nicefeelFC1592bkGlobalData.updatedDate,
    buyLink: nicefeelFC1592bkGlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: {
      stars: 4.2,
      reviews: 22172,
    },
    characteristics: [
      'Battery Powered: 1400mAh',
      'Portable',
      'Multiple Pressure Settings',
      'Multiple Operation Modes',
      'Rechargeable',
      'Multiple Tips',
      'Prevents Bad Breath',
      'Gum Health',
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
    description: "Experience the pinnacle of oral care with Nicefeel's Cordless Water Flosser—a portable and rechargeable solution that effortlessly enhances gum health, teeth cleaning, and overall dental hygiene. With a 300ml detachable water tank, three cleaning modes, and a travel-friendly design.",
    subtext: "It's the perfect choice for efficient, hassle-free oral care, earning praise for its value, performance, and portability.",
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
        image: nicefeelFC1592bkGlobalData.image,
        alt: 'Nicefeel FC1592-BK Oral Irrigator Image',
        prime: true,
        dimensions: '0.3 x 0.31 x 0.87 in, 13 oz',
        tips: '4',
        capacity: '300 ml',
        highlight: 'Battery-powered, memory function, 3 cleaning modes',
        problem: 'Not suitable for large families',
        price: nicefeelFC1592bkGlobalData.productPrice,
        satisfaction: '8/10',
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
        satisfaction: '9/10',
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
        capacity: "5 oz Reservoir",
        highlight: "No outlets or charging needed",
        problem: "Requires regular battery replacement",
        price: waterPikWF02GlobalData.productPrice,
        satisfaction: '9/10',
      },
      {
        id: 4,
        path: coslusC20F5020EGlobalData.path,
        model: 'Coslus F5020E',
        image: coslusC20F5020EGlobalData.image,
        alt: 'Coslus F5020E Oral Irrigator',
        prime: true,
        dimensions: '2.17 x 2.74 x 12.2 in, 15.31 oz',
        tips: '5',
        capacity: '300ml',
        highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
        problem: 'Limited water capacity',
        price: coslusC20F5020EGlobalData.productPrice,
        satisfaction: '9/10',
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
      {
        title: 'Large Water Tank: 300ml capacity for uninterrupted use.'
      },
      {
        title: 'Efficient Cleaning: 1800 times/minute high pressure water pulse for effective removal of food residues.'
      },
      {
        title: 'Memory Function: Allows presetting and remembering preferred cleaning modes.'
      },
      {
        title: 'Orthodontic Tip: Great for users with braces and orthodontic appliances.'
      }
    ],
    cons: [
      {
        title: ' Initial Charging Time: Requires 4 hours of charging before first-time use.'
      },
      {
        title: 'Nozzle Replacement: Suggested to change nozzles every 3 months for optimal health.'
      }
    ],
  },
};

export default nicefeelFC1592;
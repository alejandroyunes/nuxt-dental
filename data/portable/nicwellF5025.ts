import type { ProductDetails } from '~/types/product-details'
import { nicwellF5025GlobalData } from './01-global'

const nicwellF5025: ProductDetails = {
  id: 2,
  fileName: 'nicwellF5025',
  info: {
    image: nicwellF5025GlobalData.image,
    alt: 'Nicwell Professional Water Flosser F5025',
    title: 'Nicwell Professional Water Flosser F5025, 300ml.',
    subtitle: 'Smart Oral Irrigator',
    description: 'An efficient and portable solution for maintaining oral hygiene, perfect for travel and daily use.',
    price: nicwellF5025GlobalData.productPrice,
    updatedDate: nicwellF5025GlobalData.updatedDate,
    buyLink: nicwellF5025GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: {
      stars: 4.3,
      reviews: 477986,
    },
    characteristics: [
      "Cordless and portable",
      "Rechargeable battery",
      "300ml water tank",
      "3 cleaning modes (Normal, Soft, Pulse)",
      "4 jet tips for different cleaning needs",
      "IPX7 waterproof",
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
    title: "Cordless Water Flosser Teeth Cleaner",
    description: "Nicwell Professional Water Flosser is a game-changer for maintaining healthy gums and teeth, offering a refreshing and deep clean experience for your oral hygiene routine. Its advanced water pulse technology provides a superior clean, particularly for those with sensitive gums and dental appliances.",
    subtext: "Improve your gum health and oral care routine with ease.",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      { title: "300ml Detachable Water Tank", description: "Provides uninterrupted use and easy cleaning." },
      { title: "Efficient Gum Health & Teeth Cleaning", description: "Removes 99.99% of food residue with 1800 pulses per minute." },
      { title: "Memory Function with 3 Cleaning Modes", description: "Normal, Soft, and Pulse for various needs." },
      { title: "Low-Noise Design", description: "Provides a peaceful flossing experience." },
      { title: "Portable & Rechargeable", description: "Perfect for travel and everyday use." },
      { title: "Multiple Jet Tips Included", description: "For different cleaning needs and family use." },
      { title: "IPX7 Waterproof", description: "Safe for use in the shower." },
      { title: "Brand", description: "Nicefeel" },
    ]
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Nicwell F5025 with other irrigators',
    description:
      'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
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
    ]
  },
  proAndCons: {
    id: 'pro-and-cons-f5025',
    title: 'Pros and Cons of Nicwell F5025',
    description:
      'In summary, while the oral irrigator has notable positive aspects such as value, cleanliness, ease of use, and overall performance, there are significant concerns regarding quality, water resistance, battery life, and the charging feature. Users\' experiences with these aspects vary, making it important for potential buyers to consider these factors based on their personal preferences and needs.',
    cta: 'Buy on Amazon',
    buyLink: nicwellF5025GlobalData.amazonUrl,
    pros: [
      { title: 'Well worth the price.' },
      { title: 'Users like the cleanliness the product provides, effectively cleaning between teeth and leaving a clean feeling.' },
      { title: 'The oral irrigator is praised for being easy to use, offering convenience and cost-effectiveness in daily oral care routines.' },
      { title: 'Impressive overall performance for maintaining oral hygiene.' },
      { title: 'Convenient compared to traditional flossing.' },
    ],
    cons: [
      { title: ' Opinions on water resistance, battery life, and overall performance are mixed, indicating varying experiences among users.' },
      { title: 'Customers are not satisfied with the charging feature of the oral irrigator. They mention that the charger is a USB and they never have a usb charger in the bathroom.' },
    ],
  },
}

export default nicwellF5025
import type { ProductDetails } from '~/types/product-details'
import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592bkGlobalData, bitvaeC2GlobalData } from './01-global'

const nicwellF5025: ProductDetails = {
  id: nicefeelFC1592bkGlobalData.id,
  fileName: 'nicwellF5025',
  info: {
    images: nicwellF5025GlobalData.images,
    alt: 'Nicwell Professional Water Flosser F5025',
    title: 'Nicwell Professional Water Flosser F5025, 300ml.',
    subtitle: 'Smart Oral Irrigator',
    description: 'Maintaining optimal oral hygiene is essential for overall health, and incorporating advanced tools like the Nicwell Professional Water Flosser F5025 can significantly enhance your dental care routine. This cordless, portable device is designed to effectively remove plaque and food particles from areas that traditional brushing and flossing might miss.',
    price: nicwellF5025GlobalData.productPrice,
    updatedDate: nicwellF5025GlobalData.updatedDate,
    buyLink: nicwellF5025GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: nicwellF5025GlobalData.rating,
    video: nicwellF5025GlobalData.videoUrl,
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
      { title: "Advanced Pulsation Technology", description: "The Nicwell F5025 utilizes an upgraded pulsation technique that delivers high-pressure water pulses, effectively removing up to 99.99% of food residue. This deep cleaning action helps whiten teeth and improve gum health." },
      { title: "300ml Water Reservoir", description: "The large-capacity water tank ensures uninterrupted flossing sessions, reducing the need for frequent refills." },
      { title: "IPX7 Waterproof Rating", description: "With its double-sealing rings, the device is reliably waterproof, allowing for safe use in the bathroom or shower and easy cleaning." },
      { title: "Long-Lasting Battery Life", description: " Equipped with a powerful lithium battery, the flosser charges fully in about four hours and lasts for approximately 21 days of regular use. The USB charging feature adds convenience, enabling charging via various devices." },
      { title: "360-Degree Rotatable Nozzle", description: "This feature allows for comprehensive cleaning, reaching all areas of the mouth with ease." },
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
        image: nicwellF5025GlobalData.images[0].thumbnail,
        alt: 'Nicwell 300ml Oral Irrigator',
        prime: true,
        dimensions: '8.11 x 4.06 x 2.73 in, 14.4 oz',
        tips: "6 replaceable tips",
        capacity: "300ml",
        highlight: "Offers 5 cleaning modes with advanced features.",
        problem: "Slightly heavier than Nicefeel.",
        price: nicwellF5025GlobalData.productPrice,
        satisfaction: nicwellF5025GlobalData.rating.stars
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
        path: bitvaeC2GlobalData.path,
        model: 'Bitvae C2',
        image: bitvaeC2GlobalData.images[0].thumbnail,
        alt: 'Bitvae C2 Oral Irrigator Image',
        prime: true,
        dimensions: '2.6 x 3.7 x 8.78 inches; 13.44 ounces',
        tips: '6',
        capacity: '260ml',
        highlight: 'Effective Cleaning, Compact Design, Long Battery Life',
        problem: 'Water Resistance, Durability',
        price: bitvaeC2GlobalData.productPrice,
        satisfaction: bitvaeC2GlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
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
      { title: 'Opinions on water resistance, battery life, and overall performance are mixed, indicating varying experiences among users.' },
      { title: 'Customers are not satisfied with the charging feature of the oral irrigator. They mention that the charger is a USB and they never have a usb charger in the bathroom.' },
    ],
  },
}

export default nicwellF5025
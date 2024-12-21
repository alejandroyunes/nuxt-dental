import type { ProductDetails } from '~/types/product-details'

const example: ProductDetails = {
  id: 1,
  fileName: '',
  info: {
    image: exampleGlobalData.image,
    alt: "",
    title: "",
    subtitle: "",
    description: "",
    price: exampleGlobalData.productPrice,
    updatedDate: exampleGlobalData.updatedDate,
    buyLink: exampleGlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: {
      stars: 0,
      reviews: 0,
    },
    characteristics: [
      "",
      "",
      "",
      "",
      "",
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
    title: "",
    description: "",
    subtext: "",
  },
  features: {
    id: "features",
    title: "",
    data: [
      { title: "", description: "", },
      { title: "", description: "", },
      { title: "", description: "", },
      { title: "", description: "", },
      { title: "", description: "", },
    ],
  },
  comparison: {
    id: "comparison",
    title: "",
    description: "",
    models: [
      {
        id: 0,
        path: exampleGlobalData.path,
        model: "",
        image: exampleGlobalData.image,
        alt: "",
        prime: false,
        dimensions: "",
        tips: "",
        capacity: "",
        highlight: "",
        problem: "",
        price: exampleGlobalData.productPrice,
        satisfaction: "",
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "",
    description: "",
    cta: "Buy on Amazon",
    buyLink: exampleGlobalData.amazonUrl,
    pros: [
      { title: "" },
      { title: "" },
      { title: "" },
    ],
    cons: [
      { title: "" },
      { title: "" },
    ],
  },
}

export default example

import type { ProductDetails } from '~/types/product-details'

const example: ProductDetails = {
  id: 100,
  fileName: '',
  info: {
    image: "",
    imageSmall: "",
    alt: "",
    title: "",
    subtitle: "",
    description: "",
    price: "",
    updatedDate: "",
    buyLink: "",
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
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "",
    description: "",
    models: [
      {
        id: 0,
        productUrl: "/reviews/portable-oral-irrigators/best/exampleFC65",
        model: "",
        image: "",
        alt: "",
        prime: false,
        dimensions: "",
        tips: "",
        capacity: "",
        highlight: "",
        problem: "",
        price: "",
        satisfaction: "",
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "",
    description: "",
    cta: "Buy on Amazon",
    buyLink: "",
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

import type { ProductDetails } from '~/types/product-details'
import { waterpikwp662GlobalData } from './01-global'

const waterpikwp662: ProductDetails = {
  id: waterpikwp662GlobalData.id,
  fileName: 'waterpikwp662',
  info: {
    image: waterpikwp662GlobalData.image,
    alt: "",
    title: "",
    subtitle: "",
    description: "",
    price: waterpikwp662GlobalData.productPrice,
    updatedDate: waterpikwp662GlobalData.updatedDate,
    buyLink: waterpikwp662GlobalData.amazonUrl,
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
        path: waterpikwp662GlobalData.path,
        model: "",
        image: waterpikwp662GlobalData.image,
        alt: "",
        prime: false,
        dimensions: "",
        tips: "",
        capacity: "",
        highlight: "",
        problem: "",
        price: waterpikwp662GlobalData.productPrice,
        satisfaction: waterpikwp662GlobalData.rating.stars,
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "",
    description: "",
    cta: "Buy on Amazon",
    buyLink: waterpikwp662GlobalData.amazonUrl,
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

export default waterpikwp662

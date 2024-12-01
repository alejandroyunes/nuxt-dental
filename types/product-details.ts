export interface ProductDetails {
  id: number
  fileName: string
  info: {
    image: string
    alt: string
    title: string
    subtitle: string
    description: string
    price: string
    rating: {
      stars: number
      reviews: number
    }
    characteristics: string[]
    buyLink: string
    updatedDate: string
  }
  tableOfContent: {
    id: string
    content: string
  }[],
  title: {
    id: string
    title: string
    description: string
    subtext: string
  }
  features: {
    id: string
    title: string
    data: {
      title: string
      description: string
    }[]
  },
  comparison: {
    id: string
    title: string
    description: string
    models: {
      id: number
      productUrl: string
      model: string
      image: string
      alt: string
      prime: boolean
      dimensions: string
      tips: string
      capacity: string
      highlight: string
      problem: string
      price: string
      satisfaction: string
      view: string
    }[]
  },
  proAndCons: {
    id: string
    title: string
    description: string
    cta: string
    pros: {
      title: string
    }[],
    cons: {
      title: string
    }[]
  },
}

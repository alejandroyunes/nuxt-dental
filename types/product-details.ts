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
  proAndCons: {
    id: string
    title: string
    message: string
    pros: {
      title: string
    }[],
    cons: {
      title: string
    }[]
  },
  comparison: {
    id: string
    title: string
    message: string
    primeUrl: string
    item: {
      id: number
      models: string
      image: string
      alt: string
      prime: boolean
      dimensions: string
      multifunctionaltips: string
      capacity: string
      highlight: string
      problem: string
      price: string
      satisfaction: string
      view: string
      url: string
    }[]
  },
  why: {
    id: string
    title: string
    items: {
      itemTitle: string[]
      itemContent: string[]
    }
  }
}

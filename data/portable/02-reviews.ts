import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import waterpikFW02 from './waterpikFW02'
import nicwellF5025 from './nicwellF5025'
import nicefeelFC1592 from './nicefeelFC1592'
import inSmartFC256 from './inSmartFC256'
import coslusF5020E from './coslusF5020E'
import bitvaeC2 from './bitvaeC2'

export const bestPortableReviewsTitle: TitleInfo = {
  title: "Affordable And Portable Oral Irrigators",
  description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
  subtext: "Click on view more to read our review of the top-rated portable oral Irrigators.",
  slug: "reviews/affordable-and-portable-oral-irrigators/portable"
}

export const bestPortableReviewsDescription: ReviewGrid[] = [
  {
    id: 1,
    productId: waterpikFW02.id,
    fileName: waterpikFW02.fileName,
    name: waterpikFW02.info.title,
    image: waterpikFW02.info.image,
    alt: waterpikFW02.info.alt,
    price: waterpikFW02.info.price,
    rating: waterpikFW02.info.rating.stars,
    reviewCount: waterpikFW02.info.rating.reviews,
    updatedDate: waterpikFW02.info.updatedDate
  },
  {
    id: 2,
    productId: nicwellF5025.id,
    fileName: nicwellF5025.fileName,
    name: nicwellF5025.info.title,
    image: nicwellF5025.info.image,
    alt: nicwellF5025.info.alt,
    price: nicwellF5025.info.price,
    rating: nicwellF5025.info.rating.stars,
    reviewCount: nicwellF5025.info.rating.reviews,
    updatedDate: nicwellF5025.info.updatedDate
  },
  {
    id: 3,
    productId: nicefeelFC1592.id,
    fileName: nicefeelFC1592.fileName,
    name: nicefeelFC1592.info.title,
    image: nicefeelFC1592.info.image,
    alt: nicefeelFC1592.info.alt,
    price: nicefeelFC1592.info.price,
    rating: nicefeelFC1592.info.rating.stars,
    reviewCount: nicefeelFC1592.info.rating.reviews,
    updatedDate: nicefeelFC1592.info.updatedDate
  },
  {
    id: 4,
    productId: inSmartFC256.id,
    fileName: inSmartFC256.fileName,
    name: inSmartFC256.info.title,
    image: inSmartFC256.info.image,
    alt: inSmartFC256.info.alt,
    price: inSmartFC256.info.price,
    rating: inSmartFC256.info.rating.stars,
    reviewCount: inSmartFC256.info.rating.reviews,
    updatedDate: inSmartFC256.info.updatedDate
  },
  {
    id: 5,
    productId: coslusF5020E.id,
    fileName: coslusF5020E.fileName,
    name: coslusF5020E.info.title,
    image: coslusF5020E.info.image,
    alt: coslusF5020E.info.alt,
    price: coslusF5020E.info.price,
    rating: coslusF5020E.info.rating.stars,
    reviewCount: coslusF5020E.info.rating.reviews,
    updatedDate: coslusF5020E.info.updatedDate
  },
  {
    id: 6,
    productId: bitvaeC2.id,
    fileName: bitvaeC2.fileName,
    name: bitvaeC2.info.title,
    image: bitvaeC2.info.image,
    alt: bitvaeC2.info.alt,
    price: bitvaeC2.info.price,
    rating: bitvaeC2.info.rating.stars,
    reviewCount: bitvaeC2.info.rating.reviews,
    updatedDate: bitvaeC2.info.updatedDate
  }
]
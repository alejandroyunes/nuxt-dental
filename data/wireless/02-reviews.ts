import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import waterpikFW02 from './waterpikFW02'
import nicwellF5025 from './nicwellF5025'
import nicefeelFC1592 from './nicefeelFC1592'
import inSmartFC256 from './inSmartFC256'
import coslusF5020E from './coslusF5020E'
import bitvaeC2 from './bitvaeC2'
import { waterPikWF02GlobalData, nicwellF5025GlobalData, nicefeelFC1592bkGlobalData, insmartFC256GlobalData, coslusC20F5020EGlobalData, bitvaeC2GlobalData } from "./01-global"

export const bestWirelessReviewsTitle: TitleInfo = {
  title: "Affordable And Wireless Oral Irrigators",
  description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
  subtext: "Click on view more to read our review of the top-rated wireless oral Irrigators.",
  slug: "reviews/affordable-and-wireless-oral-irrigators/wireless"
}

export const bestWirelessReviewsDescription: ReviewGrid[] = [
  {
    id: waterPikWF02GlobalData.id,
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
    id: nicefeelFC1592bkGlobalData.id,
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
    id: nicefeelFC1592bkGlobalData.id,
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
    id: inSmartFC256.id,
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
    id: coslusC20F5020EGlobalData.id,
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
    id: bitvaeC2GlobalData.id,
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
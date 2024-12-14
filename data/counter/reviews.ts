import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import { turewellFC165 } from './turewellFC165'
import { h2oflossHF9 } from './h2oflossHF9'
import { sawgmoreFC166 } from './sawgmoreFC166'
import { oeeterM01 } from './oeeterM01'
import { heyaxa2302WF } from './heyaxa2302WF'
import { turewellFC162 } from './turewellFC162'

export const counterReviewsTitle: TitleInfo = {
  title: 'Affordable CounterTop Irrigators',
  description: 'Explore the best budget-friendly countertop oral irrigators that provide superior dental care with high water pulsation, multiple pressure settings, and various tips for different needs.',
  subtext: 'Achieve effective, professional-level cleaning without the high cost. Perfect for families and individuals looking for a reliable and affordable oral care solution.',
  slug: 'reviews/affordable-countertop-irrigators/counter'
}

export const counterReviewsDescription: ReviewGrid[] = [
  {
    id: 1,
    productId: turewellFC165.id,
    fileName: turewellFC165.fileName,
    name: turewellFC165.info.title,
    image: turewellFC165.info.imageSmall,
    alt: turewellFC165.info.alt,
    price: turewellFC165.info.price,
    rating: turewellFC165.info.rating.stars,
    reviewCount: turewellFC165.info.rating.reviews
  },
  {
    id: 2,
    productId: h2oflossHF9.id,
    fileName: h2oflossHF9.fileName,
    name: h2oflossHF9.info.title,
    image: h2oflossHF9.info.imageSmall,
    alt: h2oflossHF9.info.alt,
    price: h2oflossHF9.info.price,
    rating: h2oflossHF9.info.rating.stars,
    reviewCount: h2oflossHF9.info.rating.reviews
  },
  {
    id: 3,
    productId: sawgmoreFC166.id,
    fileName: sawgmoreFC166.fileName,
    name: sawgmoreFC166.info.title,
    image: sawgmoreFC166.info.imageSmall,
    alt: sawgmoreFC166.info.alt,
    price: sawgmoreFC166.info.price,
    rating: sawgmoreFC166.info.rating.stars,
    reviewCount: sawgmoreFC166.info.rating.reviews
  },
  {
    id: 4,
    productId: oeeterM01.id,
    fileName: oeeterM01.fileName,
    name: oeeterM01.info.title,
    image: oeeterM01.info.imageSmall,
    alt: oeeterM01.info.alt,
    price: oeeterM01.info.price,
    rating: oeeterM01.info.rating.stars,
    reviewCount: oeeterM01.info.rating.reviews
  },
  {
    id: 5,
    productId: heyaxa2302WF.id,
    fileName: heyaxa2302WF.fileName,
    name: heyaxa2302WF.info.title,
    image: heyaxa2302WF.info.imageSmall,
    alt: heyaxa2302WF.info.alt,
    price: heyaxa2302WF.info.price,
    rating: heyaxa2302WF.info.rating.stars,
    reviewCount: heyaxa2302WF.info.rating.reviews
  },
  {
    id: 6,
    productId: turewellFC162.id,
    fileName: turewellFC162.fileName,
    name: turewellFC162.info.title,
    image: turewellFC162.info.imageSmall,
    alt: turewellFC162.info.alt,
    price: turewellFC162.info.price,
    rating: turewellFC162.info.rating.stars,
    reviewCount: turewellFC162.info.rating.reviews
  }
]
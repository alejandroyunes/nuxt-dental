import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import panasonicEW1511W from './panasonicEW1511W'
import synhopeM6Plus from "./synhopeM6Plus"
import waterpikwp580 from "./waterpikwp580"
import waterpikwp660 from "./waterpikwp660"
import { panasonicEW1511WGlobalData, synhopeM6PlusGlobalData, waterpikwp580GlobalData, waterpikwp660GlobalData } from "./01-global"

export const bestIrrigatorReviewsTitle: TitleInfo = {
  title: 'Top 6 Best Dental Irrigators in 2025',
  description: 'Maintaining optimal oral hygiene is crucial for overall health, and dental irrigators have become an essential tool in achieving that goal. These devices, also known as water flossers, use a stream of water to remove plaque and food particles from between your teeth and below the gumline.',
  subtext: 'Here are some of the best dental irrigators you can buy online:',
  slug: 'reviews/best-dental-irrigators/best'
}

export const bestIrrigatorReviewsDescription: ReviewGrid[] = [
  {
    id: panasonicEW1511WGlobalData.id,
    productId: panasonicEW1511W.id,
    fileName: panasonicEW1511W.fileName,
    name: panasonicEW1511W.info.title,
    image: panasonicEW1511W.info.image,
    alt: panasonicEW1511W.info.alt,
    price: panasonicEW1511W.info.price,
    rating: panasonicEW1511W.info.rating.stars,
    reviewCount: panasonicEW1511W.info.rating.reviews,
    updatedDate: panasonicEW1511W.info.updatedDate
  },
  {
    id: synhopeM6PlusGlobalData.id,
    productId: synhopeM6Plus.id,
    fileName: synhopeM6Plus.fileName,
    name: synhopeM6Plus.info.title,
    image: synhopeM6Plus.info.image,
    alt: synhopeM6Plus.info.alt,
    price: synhopeM6Plus.info.price,
    rating: synhopeM6Plus.info.rating.stars,
    reviewCount: synhopeM6Plus.info.rating.reviews,
    updatedDate: synhopeM6Plus.info.updatedDate
  },
  {
    id: waterpikwp580GlobalData.id,
    productId: waterpikwp580.id,
    fileName: waterpikwp580.fileName,
    name: waterpikwp580.info.title,
    image: waterpikwp580.info.image,
    alt: waterpikwp580.info.alt,
    price: waterpikwp580.info.price,
    rating: waterpikwp580.info.rating.stars,
    reviewCount: waterpikwp580.info.rating.reviews,
    updatedDate: waterpikwp580.info.updatedDate
  },
  {
    id: waterpikwp660GlobalData.id,
    productId: waterpikwp660.id,
    fileName: waterpikwp660.fileName,
    name: waterpikwp660.info.title,
    image: waterpikwp660.info.image,
    alt: waterpikwp660.info.alt,
    price: waterpikwp660.info.price,
    rating: waterpikwp660.info.rating.stars,
    reviewCount: waterpikwp660.info.rating.reviews,
    updatedDate: waterpikwp660.info.updatedDate
  },
  // {
  //   id: 5,
  //   productId: heyaxa2302WF.id,
  //   fileName: heyaxa2302WF.fileName,
  //   name: heyaxa2302WF.info.title,
  //   image: heyaxa2302WF.info.image,
  //   alt: heyaxa2302WF.info.alt,
  //   price: heyaxa2302WF.info.price,
  //   rating: heyaxa2302WF.info.rating.stars,
  //   reviewCount: heyaxa2302WF.info.rating.reviews,
  //   updatedDate: heyaxa2302WF.info.updatedDate
  // },
  // {
  //   id: 6,
  //   productId: turewellFC162.id,
  //   fileName: turewellFC162.fileName,
  //   name: turewellFC162.info.title,
  //   image: turewellFC162.info.image,
  //   alt: turewellFC162.info.alt,
  //   price: turewellFC162.info.price,
  //   rating: turewellFC162.info.rating.stars,
  //   reviewCount: turewellFC162.info.rating.reviews,
  //   updatedDate: turewellFC162.info.updatedDate
  // }
]
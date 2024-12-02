import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import turewell610 from '~/data/counter/turewell610'
import h2oflossHF9 from '~/data/counter/h2oflossHF9'

export function getCounterReviews() {
  const reviewsCounter = ref<ReviewGrid[]>([
    {
      id: 1,
      productId: turewell610.id,
      fileName: turewell610.fileName,
      name: turewell610.info.title,
      image: turewell610.info.imageSmall,
      alt: turewell610.info.alt,
      price: turewell610.info.price,
      rating: turewell610.info.rating.stars,
      reviewCount: turewell610.info.rating.reviews
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
    }
  ])
  const reviewTitleCounter = ref<TitleInfo>({
    title: 'Affordable CounterTop Irrigators',
    description: 'Explore the best budget-friendly countertop oral irrigators that provide superior dental care with high water pulsation, multiple pressure settings, and various tips for different needs.',
    subtext: 'Achieve effective, professional-level cleaning without the high cost. Perfect for families and individuals looking for a reliable and affordable oral care solution.',
    slug: 'reviews/affordable-countertop-irrigators/counter'
  })

  const loadingCounter = ref(false)
  const errorCounter = ref<string | null>(null)

  const fetchPosts = async () => {
    loadingCounter.value = true
    try {
      loadingCounter.value = false
    } catch (e) {
      errorCounter.value = 'Failed to fetch posts'
      loadingCounter.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    reviewsCounter,
    reviewTitleCounter,
    loadingCounter,
    errorCounter
  }
}

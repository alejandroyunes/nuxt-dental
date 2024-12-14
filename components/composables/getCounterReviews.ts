import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import { counterReviewsDescription, counterReviewsTitle } from '~/data/counter/reviews'


export function getCounterReviews() {

  const counterReviewTitle = ref<TitleInfo>({
    title: '',
    description: '',
    subtext: '',
    slug: ''
  })
  const counterReviewDescription = ref<ReviewGrid[]>([])

  const loadingCounter = ref(false)
  const errorCounter = ref<string | null>(null)

  const fetchPosts = async () => {
    loadingCounter.value = true
    try {
      counterReviewTitle.value = await counterReviewsTitle
      counterReviewDescription.value = await counterReviewsDescription
      loadingCounter.value = false
    } catch (e) {
      errorCounter.value = 'Failed to fetch posts'
      loadingCounter.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    counterReviewTitle,
    counterReviewDescription,
    loadingCounter,
    errorCounter
  }
}

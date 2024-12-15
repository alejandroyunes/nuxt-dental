import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import { bestPortableReviewsDescription, bestPortableReviewsTitle } from "~/data/portable/02-reviews"

export function getPortablesReviews() {

  const bestpPortableReviewTitle = ref<TitleInfo>({
    title: '',
    description: '',
    subtext: '',
    slug: ''
  })
  const bestpPortableReviewDescription = ref<ReviewGrid[]>([])

  const loadingBestPortable = ref(false)
  const errorBestPortable = ref<string | null>(null)

  const fetchPosts = async () => {
    loadingBestPortable.value = true
    try {
      bestpPortableReviewTitle.value = await bestPortableReviewsTitle
      bestpPortableReviewDescription.value = await bestPortableReviewsDescription
      loadingBestPortable.value = false

    } catch (e) {
      errorBestPortable.value = 'Failed to fetch posts'
      loadingBestPortable.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestpPortableReviewTitle,
    bestpPortableReviewDescription,
    loadingBestPortable,
    errorBestPortable
  }
}
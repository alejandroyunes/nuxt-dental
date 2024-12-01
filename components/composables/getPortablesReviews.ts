import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import waterpikF02 from '~/data/portable/waterpikF02'
import nicwellF5025 from '~/data/portable/nicwellF5025'
import nicefeelFC1592 from '~/data/portable/nicefeelFC1592'
import inSmartFC256 from "~/data/portable/inSmartFC256"
import coslusF5020E from "~/data/portable/coslusF5020E"
import bitvaeC2 from "~/data/portable/bitvaeC2"

export function getPortablesReviews() {

  const reviews = ref<ReviewGrid[]>([
    {
      id: 1,
      productId: waterpikF02.id,
      fileName: waterpikF02.fileName,
      name: waterpikF02.info.title,
      image: waterpikF02.info.imageSmall,
      alt: waterpikF02.info.alt,
      price: waterpikF02.info.price,
      rating: waterpikF02.info.rating.stars,
      reviewCount: waterpikF02.info.rating.reviews
    },
    {
      id: 2,
      productId: nicwellF5025.id,
      fileName: nicwellF5025.fileName,
      name: nicwellF5025.info.title,
      image: nicwellF5025.info.imageSmall,
      alt: nicwellF5025.info.alt,
      price: nicwellF5025.info.price,
      rating: nicwellF5025.info.rating.stars,
      reviewCount: nicwellF5025.info.rating.reviews
    },
    {
      id: 3,
      productId: nicefeelFC1592.id,
      fileName: nicefeelFC1592.fileName,
      name: nicefeelFC1592.info.title,
      image: nicefeelFC1592.info.imageSmall,
      alt: nicefeelFC1592.info.alt,
      price: nicefeelFC1592.info.price,
      rating: nicefeelFC1592.info.rating.stars,
      reviewCount: nicefeelFC1592.info.rating.reviews
    },
    {
      id: 4,
      productId: inSmartFC256.id,
      fileName: inSmartFC256.fileName,
      name: inSmartFC256.info.title,
      image: inSmartFC256.info.imageSmall,
      alt: inSmartFC256.info.alt,
      price: inSmartFC256.info.price,
      rating: inSmartFC256.info.rating.stars,
      reviewCount: inSmartFC256.info.rating.reviews
    },
    {
      id: 5,
      productId: coslusF5020E.id,
      fileName: coslusF5020E.fileName,
      name: coslusF5020E.info.title,
      image: coslusF5020E.info.imageSmall,
      alt: coslusF5020E.info.alt,
      price: coslusF5020E.info.price,
      rating: coslusF5020E.info.rating.stars,
      reviewCount: coslusF5020E.info.rating.reviews
    },
    {
      id: 6,
      productId: bitvaeC2.id,
      fileName: bitvaeC2.fileName,
      name: bitvaeC2.info.title,
      image: bitvaeC2.info.imageSmall,
      alt: bitvaeC2.info.alt,
      price: bitvaeC2.info.price,
      rating: bitvaeC2.info.rating.stars,
      reviewCount: bitvaeC2.info.rating.reviews
    }
  ])

  const reviewTitle = ref<TitleInfo>({
    title: "Portable and Affordable Oral Irrigators",
    description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
    subtext: "Click on the following images to read our review of the top-rated portable oral Irrigators.",
    slug: "reviews/portable-and-affordable-oral-irrigators"
  })

  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchPosts = async () => {
    loading.value = true
    try {
      // In a real application, this would be an API call
      // await fetch('/api/posts')
      loading.value = false
    } catch (e) {
      error.value = 'Failed to fetch posts'
      loading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    reviews,
    reviewTitle,
    loading,
    error
  }
}
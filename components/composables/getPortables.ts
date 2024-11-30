import { ref, onMounted } from 'vue'
import type { IrrigatorProduct } from "~/types/irrigator-grid"
import type { TitleInfo } from "~/types/title-info"
import { waterpikF02 } from '~/data/portable/waterpikF02'
import { nicwellF5025 } from '~/data/portable/nicwellF5025'
import { nicefeelFC1592 } from '~/data/portable/nicefeelFC1592'
import { inSmartFC256 } from "~/data/portable/inSmartFC256"
import { colusF5020E } from "~/data/portable/colusF5020E"
import { bitvaeC2 } from "~/data/portable/bitvaeC2"

export function getPortables() {

  const irrigators = ref<IrrigatorProduct[]>([
    {
      id: 1,
      name: waterpikF02.info.title,
      image: waterpikF02.info.image,
      alt: waterpikF02.info.alt,
      price: waterpikF02.info.price,
      rating: waterpikF02.info.rating.stars,
      reviewCount: waterpikF02.info.rating.reviews
    },
    {
      id: 2,
      name: nicwellF5025.info.title,
      image: nicwellF5025.info.image,
      alt: nicwellF5025.info.alt,
      price: nicwellF5025.info.price,
      rating: nicwellF5025.info.rating.stars,
      reviewCount: nicwellF5025.info.rating.reviews
    },
    {
      id: 3,
      name: nicefeelFC1592.info.title,
      image: nicefeelFC1592.info.image,
      alt: nicefeelFC1592.info.alt,
      price: nicefeelFC1592.info.price,
      rating: nicefeelFC1592.info.rating.stars,
      reviewCount: nicefeelFC1592.info.rating.reviews
    },
    {
      id: 4,
      name: inSmartFC256.info.title,
      image: inSmartFC256.info.image,
      alt: inSmartFC256.info.alt,
      price: inSmartFC256.info.price,
      rating: inSmartFC256.info.rating.stars,
      reviewCount: inSmartFC256.info.rating.reviews
    },
    {
      id: 5,
      name: colusF5020E.info.title,
      image: colusF5020E.info.image,
      alt: colusF5020E.info.alt,
      price: colusF5020E.info.price,
      rating: colusF5020E.info.rating.stars,
      reviewCount: colusF5020E.info.rating.reviews
    },
    {
      id: 6,
      name: bitvaeC2.info.title,
      image: bitvaeC2.info.image,
      alt: bitvaeC2.info.alt,
      price: bitvaeC2.info.price,
      rating: bitvaeC2.info.rating.stars,
      reviewCount: bitvaeC2.info.rating.reviews
    }
  ])

  const titleInfo = ref<TitleInfo>({
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
    irrigators,
    titleInfo,
    loading,
    error
  }
}
<script setup lang="ts">
import HeroSection from '~/components/organisms/hero/dental-main/index.vue'
import ReviewsGrid from '~/components/organisms/grids/review/ReviewsGrid.vue'
import ProsConsSection from '~/components/organisms/pros-cons/index.vue'
import InfoGridSection from '~/components/organisms/grids/InfoGridSection.vue'
import TypeSection from '~/components/organisms/type-section/TypeSection.vue'
import ComparisonSection from '~/components/organisms/tables/comparisor/index.vue'
import WaterPickSection from '~/components/organisms/product/card/index.vue'
import { getPortablesReviews } from '~/components/composables/getPortablesReviews'
import { getCounterReviews } from '~/components/composables/getCounterReviews'

useSeoMeta({
  title: 'Servicio Web Profesional en Colombia',
  description: 'Ofrecemos hosting gratis el primer año con un diseño web único.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Servicio Web Profesional en Colombia',
  ogDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogUrl: 'https://paginasprofesionales.co',
  ogLocale: 'es_CO',
  twitterTitle: 'Servicio Web Profesional en Colombia',
  twitterDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  twitterImage: '/meta/inicio-web-profesional.webp',
  twitterCard: 'summary_large_image',
})

const { reviews, reviewTitle } = getPortablesReviews()
const { reviewsCounter, reviewTitleCounter } = getCounterReviews()

</script>

<template>
  <HeroSection />
  <ReviewsGrid :reviews="reviews" :reviewTitle="reviewTitle" />
  <ReviewsGrid :reviews="reviewsCounter" :reviewTitle="reviewTitleCounter" />
  <ProsConsSection />
  <InfoGridSection />
  <TypeSection />
  <ComparisonSection />
  <WaterPickSection />

</template>

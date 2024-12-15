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
import QuestionsAndAnswers from '~/components/organisms/questions-answers/index.vue'

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

const { reviewPortables, reviewTitlePortables } = getPortablesReviews()
const { counterReviewDescription, counterReviewTitle } = getCounterReviews()


</script>

<template>
  <HeroSection />
  <ReviewsGrid :reviews="reviewPortables" :reviewTitle="reviewTitlePortables" />
  <ReviewsGrid :reviews="counterReviewDescription" :reviewTitle="counterReviewTitle" />
  <TypeSection />
  <QuestionsAndAnswers />

  

</template>

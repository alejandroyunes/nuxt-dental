<script setup lang="ts">
import Hero from '~/components/organisms-raw/hero.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'
import TypeSection from '~/components/organisms-raw/types.vue'
import { getWirelessReviews } from '~/components/composables/getWirelessReviews'
import { getCounterReviews } from '~/components/composables/getCounterReviews'
import QuestionsAndAnswers from '~/components/organisms-raw/questions.vue'

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

const { bestWirelessReviewDescription, bestWirelessReviewTitle } = getWirelessReviews()
const { bestCounterReviewDescription, bestCounterReviewTitle } = getCounterReviews()

</script>

<template>
  <Hero />
  <ReviewsGrid :reviews="bestWirelessReviewDescription" :reviewTitle="bestWirelessReviewTitle" />
  <ReviewsGrid :reviews="bestCounterReviewDescription" :reviewTitle="bestCounterReviewTitle" />
  <TypeSection />
  <QuestionsAndAnswers />
</template>

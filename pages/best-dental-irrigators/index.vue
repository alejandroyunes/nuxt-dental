<script setup lang="ts">
import ReviewsGrid from '~/components/organisms/grids/review/ReviewsGrid.vue'
import TypeSection from '~/components/organisms/type-section/TypeSection.vue'
import { getBestIrrigators } from '~/components/composables/getBestIrrigators'
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


const { bestIrrigators, bestIrrigatorsTitle } = getBestIrrigators()

</script>

<template>
  <ReviewsGrid :reviews="bestIrrigators" :reviewTitle="bestIrrigatorsTitle" marginTop />
  <TypeSection />
  <QuestionsAndAnswers />

</template>

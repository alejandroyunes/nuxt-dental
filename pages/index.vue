<script setup lang="ts">
import HeroSection from '~/components/organisms/billboards/dental-main/index.vue'
import IrrigatorGrid from '~/components/organisms/grids/IrrigatorGrid.vue'
import ProsConsSection from '~/components/ProsConsSection.vue'
import { useBlogPosts } from '~/components/composables/useBlogPosts';
import InfoGridSection from '~/components/organisms/grids/InfoGridSection.vue';
import TypeSection from '~/components/organisms/type-section/TypeSection.vue';
import FeaturedPosts from '~/components/FeaturedPosts.vue';
import ComparisonSection from '~/components/organisms/tables/ComparisonSection.vue';
import WaterPickSection from '~/components/organisms/product/WaterPickSection.vue';

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

const { posts, loading, error } = useBlogPosts();



</script>

<template>
  <HeroSection />

  <IrrigatorGrid />
  <ProsConsSection />
  <InfoGridSection />
  <TypeSection />
  <ComparisonSection />
  <WaterPickSection />

  <!-- <FeaturedPosts :posts="posts" /> -->

</template>

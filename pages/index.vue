<script setup lang="ts">
import HeroSection from '~/components/organisms/billboards/dental-main/index.vue'
import IrrigatorGrid from '~/components/IrrigatorGrid.vue'
import ProsConsSection from '~/components/ProsConsSection.vue'
import { useBlogPosts } from '~/components/composables/useBlogPosts';
import InfoSection from '~/components/InfoSection.vue';
import TypeSection from '~/components/TypeSection.vue';
import FeaturedPosts from '~/components/FeaturedPosts.vue';
import ComparisonSection from '~/components/ComparisonSection.vue';
import WaterPickSection from '~/components/WaterPickSection.vue';

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
  <InfoSection />
  <TypeSection />
  <ComparisonSection />
  <WaterPickSection />

  <!-- <FeaturedPosts :posts="posts" /> -->

</template>

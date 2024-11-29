<script setup lang="ts">
import HeroSection from '~/components/organisms/billboards/dental-main/index.vue'
import IrrigatorGrid from '~/components/organisms/grids/IrrigatorGrid.vue'
import ProsConsSection from '~/components/organisms/grids/ProsConsSection.vue'
import { useBlogPosts } from '~/components/composables/useBlogPosts';
import InfoSection from '~/components/organisms/grids/InfoSection.vue';
import TypeSection from '~/components/organisms/grids/TypeSection.vue';
import FeaturedPosts from '~/components/organisms/grids/FeaturedPosts.vue';
import ComparisonSection from '~/components/organisms/grids/ComparisonSection.vue';
import WaterPickSection from '~/components/organisms/grids/WaterPickSection.vue';

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

const heroData = {
  titleH2: "Enhance your oral health",
  title: "With an Oral Dental Irrigator",
  subtitle: "We've gone the extra mile by diving deep into reviews, user comments, forum discussions, brand reputation sentiments, and more, all to empower you in making a well-informed decision for your Oral Dental Irrigator. Your dental care journey just got a whole lot easier! 😊",
  buttonText: "View Irrigators"
};

</script>

<template>
  <HeroSection v-bind="heroData" />

  <IrrigatorGrid />
  <ProsConsSection />
  <InfoSection />
  <TypeSection />
  <ComparisonSection />
  <WaterPickSection />

  <!-- <FeaturedPosts :posts="posts" /> -->

</template>

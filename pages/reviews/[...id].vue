<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CardDetails from '~/components/organisms/product/card-details/index.vue'
import Accordion from '~/components/organisms/accordion/index.vue'
import BlogText from '~/components/organisms/product/blog-text/index.vue'
import ProsCons from '~/components/organisms/pros-cons/index.vue'
import TableComparison from '~/components/organisms/tables/comparisor/index.vue'
const route = useRoute()

const id = route.params.id

const irrigator = ref({
  id: route.params.id,
  name: "WaterPulse Pro X1",
  rating: 4.0,
  reviewCount: 2,
  description: "Waterpik: Dentist Recommended, ADA Accepted, and Clinically Proven for Superior Oral Health.",
  price: "$79.99",
  keyFeatures: [
    "10 pressure settings",
    "Large water tank",
    "Multiple nozzle tips",
    "Timer function"
  ],
  image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp", // Replace with actual image URL
});
</script>

<template>
  <section>

    <CardDetails />
    <Accordion />
    <BlogText />
    <ProsCons />
    <TableComparison  />
  </section>
</template>

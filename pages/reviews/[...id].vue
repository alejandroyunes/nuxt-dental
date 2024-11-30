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

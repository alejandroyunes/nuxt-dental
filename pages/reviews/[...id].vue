<script setup lang="ts">
import { useRoute } from 'vue-router'
import CardDetails from '~/components/organisms/product/card-details/index.vue'
import Accordion from '~/components/organisms/accordion/index.vue'
import Features from '~/components/organisms/product/features/index.vue'
import ProsCons from '~/components/organisms/pros-cons/index.vue'
import TableComparison from '~/components/organisms/tables/comparisor/index.vue'
import Title from '~/components/atoms/title-description/index.vue'
import { getProductDetails } from '~/components/composables/getProductDetails'
import Video from '~/components/organisms/product/video/index.vue'

const route = useRoute()
const fileRoute = route.params.id

const { product, loading, error } = getProductDetails(fileRoute[2], fileRoute[1])

watch([product, loading, error], ([newProduct, newLoading, newError]) => {

  return {
    product: newProduct,
    loading: newLoading,
    error: newError
  }
})

if(loading.value) {
  console.log('loading')
}

if(error.value) { 
  console.log('error')
}

if(product.value) {
  console.log('product')
}

</script>

<template>
  <section class="product-section">
    <CardDetails :info="product?.info" />
    <Accordion :info="product?.tableOfContent" />
    <Title :info="product?.title" marginTop />
    <Video :videoUrl="product?.info.video"  />
    <Features :info="product?.features" />
    <TableComparison :info="product?.comparison" />
    <ProsCons :info="product?.proAndCons" />

  </section>
</template>

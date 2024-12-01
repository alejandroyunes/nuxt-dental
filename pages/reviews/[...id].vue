<script setup lang="ts">
import { useRoute } from 'vue-router'
import CardDetails from '~/components/organisms/product/card-details/index.vue'
import Accordion from '~/components/organisms/accordion/index.vue'
import BlogText from '~/components/organisms/product/blog-text/index.vue'
import ProsCons from '~/components/organisms/pros-cons/index.vue'
import TableComparison from '~/components/organisms/tables/comparisor/index.vue'
import { getProductDetails } from '~/components/composables/getProductDetails'

const route = useRoute()
const fileRoute = route.params.id

const { product, loading, error } = getProductDetails(fileRoute[1])

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
  <section>
    <CardDetails :info="product?.info" />
    <Accordion />
    <BlogText />
    <ProsCons />
    <TableComparison />
  </section>
</template>

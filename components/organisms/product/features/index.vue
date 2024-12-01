<script setup lang="ts">
import './features.scss'
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['features']
}>()

</script>

<template>
  <div class="blog-text" :id="info?.id">
    <h1 class="title">{{ info?.title }}</h1>

    <div v-for="(feature, index) in info?.data" :key="index" class="feature">
      <div class="feature-content">
        <h2 class="feature-title">{{ feature.title }}</h2>
        <p class="feature-description">
          {{ feature.description }}
        </p>
      </div>
    </div>

  </div>
</template>
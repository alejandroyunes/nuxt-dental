<script setup lang="ts">
import './card-details.scss'
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['info']
}>()

</script>

<template>
  <div class="card-details">
    <div class="card-image">
      <NuxtImg :src="info?.image" :alt="info?.title" format="webp" loading="lazy" sizes="xs:100vw" class="image" />
    </div>

    <div class="card-info">
      <h1>{{ info?.title }}</h1>
      <p>
        {{ info?.description }}
      </p>

      <div class="price">{{ info?.price }}</div>
      <div class="rating">
        <div class="stars" :style="{ '--rating': info?.rating.stars }"></div>
        <span>({{ info?.rating.reviews }} reviews)</span>
      </div>

      <div class="characteristics">
        <h4>Characteristics</h4>
        <ul>
          <li v-for="(char, index) in info?.characteristics" :key="index">
            {{ char }}
          </li>
        </ul>
      </div>

      <NuxtLink :to="info?.buyLink" class="buy-button">{{ info?.cta }}</NuxtLink>
    </div>
  </div>
</template>
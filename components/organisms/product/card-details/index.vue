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

      <div class="price-and-date">
        <p class="price">{{ info?.price }}</p>
        <p class="date">last updated: <strong>{{ info?.updatedDate }}</strong></p>
      </div>

      <div class="rating">
        <span> ⭐ {{ info?.rating.stars }} Stars</span>
        <span> ❤️ {{ info?.rating.reviews }} reviews</span>
      </div>

      <div class="characteristics">
        <h4>Characteristics</h4>
        <ul>
          <li v-for="(char, index) in info?.characteristics" :key="index">
            {{ char }}
          </li>
        </ul>
      </div>

      <NuxtLink :to="info?.buyLink" class="buy-button">👉 {{ info?.cta }}</NuxtLink>
    </div>
  </div>
</template>
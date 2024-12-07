<script setup lang="ts">
import './reviews-grid.scss'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import TitleDescription from "~/components/atoms/title-description/index.vue"

const { reviewTitle, reviews } = defineProps<{
  reviews: ReviewGrid[],
  reviewTitle: TitleInfo,
  marginTop?: boolean
}>()

</script>

<template>
  <section class="irrigator-grid" >
    <TitleDescription :info="reviewTitle" :class="{ 'extra-top-space': marginTop }" />

    <div class="grid">
      <div v-for="review in reviews" :key="review.id" class="irrigator-card">
        <div class="image-wrapper">
          <NuxtImg :src="review.image" :alt="review.name" class="image" />
        </div>
        <div class="content">
          <h3>{{ review.name }}</h3>
          <div class="price">{{ review.price }}</div>
          <div class="rating">
            <div class="stars" :style="{ '--rating': review.rating }"></div>
            <span>({{ review.reviewCount }} reviews)</span>
          </div>
          <NuxtLink :to="`/${reviewTitle.slug}/${review.fileName}`" class="button">
            Read Review
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

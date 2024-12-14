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
  <section class="irrigator-grid">
    <TitleDescription :info="reviewTitle" :marginTop="marginTop" />

    <div class="cards">
      <div v-for="review in reviews" :key="review.id" class="card">

        <NuxtImg :src="review.image" :alt="review.name" class="image" />

        <div class="content">
          <div>
            <h3>{{ review.name }}</h3>
          </div>

          <div>
            <p class="price">Price: {{ review.price }}</p>
            <div class="rating">
              <span> ⭐ {{ review.rating }} Stars</span>
              <span> ❤️ {{ review.reviewCount }} reviews</span>
            </div>
            <NuxtLink :to="`/${reviewTitle.slug}/${review.fileName}`" class="button">
              Read Review
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

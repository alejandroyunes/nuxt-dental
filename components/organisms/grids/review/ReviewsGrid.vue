<script setup lang="ts">
import './reviews-grid.scss'
import SubtitleDescription from "~/components/atoms/subtitle-description/index.vue"
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"

const { irrigatorTitle, irrigators } = defineProps<{ irrigators: ReviewGrid[], irrigatorTitle: TitleInfo }>()

</script>

<template>
  <section class="irrigator-section">
    <SubtitleDescription :title="irrigatorTitle.title" :description="irrigatorTitle.description"
      :subtext="irrigatorTitle.subtext" />

    <div class="irrigator-grid">
      <div v-for="irrigator in irrigators" :key="irrigator.id" class="irrigator-card">
        <div class="image-wrapper">
          <img :src="irrigator.image" :alt="irrigator.name" class="image">
        </div>
        <div class="content">
          <h3>{{ irrigator.name }}</h3>
          <div class="price">{{ irrigator.price }}</div>
          <div class="rating">
            <div class="stars" :style="{ '--rating': irrigator.rating }"></div>
            <span>({{ irrigator.reviewCount }} reviews)</span>
          </div>
          <NuxtLink :to="`/${irrigatorTitle.slug}/${irrigator.fileName}`" class="button">
            Read Review
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sections = ref([
  { id: 'overview', title: 'Product Overview' },
  { id: 'features', title: 'Key Features' },
  { id: 'reviews', title: 'Customer Reviews' },
  { id: 'price', title: 'Pricing and Availability' },
])

onMounted(() => {
  // Code to handle any required actions on mount, like fetching data.
})
</script>

<template>
  <div class="detail-summary">
    <section class="summary">
      <h2 class="summary__title">Product Summary</h2>
      <p class="summary__text">
        Discover the benefits of our state-of-the-art WaterPulse Pro X1, a professional-grade dental irrigator that
        offers 10 pressure settings, a large water tank, and multiple nozzle tips. Perfect for improving your oral
        health with ease and comfort. Explore its features, reviews, and pricing below.
      </p>
    </section>

    <section class="table-of-contents">
      <h3>Table of Contents</h3>
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`" class="toc-link">{{ section.title }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.detail-summary {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  .summary {
    margin-bottom: 30px;
    &__title {
      font-size: 2rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }
    &__text {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #555;
      margin-bottom: 20px;
    }
  }

  .table-of-contents {
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 15px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;

        .toc-link {
          font-size: 1.1rem;
          color: #007bff;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #0056b3;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>

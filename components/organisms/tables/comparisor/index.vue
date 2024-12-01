<script setup lang="ts">
import './comparison.scss'
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['comparison']
}>()

</script>

<template>
  <section class="comparison-section" :id="info?.id">
    <div class="container">
      <h2>{{ info?.title }}</h2>
      <p class="section-intro">{{ info?.description }}</p>

      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Models</th>
              <th v-for="model in info?.models" :key="model.id">{{ model.model }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td v-for="model in info?.models" :key="model.model">
                <img :src="model.image" :alt="model.alt">
              </td>
            </tr>
            <tr>
              <td>Prime</td>
              <td v-for="model in info?.models" :key="model.id">
                <span v-if="model.prime" class="prime-badge">✓</span>
              </td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.dimensions }}</td>
            </tr>
            <tr>
              <td>Tips</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.tips }}</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.capacity }}</td>
            </tr>
            <tr>
              <td>Highlight</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.highlight }}</td>
            </tr>
            <tr>
              <td>Problem</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.problem }}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td v-for="model in info?.models" :key="model.id">
                <span class="price-tag">{{ model.price }}</span>
              </td>
            </tr>
            <tr>
              <td>Satisfaction</td>
              <td v-for="model in info?.models" :key="model.id">
                <div class="satisfaction">
                  <span class="rating">{{ model.satisfaction }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>View More</td>
              <td v-for="model in info?.models" :key="model.id">
                <NuxtLink :href="model.productUrl" class="view-price-btn">View More</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

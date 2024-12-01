<script setup lang="ts">
import './pros-cons.scss'
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['proAndCons']
}>()
</script>

<template>
  <section class="pros-cons" :id="info?.id">
    <div class="pros-cons__header">
      <h2>{{ info?.title }}</h2>
      <p>{{ info?.description }}</p>
    </div>

    <div class="pros-cons__container">
      <div class="pros-cons__column pros">
        <h3>Pros</h3>
        <ul>
          <li v-for="(pro, index) in info?.pros" :key="index">
            <span class="icon">✓</span>
            {{ pro.title }}
          </li>
        </ul>
      </div>

      <div class="pros-cons__column cons">
        <h3>Cons</h3>
        <ul>
          <li v-for="(con, index) in info?.cons" :key="index">
            <span class="icon">✗</span>
            {{ con.title }}
          </li>
        </ul>
      </div>
    </div>

    <div class="pros-cons__cta">
      <NuxtLink to="/products" class="button">
        {{ info?.cta }}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

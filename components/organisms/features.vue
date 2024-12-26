<script setup lang="ts">
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['features']
}>()

</script>

<template>
  <div class="features" :id="info?.id">
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

<style lang="scss" scoped>
.features {
  max-width: 1000px;
  margin: 80px auto 0;
  padding: 30px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  scroll-margin-top: 100px;

  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    background: var(--background-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .feature {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .feature-content {


      .feature-title {
        font-size: 1.8rem;
        color: #007BFF;
        margin-bottom: 10px;
        text-transform: capitalize;
        font-weight: 600;
      }

      .feature-description {
        font-size: 1.1rem;
        color: #555;
        line-height: 1.6;
      }
    }
  }
}
</style>
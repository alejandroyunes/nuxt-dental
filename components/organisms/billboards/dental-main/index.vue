<script setup lang="ts">
import './dental-main.scss'

defineProps<{
  titleH2: string;
  title: string;
  subtitle: string;
  buttonText: string;
}>();
</script>

<template>
  <section class="hero-dental-main">
    <div class="hero__content">
      <h2 class="hero__subtitle">{{ titleH2 }}</h2>
      <h1 class="hero__title">{{ title }}</h1>
      <p class="hero__description">{{ subtitle }}</p>
      <router-link to="/products" class="hero__button">
        {{ buttonText }}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div>
    <div class="hero__background"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  overflow: hidden;
  background: linear-gradient(135deg, #f6f9fc 0%, #ecf0f3 100%);

  &__content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    text-align: center;
  }

  &__subtitle {
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &__description {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(52, 152, 219, 0.3);
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(52, 152, 219, 0.1) 0%, rgba(255, 255, 255, 0) 50%);
    z-index: 1;
  }
}
</style>
<script setup lang="ts">
import RightArrowSvg from '~/components/icons/arrows/RightArrowSvg.vue';

const heroData = {
  titleH2: "Enhance your oral health with an",
  title: "Oral Dental Irrigator",
  subtitle: "We've gone the extra mile by diving deep into reviews, user comments, forum discussions, brand reputation sentiments, and more, all to empower you in making a well-informed decision for your Oral Dental Irrigator. Your dental care journey just got a whole lot easier! 😊",
  buttonText: "View Best Dental Irrigators",
  cta: "best-dental-irrigators"
};

</script>

<template>
  <section class="hero-main">
    <div class="content">
      <h2 class="subtitle">{{ heroData.titleH2 }}</h2>
      <h1 class="title">{{ heroData.title }}</h1>
      <p class="description">{{ heroData.subtitle }}</p>
      <NuxtLink :to="`/${heroData.cta}`" class="button">
        {{ heroData.buttonText }}
        <RightArrowSvg />
      </NuxtLink>
    </div>
    <div class="background"></div>
  </section>
</template>

<style scoped lang="scss">
.hero-main {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--background);

  @media (max-width: 1024px) {
    height: 100vh;
  }

  .content {
    margin: 50px auto 0;
    position: relative;
    z-index: 2;
    min-width: 860px;
    text-align: center;
    justify-content: t;

    @media (max-width: 1024px) {
      min-width: 0;
    }
  }

  .subtitle {
    color: var(--primary);
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    background: var(--background-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .description {
    font-size: 1.25rem;
    color: var(--heading);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
  }

  .button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary);
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

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(58, 166, 238, 0.1) 0%, rgba(255, 255, 255, 0) 50%);
    z-index: 1;
  }
}
</style>
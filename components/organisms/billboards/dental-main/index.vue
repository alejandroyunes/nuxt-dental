<script setup lang="ts">
import './dental-main.scss'

const heroData = {
  titleH2: "Enhance your oral health with an",
  title: "Oral Dental Irrigator",
  subtitle: "We've gone the extra mile by diving deep into reviews, user comments, forum discussions, brand reputation sentiments, and more, all to empower you in making a well-informed decision for your Oral Dental Irrigator. Your dental care journey just got a whole lot easier! 😊",
  buttonText: "View Irrigators"
};

</script>

<template>
  <section class="hero-main">
    <div class="content">
      <h2 class="subtitle">{{ heroData.titleH2 }}</h2>
      <h1 class="title">{{ heroData.title }}</h1>
      <p class="description">{{ heroData.subtitle }}</p>
      <router-link to="/products" class="button">
        {{ heroData.buttonText }}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div>
    <div class="background"></div>
  </section>
</template>
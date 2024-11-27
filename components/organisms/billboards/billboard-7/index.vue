<script setup lang="ts">
import { defineProps } from 'vue';
import SimpleButton from '~/components/atoms/buttons/default/index.vue';

defineProps({
  title: String,
  titleH2: String,
  subtitle: String,
  image: String,
  url: String,
  mobileImage: String,
  buttonText: String,
});
</script>

<template>
  <section
    class="container"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="billboard">
      <div class="title">
        <h2>{{ titleH2 }}</h2>
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <div class="button">
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
}

@media (max-width: 600px) {
  .container {
    background-image: url(var(--mobileImage));
  }
}

.billboard {
  max-width: 1024px;
  margin: 0 auto;
  padding: 140px 24px 0;
}

@media (max-width: 600px) {
  .billboard {
    padding-top: 24px;
  }
}

.title {
  width: 800px;
  border: 1px solid #333;
  background: rgba(18, 59, 92, 0.78);
  padding: 24px;
}

@media (max-width: 768px) {
  .title {
    width: 700px;
  }
}

@media (max-width: 600px) {
  .title {
    width: 100%;
  }
}

.title h1 {
  font-weight: 400;
  color: white;
  font-size: 1.5rem;
}

.title h2 {
  font-weight: bold;
  color: white;
  font-size: 3rem;
}

@media (max-width: 600px) {
  .title h2 {
    font-size: 1.8rem;
  }
}

.title p {
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 20px 0 36px;
  font-weight: 400;
}

@media (max-width: 600px) {
  .title p {
    font-size: 1.1rem;
  }
}

.title .button {
  display: flex;
}
</style>

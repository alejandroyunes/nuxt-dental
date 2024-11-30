<script setup lang="ts">
import './blog-text.scss'

const featuresData = {
  title: 'Why Choose WaterPik WF-02?',
  data: [
    {
      id: 1,
      title: 'Portability and On-the-Go Use',
      description: 'Designed for travel, small bathrooms, and shower use, providing flexibility and convenience in maintaining oral hygiene wherever you go.'
    },
    {
      id: 2,
      title: 'Waterproof Design',
      description: 'Waterproof construction enhances durability and allows for use in the shower, adding versatility to your oral care routine.'
    },
    {
      id: 3,
      title: 'Clinically Proven Plaque Removal',
      description: 'Clinically proven to remove up to 99.9% of plaque, offering an effective solution for superior oral cleanliness compared to traditional brushing and flossing.'
    },
    {
      id: 4,
      title: 'Mouthwash Compatibility',
      description: 'Users can add their favorite mouthwash for a personalized and fresher clean, enhancing the overall flossing experience.'
    },
    {
      id: 5,
      title: "Manufacturer's Warranty and Customer Support",
      description: "Backed by a 1-year manufacturer's warranty, ensuring product reliability and customer satisfaction."
    }]
}

const { title, data } = defineProps(['title', 'data'])

</script>

<template>
  <div class="blog-text">
    <h1 class="title">{{ featuresData.title }}</h1>

    <div v-for="feature in featuresData.data" :key="feature.id" class="feature">
      <div class="feature-content">
        <h2 class="feature-title">{{ feature.title }}</h2>
        <p class="feature-description">
          {{ feature.description }}
        </p>
      </div>
    </div>

  </div>
</template>
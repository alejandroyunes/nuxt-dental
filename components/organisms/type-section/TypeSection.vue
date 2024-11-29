<script setup>
import './type-section.scss'
const types = [
  {
    title: 'Countertop',
    description: 'Countertop dental irrigators are characterized by their stationary design and larger water tank capacity. Unlike portable models, they offer multiple pressure settings and interchangeable nozzles, allowing for more precise and customized cleaning based on individual needs. Their size and features make them ideal for intensive and personalized use at home, providing comprehensive and professional oral hygiene.',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701006421/typesOfIrrigators/hfp0f2vemqcdfkglm1nh.webp',
    link: '#countertop'
  },
  {
    title: 'Travel Size',
    description: 'Travel dental irrigators are the portable choice for oral hygiene on the go. Unlike countertop models, their compact and lightweight design makes them easy to carry. They often operate on batteries and have smaller water reservoirs, suitable for temporary use away from home. Although they may have fewer pressure settings, their convenience and adaptability make them essential for those who frequently travel.',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701006658/typesOfIrrigators/nfr2hz3tnyekctw3aznj.webp',
    link: '#travel'
  },
  {
    title: 'Wireless',
    description: 'Wireless dental irrigators offer the flexibility of cable-free cleaning. Unlike countertop models, they do not need to be connected to the electrical grid, making them more versatile and convenient to use. They operate on rechargeable batteries, and their design is often more compact and ergonomic, allowing for easy handling. Although they may have a smaller water reservoir, their freedom of movement makes them ideal for modern and efficient oral hygiene.',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701006421/typesOfIrrigators/qwilolfgrie0kk0pjepm.webp',
    link: '#wireless'
  }
]
</script>

<template>
  <section class="types-section" id="types">
    <div class="container">
      <div class="types-header">
        <h2>What Type of Dental Irrigator to Buy?</h2>
        <p>The best irrigator is the one that fits your needs. To meet different demands, manufacturers have created
          three main types of irrigators: countertop (powerful), cordless (more convenient to use), and travel
          (lightweight).</p>
      </div>

      <div class="types-grid">
        <div v-for="type in types" :key="type.title" class="type-card">
          <div class="type-content">
            <h3>{{ type.title }}</h3>
            <p>{{ type.description }}</p>
            <NuxtLink :to="type.link" class="learn-more">
              view more →
            </NuxtLink>
          </div>
          <div class="type-image">
            <img :src="type.image" :alt="type.title">
          </div>
        </div>
      </div>

      <div class="cta-container">
        <NuxtLink to="#products" class="cta-button">
          Buy The Best Irrigators
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

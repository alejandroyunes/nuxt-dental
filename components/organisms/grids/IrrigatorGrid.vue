<script setup lang="ts">
import './irrigator-grid.scss'
import SubtitleDescription from "~/components/atoms/subtitle-description/index.vue"
interface IrrigatorProduct {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: string;
  rating: number;
  reviewCount: number;
}

const irrigators: IrrigatorProduct[] = [
  {
    id: 1,
    name: "Waterpik Water Flosser Model WF-02, 5oz",
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp",
    alt: 'Waterpik Water Flosser Model WF-02, 5oz',
    price: "$69.99",
    rating: 4.5,
    reviewCount: 1250
  },
  {
    id: 2,
    name: "Nicwell Professional Water Flosser F5025, 200ml",
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700448959/Best/Nicwellf5025/ofjladptkdqgsbyeqcve.webp",
    alt: 'Nicwell Professional Water Flosser F5025, 200ml',
    price: "$89.99",
    rating: 4.3,
    reviewCount: 850
  },
  {
    id: 3,
    name: "Nicefeel Cordless Water Flosser FC1592BK, 300ml",
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700616746/Best/Nicefeel-FC1592-BK/rp9vi5urhelrbxwgjquw.webp",
    alt: 'Nicefeel Cordless Water Flosser FC1592BK, 300ml',
    price: "$79.99",
    rating: 4.4,
    reviewCount: 920
  },
  {
    id: 4,
    name: "InSmart Professional Cordless Water Dental Flosser FC256, 300ml",
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700628391/Best/Insmart-FC256/wepwdcnie4cnqdymep3c.webp",
    alt: 'InSmart Professional Cordless Water Dental Flosser FC256, 300ml',
    price: "$59.99",
    rating: 4.2,
    reviewCount: 680
  },
  {
    id: 5,
    name: "Coslus Water Dental Flosser Teeth Pick, F5020E 300ml",
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700541237/Best/Coslus300ml/bekj7waajyb9egnw08a8.webp",
    alt: 'Coslus Water Dental Flosser Teeth Pick, F5020E 300ml',
    price: "$49.99",
    rating: 4.1,
    reviewCount: 450
  },
  {
    id: 6,
    name: "Bitvae C2 Professional Water Dental Flosser, 260ml",
    image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700560366/Best/Bitvae/ditfkdygrm4qoohqzttw.webp",
    alt: 'Bitvae C2 Professional Water Dental Flosser, 260ml',
    price: "$99.99",
    rating: 4.6,
    reviewCount: 320
  }
];

const subtitleInfo = {
  title: "Smile Bright: Dive into Portable and Affordable Oral Irrigators",
  description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
  subtext: "Click on the following images to read our review of the top-rated portable oral Irrigators."
}

</script>

<template>
  <section class="irrigator-section">
    <SubtitleDescription :title="subtitleInfo.title" :description="subtitleInfo.description" :subtext="subtitleInfo.subtext" />
    
    <div class="irrigator-grid">
      <div v-for="irrigator in irrigators" :key="irrigator.id" class="irrigator-card">
        <div class="irrigator-card__image-wrapper">
          <img :src="irrigator.image" :alt="irrigator.name" class="irrigator-card__image">
        </div>
        <div class="irrigator-card__content">
          <h3>{{ irrigator.name }}</h3>
          <div class="irrigator-card__price">{{ irrigator.price }}</div>
          <div class="irrigator-card__rating">
            <div class="stars" :style="{ '--rating': irrigator.rating }"></div>
            <span>({{ irrigator.reviewCount }} reviews)</span>
          </div>
          <router-link :to="`/products/${irrigator.id}`" class="irrigator-card__button">
            Read Review
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


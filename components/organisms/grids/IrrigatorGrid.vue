<script setup lang="ts">
interface IrrigatorProduct {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  reviewCount: number;
}

const irrigators: IrrigatorProduct[] = [
  {
    id: 1,
    name: "Waterpik Ultra Water Flosser",
    image: "https://images.unsplash.com/photo-1612209992975-954022c21821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$69.99",
    rating: 4.5,
    reviewCount: 1250
  },
  {
    id: 2,
    name: "Philips Sonicare AirFloss",
    image: "https://images.unsplash.com/photo-1612209992975-954022c21822?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$89.99",
    rating: 4.3,
    reviewCount: 850
  },
  {
    id: 3,
    name: "Oral-B Water Flosser Advanced",
    image: "https://images.unsplash.com/photo-1612209992975-954022c21823?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$79.99",
    rating: 4.4,
    reviewCount: 920
  },
  {
    id: 4,
    name: "Panasonic Dental Water Flosser",
    image: "https://images.unsplash.com/photo-1612209992975-954022c21824?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$59.99",
    rating: 4.2,
    reviewCount: 680
  },
  {
    id: 5,
    name: "Zerhunt Cordless Water Flosser",
    image: "https://images.unsplash.com/photo-1612209992975-954022c21825?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$49.99",
    rating: 4.1,
    reviewCount: 450
  },
  {
    id: 6,
    name: "BURST Water Flosser Pro",
    image: "https://images.unsplash.com/photo-1612209992975-954022c21826?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$99.99",
    rating: 4.6,
    reviewCount: 320
  }
];
</script>

<template>
  <section class="irrigator-section">
    <div class="irrigator-section__header">
      <h2>Smile Bright: Dive into Portable and Affordable Oral Irrigators</h2>
      <p>Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.</p>
      <p class="irrigator-section__subtext">Click on the following images to read our review of the top-rated portable oral Irrigators.</p>
    </div>

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

<style lang="scss" scoped>
.irrigator-section {
  padding: 4rem 2rem;
  background-color: #f8fafc;

  &__header {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      color: var(--text-color);
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1.25rem;
      color: #64748b;
      line-height: 1.8;
      margin-bottom: 1rem;
    }
  }

  &__subtext {
    font-style: italic;
    color: #64748b;
  }
}

.irrigator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.irrigator-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &__image-wrapper {
    position: relative;
    padding-top: 75%;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover &__image {
    transform: scale(1.05);
  }

  &__content {
    padding: 1.5rem;

    h3 {
      font-size: 1.25rem;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
  }

  &__price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3498db;
    margin-bottom: 0.5rem;
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .stars {
      position: relative;
      display: inline-block;
      color: #ffd700;
      font-size: 0.8rem;
      
      &::before {
        content: "★★★★★";
      }
      
      &::after {
        content: "★★★★★";
        position: absolute;
        left: 0;
        top: 0;
        width: calc(var(--rating) * 20%);
        overflow: hidden;
        color: #ffd700;
      }
    }

    span {
      color: #64748b;
      font-size: 0.875rem;
    }
  }

  &__button {
    display: inline-block;
    width: 100%;
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease;

    &:hover {
      background: darken(#3498db, 10%);
    }
  }
}
</style>
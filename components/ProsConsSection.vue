<script setup lang="ts">
interface ProsCons {
  pros: string[];
  cons: string[];
}

const data: ProsCons = {
  pros: [
    'Portability: Being compact and portable, it\'s easy to carry the oral irrigator with you, making it convenient for travel or use on the go.',
    'Affordability: Affordable oral irrigators offer a cost-effective solution for individuals seeking improved oral hygiene without a significant financial investment.',
    'Versatility: Many portable models come with multiple settings and nozzle options, providing versatility in addressing different oral care needs and preferences.',
    'Ease of Use: Portable oral irrigators are generally designed for user-friendly operation, often featuring simple controls and easy setup.',
    'Contributes to the prevention of dental stains, maintaining a more attractive dental aesthetic.'
  ],
  cons: [
    'Reduced Capacity: Portable models may have smaller water reservoirs, requiring more frequent refilling compared to larger, stationary alternatives.',
    'Power Limitations: Some affordable options may have less powerful motors, impacting the force of the water stream and potentially affecting the efficiency of plaque removal.',
    'Build Quality: Inexpensive models may use materials that are less durable, potentially leading to a shorter lifespan and increased susceptibility to damage.',
    'Limited Features: While effective for basic oral care, budget-friendly oral irrigators may lack advanced features available in higher-end models, such as additional cleaning modes or smart technology.'
  ]
};
</script>

<template>
  <section class="pros-cons">
    <div class="pros-cons__header">
      <h2>Pros and Cons of Portable and Affordable Oral Irrigators</h2>
      <p>
        Explore the convenience of portable oral irrigators – a budget-friendly solution for enhanced oral hygiene wherever you go. 
        Learn about the advantages and limitations, empowering you to make an informed choice for your dental care routine.
      </p>
    </div>

    <div class="pros-cons__container">
      <div class="pros-cons__column pros">
        <h3>Pros</h3>
        <ul>
          <li v-for="(pro, index) in data.pros" :key="index">
            <span class="icon">✓</span>
            {{ pro }}
          </li>
        </ul>
      </div>

      <div class="pros-cons__column cons">
        <h3>Cons</h3>
        <ul>
          <li v-for="(con, index) in data.cons" :key="index">
            <span class="icon">✗</span>
            {{ con }}
          </li>
        </ul>
      </div>
    </div>

    <div class="pros-cons__cta">
      <router-link to="/products" class="button">
        Find the Best Irrigator for You
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pros-cons {
  padding: 4rem 2rem;
  background: white;

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
    }
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }

  &__column {
    background: #f8fafc;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      text-align: center;
      color: var(--text-color);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.25rem;
        line-height: 1.6;
        color: #4a5568;

        .icon {
          flex-shrink: 0;
          font-size: 1.2rem;
          margin-top: 0.2rem;
        }
      }
    }

    &.pros .icon {
      color: #10b981;
    }

    &.cons .icon {
      color: #ef4444;
    }
  }

  &__cta {
    text-align: center;
    margin-top: 3rem;

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

        svg {
          transform: translateX(4px);
        }
      }

      svg {
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>
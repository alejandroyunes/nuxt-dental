
  <script setup>
  import './info-grid.scss'
  const products = [
    {
      name: 'Waterpik Cordless Advanced, WP-580, 7oz',
      image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700995936/Best/SingleBests/skhiw9t8lpaq1ccghqon.webp',
      characteristics: [
        'Removable Water Reservoir 7oz',
        '4 x 2.8 x 11.6 in, 13 oz',
        '4 tips, 3 pressure settings (45-75 PSI)',
        '2-year limited manufacturer\'s warranty',
        'Satisfaction: 9/10',
        'Different color options',
        '55k reviews on Amazon'
      ],
      amazonLink: '#'
    },
    {
      name: 'Waterpik Aquarius Water Flosser, WP-660, 22oz',
      image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700999294/Best/SingleBests/zliqkbhgjuxjnn0cg9oj.webp',
      characteristics: [
        '90 Seconds of Water Capacity',
        '10 Pressure Settings, 2 pressure settings',
        '3.8 x 4.7 x 10.3 in, 1.46 lbs',
        '3-year limited manufacturer\'s warranty',
        'Satisfaction: 9.5/10',
        'Different color options',
        '129k reviews on Amazon'
      ],
      amazonLink: '#'
    },
    {
      name: 'Nicefeel Water Flosser, Cordless, FC5090, 300ml',
      image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700999294/Best/SingleBests/szgwkq7fkaoqkdexrkzn.webp',
      characteristics: [
        '300ml water tank and PX7 Dual Waterproof',
        '4 Adjustable Modes & 4 Jet Tips, Type-C Rechargeable',
        '2.3 x 2.9 x 10 in, 14.07 oz',
        '18 months limited manufacturer\'s warranty',
        'Satisfaction: 8/10',
        'Different color options',
        '20k reviews on Amazon'
      ],
      amazonLink: '#'
    }
  ]
</script>
  
  
<template>
  <section class="info-section" id="info">
    <div class="container">
      <div class="info-content">
        <h2>Brushing Alone Falls Short</h2>
        <p>
          The Dental Irrigator removes plaque that lodges deep in the interdental spaces and below the gums.
          Using a toothbrush or dental floss alone is not sufficient to achieve the best oral hygiene.
          That's why we recommend that you acquire a good Oral Irrigator, and while these high-quality products
          may be a little bit more pricy, they undoubtedly offer superior performance and effectiveness.
        </p>
      </div>

      <div class="products-grid">
        <div class="product-card" v-for="product in products" :key="product.name">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>

          <div class="characteristics">
            <h4>Characteristics</h4>
            <ul>
              <li v-for="(char, index) in product.characteristics" :key="index">
                {{ char }}
              </li>
            </ul>
          </div>

          <a :href="product.amazonLink" class="buy-button" target="_blank" rel="noopener noreferrer">
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
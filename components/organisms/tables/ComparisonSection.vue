<script setup>
import './comparison-section.scss'
const models = [
  {
    name: 'Waterpik WF-02',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp',
    prime: true,
    dimensions: '3.6 x 2.5 x 11.75 in, 11.68 oz',
    tips: '2',
    capacity: '5oz reservoir for 30 seconds of flossing time',
    highlight: 'Economical, Portable, Customizable.',
    problem: 'Battery replacement, Limited water capacity.',
    price: 'Best buy',
    satisfaction: '9/10',
    link: '#'
  },
  {
    name: 'Nicwell F5025',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700448959/Best/Nicwellf5025/ofjladptkdqgsbyeqcve.webp',
    prime: true,
    dimensions: '8.03 x 4.02 x 2.73 in, 14 oz',
    tips: '5',
    capacity: '200 ml',
    highlight: 'Cleaning Orthodontic Gums, Prevent Bad Breath',
    problem: 'Charging',
    price: 'Great Price',
    satisfaction: '9/10',
    link: '#'
  },
  {
    name: 'Nicefeel FC1592-BK5',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700616746/Best/Nicefeel-FC1592-BK/rp9vi5urhelrbxwgjquw.webp',
    prime: true,
    dimensions: '0.3 x 0.31 x 0.87 in, 13 oz',
    tips: '4',
    capacity: '300 ml',
    highlight: 'Compact Design, Long Battery Life',
    problem: 'Durability',
    price: 'Great Price',
    satisfaction: '8/10',
    link: '#'
  },
  {
    name: 'Coslus F5020E',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700541237/Best/Coslus300ml/bekj7waajyb9egnw08a8.webp',
    prime: true,
    dimensions: '1.97 x 2.74 x 12.2 in, 15.52 oz',
    tips: '5',
    capacity: '300ml',
    highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
    problem: 'Limited water capacity',
    price: 'Excellent price',
    satisfaction: '9/10',
    link: '#'
  }
]
</script>

<template>
  <section class="comparison-section" id="comparison">
    <div class="container">
      <h2>Compare the Waterpik WF-02 with other irrigators</h2>
      <p class="section-intro">In this table, you can see all the analyzed models, their features, notable advantages,
        user ratings, and the results of our analyses in 2024.</p>

      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Models</th>
              <th v-for="model in models" :key="model.name">{{ model.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td v-for="model in models" :key="model.name">
                <img :src="model.image" :alt="model.name">
              </td>
            </tr>
            <tr>
              <td>Prime</td>
              <td v-for="model in models" :key="model.name">
                <span v-if="model.prime" class="prime-badge">✓</span>
              </td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td v-for="model in models" :key="model.name">{{ model.dimensions }}</td>
            </tr>
            <tr>
              <td>Multifunctional Tips</td>
              <td v-for="model in models" :key="model.name">{{ model.tips }}</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td v-for="model in models" :key="model.name">{{ model.capacity }}</td>
            </tr>
            <tr>
              <td>Highlight</td>
              <td v-for="model in models" :key="model.name">{{ model.highlight }}</td>
            </tr>
            <tr>
              <td>Problem</td>
              <td v-for="model in models" :key="model.name">{{ model.problem }}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td v-for="model in models" :key="model.name">
                <span class="price-tag">{{ model.price }}</span>
              </td>
            </tr>
            <tr>
              <td>Satisfaction</td>
              <td v-for="model in models" :key="model.name">
                <div class="satisfaction">
                  <span class="rating">{{ model.satisfaction }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>View More</td>
              <td v-for="model in models" :key="model.name">
                <a :href="model.link" class="view-price-btn">View Price</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

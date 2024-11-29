<template>
    <section class="comparison-section" id="comparison">
      <div class="container">
        <h2>Compare the Waterpik WF-02 with other irrigators</h2>
        <p class="section-intro">In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.</p>
        
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
  
  <script setup>
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
  
  <style lang="scss" scoped>
  .comparison-section {
    padding: 5rem 0;
    background: white;
  
    h2 {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1rem;
      text-align: center;
    }
  
    .section-intro {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 3rem;
      color: var(--text-color);
      font-size: 1.1rem;
    }
  
    .comparison-table-wrapper {
      overflow-x: auto;
      margin: 2rem 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
    }
  
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      
      th, td {
        padding: 1rem;
        text-align: center;
        border: 1px solid #e5e7eb;
      }
  
      th {
        background: var(--primary);
        color: white;
        font-weight: 600;
        white-space: nowrap;
      }
  
      td:first-child {
        background: #f8fafc;
        font-weight: 600;
        text-align: left;
      }
  
      img {
        max-width: 150px;
        height: auto;
        margin: 0 auto;
      }
  
      .prime-badge {
        color: var(--primary);
        font-size: 1.2rem;
        font-weight: bold;
      }
  
      .price-tag {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: #e5e7eb;
        border-radius: 2rem;
        font-weight: 600;
        color: var(--primary);
      }
  
      .satisfaction {
        .rating {
          font-weight: 600;
          color: var(--primary);
        }
      }
  
      .view-price-btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--primary);
        color: white;
        text-decoration: none;
        border-radius: 0.5rem;
        transition: background-color 0.3s ease;
  
        &:hover {
          background: var(--secondary-color);
        }
      }
    }
  
    @media (max-width: 768px) {
      .comparison-table {
        font-size: 0.9rem;
        
        th, td {
          padding: 0.75rem;
        }
        
        img {
          max-width: 100px;
        }
      }
    }
  }
  </style>
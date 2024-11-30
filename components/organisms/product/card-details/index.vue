<script setup>
import './card-details.scss'
</script>

<template>
  <div class="card-details">
    <div class="card-image">
      <img
        src="https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp"
        alt="Waterpik Water Flosser Model WF-02">
    </div>

    <div class="card-info">
      <h1>Waterpik Water Flosser Model WF-02, 5oz</h1>
      <p>
        Clinically proven to remove up to 99.9% of plaque, the Cordless Express combines water pressure
        with pulsating action for an exceptional clean that traditional methods can't match.
      </p>

      <div class="price">$ 149.99</div>
      <div class="rating">
        <div class="stars" :style="{ '--rating': 5 }"></div>
        <span>(78232 reviews)</span>
      </div>

      <div class="characteristics">
        <h4>Characteristics</h4>
        <ul>
          <li>Portable and waterproof design.</li>
          <li>2 pressure settings (45-75 PSI) for customizable cleaning.</li>
          <li>1200 water pulses per minute.</li>
          <li>Easy-to-fill, removable 5-ounce reservoir for 30 seconds of flossing time.</li>
          <li>2 JT-450E water flossing tips.</li>
          <li>Compact dimension.</li>
        </ul>
      </div>

      <a href="#" class="buy-button">Buy on Amazon</a>
    </div>
  </div>
</template>
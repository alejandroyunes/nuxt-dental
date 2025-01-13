<script setup lang="ts">
import { ref } from 'vue'
import { ads } from './data'
import ProductScrollSkeleton from './product-scroll-skeleton.vue'

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)

</script>

<template>
  <section v-if="!isLoading" class="product-scroll">
    <ul>
      <li v-for="ad in ads" :key="ad.id">
        <div class="container">

          <div class="li-item">
            <RouterLink :to="ad.url">
              <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
            </RouterLink>
            <div class="item">
              <div class="title">
                <h3>{{ ad.title }}</h3>
              </div>

              <p>{{ ad.description }}</p>
              <p>{{ ad.price }}</p>
              <p>{{ ad.location }}</p>
              <p>{{ ad.date }}</p>
            </div>
          </div>

        </div>
      </li>
    </ul>
  </section>

  <ProductScrollSkeleton v-if="isLoading" />

</template>

<style scoped lang="scss">
.product-scroll {
  margin-top: 20px;

  ul {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    list-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      display: block;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 10px;
    }

    li {
      .container {
        scroll-snap-align: start;
      }
      .li-item {
        margin-left: 5px;
        margin-right: 16px;
        position: relative;
        list-style-type: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: var(--background);

        img {
          width: 280px;
          height: auto;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
        .item {
          padding: 16px;
          h3 {
            font-size: 1.25rem;
            color: var(--color-heading);
            margin-bottom: 8px;
            margin-right: 8px;
          }
          p {
            font-size: 1rem;
            color: var(--color-text);
            margin-bottom: 8px;
          }
          .title {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>

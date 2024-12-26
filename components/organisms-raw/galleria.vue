<script setup lang="ts">
import { ref } from 'vue';
const images = [
  {
    itemImageSrc: "https://res.cloudinary.com/dcpdkock3/image/upload/v1735175699/irrigators/waterpik/waterpik-w-02_lzvmu1.webp",
    thumbnailImageSrc: "https://res.cloudinary.com/dcpdkock3/image/upload/v1735176115/irrigators/waterpik/waterpik-w-02-xs_py0ekq.webp",
    alt: "Image 1",
  },
  {
    itemImageSrc: "https://picsum.photos/id/237/200/300",
    thumbnailImageSrc: "https://picsum.photos/id/237/200/300",
    alt: "Image 2",
  },
  {
    itemImageSrc: "https://placehold.co/600x400",
    thumbnailImageSrc: "https://placehold.co/600x400",
    alt: "Image 3",
  },
]
const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
}

// const { images, maxWidth } = defineProps<{
//   images: {
//     itemImageSrc: string;
//     thumbnailImageSrc: string;
//     alt: string;
//   }[];
//   maxWidth: string;
// }>()

</script>

<template>
  <div class="galleria">
    <div class="galleria-main">
      <NuxtImg 
        :src="images[activeIndex].itemImageSrc"
        :alt="images[activeIndex].alt"
        format="webp"
        loading="lazy"
        sizes="xs:100vw"
        class="image" />
    </div>
    <div class="galleria-thumbnails">
      <div v-for="(image, index) in images" :key="index" class="galleria-thumbnail"
        :class="{ active: index === activeIndex }" @click="setActive(index)">
        <img :src="image.thumbnailImageSrc" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.galleria {
  display: flex;
  flex-direction: column;
  align-items: center;

  .galleria-main {
    img {
      width: 100%;
      border-radius: 0.5rem;
      transition: transform 0.3s ease;
      max-width: 700px;
      height: auto;

      @media (max-width: 1280px) {
        max-width: 400px;
      }
    }

    img:hover {
      transform: scale(1.05);
    }
  }

  .galleria-thumbnails {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;

    .galleria-thumbnail {
      border: 2px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      transition: border-color 0.3s ease;

      img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 4px;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.1);
      }

      &.active {
        border-color: #007bff;
      }
    }
  }
}
</style>

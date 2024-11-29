<script setup lang="ts">
import { computed } from 'vue';
import BlogCard from '~/components/organisms/grids/BlogCard.vue';
 interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

const props = defineProps<{
  posts: BlogPost[];
}>();

const featuredPosts = computed(() => props.posts.slice(0, 3));
</script>

<template>
  <section class="featured-posts">
    <h2 class="featured-posts__title">Latest Articles</h2>
    <div class="featured-posts__grid">
      <BlogCard v-for="post in featuredPosts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.featured-posts {
  padding: 4rem 2rem;
  background: white;

  &__title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 3rem;
    font-weight: 700;
  }

  &__grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }
}
</style>
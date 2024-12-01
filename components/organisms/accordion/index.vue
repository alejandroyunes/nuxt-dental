<script setup lang="ts">
import './accordion.scss'
import { ref } from 'vue'
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['tableOfContent']
}>()

const isDropdownVisible = ref(false)

const showDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const hideDropdown = () => {
  isDropdownVisible.value = false
}

</script>

<template>
  <div class="accordion-container">
    <div class="wrapper" @click="showDropdown" @mouseleave="hideDropdown">
      <button class="trigger">
        <span class="text">Table of Content</span>
        <span class="caret" :class="{ 'caret-active': isDropdownVisible }"></span>
      </button>
      <div v-if="isDropdownVisible" class="menu">
        <div v-for="item in info">
          <NuxtLink :to="item.id" class="item">
            {{ item.content }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
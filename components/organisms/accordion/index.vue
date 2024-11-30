<script setup>
import './accordion.scss';
import { ref } from 'vue';

const isDropdownVisible = ref(false);

const showDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const hideDropdown = () => {
  isDropdownVisible.value = false;
};

</script>

<template>
  <div class="accordion-container">
    <div class="wrapper" @click="showDropdown" @mouseleave="hideDropdown">
      <button class="trigger">
        <span class="text">Table of Content</span>
        <span class="caret" :class="{ 'caret-active': isDropdownVisible }"></span>
      </button>
      <div v-if="isDropdownVisible" class="menu">
        <a href="#" class="item">Explore Option 1</a>
        <a href="#" class="item">Discover Option 2</a>
        <a href="#" class="item">Select Option 3</a>
      </div>
    </div>
  </div>
</template>
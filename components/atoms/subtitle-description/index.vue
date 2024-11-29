<script lang="ts" setup>
import './subtitle-description.scss'

type Props = {
  title: string
  description?: string
  marginTop?: boolean
  subtext?: string
}

const { title, description, marginTop, subtext } = defineProps<Props>()

</script>

<template>
  <div class="subtitle-description">
    <h2 class="subtitle" :class="{ 'extra-top-space': marginTop }">{{ title }}</h2>
    <p class="description">{{ description }}</p>
    <p class="subtext">{{ subtext }}</p>
  </div>
</template>

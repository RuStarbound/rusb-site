<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'RuStarbound',
  meta: [
    {
      name: 'description',
      content: 'RuSB, сеть российских игровых серверов по тематике Starbound.',
    },
  ],
})
</script>

<template>
  <router-view />
</template>

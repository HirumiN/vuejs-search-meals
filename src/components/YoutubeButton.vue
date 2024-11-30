<template>
  <a :href="href" target="_blank"
    class="px-2 py-1 text-white transition-colors bg-red-600 border border-red-600 rounded-xl hover:bg-red-800">
    <slot></slot>
  </a>
</template>

<script setup>

const props = defineProps({
  href: String
})
</script>
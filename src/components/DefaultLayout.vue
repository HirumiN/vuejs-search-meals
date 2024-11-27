<template>
  <div class="h-full bg-gray-100">
    <Navbar/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup>
  import Navbar from "./Navbar.vue"
</script>

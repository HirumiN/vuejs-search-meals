<template>
  <div class="flex p-8 flex-col">
    <input type="text" class="rounded border-2 border-gray-300 w-full" placeholder="Search for Meals">
    <div class="flex gap-3 justify-center mt-3">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters.split('')" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>

</template>

<script setup>
import { computed, onMounted } from 'vue';
// import store from '../store';
import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


onMounted(async() => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)
  })
</script>
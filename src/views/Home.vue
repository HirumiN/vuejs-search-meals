<template>
  <div class="flex flex-col p-8">
    
    <div class="flex justify-center gap-3 mt-3">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters.split('')" :key="letter">
        {{ letter }}
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ingredients = ref([])


onMounted(async () => {
  const response = await axiosClient.get('list.php?i=list')
  console.log(response.data)
  ingredients.value = response.data
})
</script>
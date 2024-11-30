<template>
  <div class="px-16 py-6 bg-white rounded-lg shadow-lg">
    <pre class="hidden">{{ meal }}</pre>
    <h1 class="text-4xl font-bold text-orange-600">{{ meal.strMeal }}</h1>
    <img 
      :src="meal.strMealThumb" 
      :alt="meal.strMeal" 
      class="w-auto mx-auto mt-4 rounded-lg max-h-96"
    >
    <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
      <div class="p-2 bg-orange-100 rounded-lg">
        <strong>Category:</strong> <span class="text-orange-600">{{ meal.strCategory }}</span>
      </div>
      <div class="p-2 bg-orange-100 rounded-lg">
        <strong>Area:</strong> <span class="text-orange-600">{{ meal.strArea }}</span>
      </div>
      <div class="p-2 bg-orange-100 rounded-lg">
        <strong>Tags:</strong> <span class="text-orange-600">{{ meal.strTags }}</span>
      </div>
    </div>
    <div class="mt-4">
      <h2 class="text-xl font-semibold text-orange-600">Instructions</h2>
      <p class="text-gray-700">{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
      <div>
        <h2 class="mb-2 text-2xl font-semibold text-orange-600">Ingredients</h2>
        <ul class="list-disc list-inside">
          <template v-for="(e, i) of new Array(20)" :key="i">
            <li v-if="meal[`strIngredient${i + 1}`]" class="text-gray-800">
              {{ i + 1 }}. {{ meal[`strIngredient${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="mb-3 text-2xl font-semibold text-orange-600">Measures</h2>
        <ul class="list-disc list-inside">
          <template v-for="(e, i) of new Array(20)" :key="i">
            <li v-if="meal[`strMeasure${i + 1}`]" class="text-gray-800">
              {{ i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      <a 
        :href="meal.strSource" 
        target="_blank" 
        class="px-4 py-1 ml-4 text-white transition-colors bg-purple-600 border border-purple-600 rounded-lg hover:bg-purple-800"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosCLient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue'

const meal = ref({})
const route = useRoute();

onMounted(() => {
  axiosCLient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      // debugger;
      meal.value = data.meals[0] || {};
    })
})
</script>
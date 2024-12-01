<template>
  <div class="overflow-hidden transition-transform transform rounded-lg shadow-lg hover:scale-105">
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb || 'path/to/default/image.jpg'"
        :alt="`Image of ${meal.strMeal}`"
        class="object-cover w-full h-64"
      />
    </router-link>
    <div class="h-full">
      <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
        <h3 class="px-3 py-2 text-lg font-semibold text-orange-800 bg-orange-200 hover:underline">
          {{ meal.strMeal }}
        </h3>
      </router-link>

      <p class="px-3 py-2 text-lg text-orange-600 bg-orange-50">
        {{ truncatedInstructions }}
      </p>
      <div class="flex items-center justify-between px-3 py-2 border-t-2 border-t-orange-100 bg-orange-50">
        <YoutubeButton v-if="meal.strYoutube" :href="meal.strYoutube">Youtube</YoutubeButton>
        <router-link
          to="/"
          class="text-orange-500 transition-colors hover:text-orange-700"
        >
          View
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  }
});

// Computed property to truncate instructions to a fixed number of characters
const truncatedInstructions = computed(() => {
  if (!meal.strInstructions) return '';
  const maxChars = 100; // Set a maximum character limit
  return meal.strInstructions.length > maxChars 
    ? meal.strInstructions.slice(0, maxChars) + '...' 
    : meal.strInstructions;
});
</script>
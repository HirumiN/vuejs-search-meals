<template>
  <div class="grid grid-cols-1 gap-5 px-8 md:grid-cols-3">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="mealsCount === 0" class="flex justify-center p-8 text-gray-600">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from './MealItem.vue';
import { computed } from 'vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
});

// Computed property to safely get the length of meals
const mealsCount = computed(() => {
  return meals ? meals.length : 0;
});
</script>
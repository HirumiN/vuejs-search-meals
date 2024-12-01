<template>
  <div class="flex justify-center gap-3 pb-8 mt-3">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="flex items-center justify-center w-2 h-2 transition-all hover:text-orange-500 hover:scale-150"
    >
      {{ letter }}
    </router-link>
  </div>
  <div v-if="store.state.loading">Loading...</div>
  <Meals :meals="meals" v-else />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter || []); // Ensure it defaults to an array
const route = useRoute();

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
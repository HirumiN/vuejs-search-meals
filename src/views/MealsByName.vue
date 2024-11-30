<template>
  <div class="p-8">
    <input type="text" v-model="keyword" class="w-full border-2 border-gray-300 rounded" placeholder="Search for Meals"
      @change="searchMeals">
  </div>
  <div class="grid grid-cols-1 px-8 pb-5 gap-7 md:grid-cols-3">
    <div 
      v-for="meal in meals" 
      :key="meal.idMeal" 
      class="overflow-hidden transition-transform transform rounded-lg shadow-lg hover:scale-105"
    >
      <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}">
        <img 
        :src="meal.strMealThumb" 
        :alt="meal.strMeal" 
        class="object-cover w-full h-64"
      >
      </router-link>
      <div>
        <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}">
          <h3 class="px-3 py-2 text-lg font-semibold text-orange-800 bg-orange-200 hover:underline">{{ meal.strMeal }}</h3>
        </router-link>
        
        <p class="px-3 py-2 text-lg text-orange-600 bg-orange-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit perspiciatis quasi quis saepe cumque ipsa pariatur, doloribus aspernatur.</p>
      <div class="flex items-center justify-between px-3 py-2 border-t-2 border-t-orange-100 bg-orange-50">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <router-link 
          to="/" 
          class="text-orange-500 transition-colors hover:text-orange-700"
        >
          View
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import store from '../store';
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(()=>{
  keyword.value = route.params.name
  if(keyword.value){
    searchMeals()
  }
})

</script>
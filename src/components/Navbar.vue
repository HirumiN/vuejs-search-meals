<template>
  <div class="bg-orange-600">
    <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link :to="{name : 'home'}" class="text-xl font-bold text-gray-100 md:text-2xl hover:text-orange-400">Logo
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li>
          <router-link :to="{name : 'byName'}" class="text-gray-100 cursor-pointer hover:text-orange-400">Meals By Name</router-link>
        </li>
        <li>
          <router-link :to="{name : 'byLetter'}" class="text-gray-100 cursor-pointer hover:text-orange-400">Meals By Letter</router-link>
        </li>
        <li>
          <router-link :to="{name : 'ingredients'}" class="text-gray-100 cursor-pointer hover:text-orange-400">Meals By ingredients</router-link>
        </li>
      </ul>

    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// Mendeklarasikan ref showMenu
const showMenu = ref(false);

// Fungsi untuk toggle showMenu
const toggleNav = () => {
  showMenu.value = !showMenu.value;
};
</script>
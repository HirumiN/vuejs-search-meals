import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetail from "../views/MealDetail.vue";
import Ingredients from "../views/Ingredients.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients,
        },
        {
          path: "/by-ingredient/:ingredient",
          name: "byIngredient",
          component: MealsByIngredients,
        },
        {
          path: "/meal/:id",
          name: "mealDetail",
          component: MealDetail
        },
        {
          path: "/:catchAll(.*)",
          name: "notFound",
          component: () => import("../views/NotFound.vue"),
        }
      ]
    },
    {
      path: "/guest",
      component: GuestLayout,
    },
    
  
  ],
});

export default router;

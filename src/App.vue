<script setup>
import Lessons from "./components/Lessons.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <div id="app" class="">
    <header class="flex justify-between mb-4 bg-gray-300 p-3 items-center">
      <h1 class="font-bold text-2xl">Lesson Depot</h1>
      <button v-on:click="switchPage" :disabled="isShoppingCartDisabled">
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          size="lg"
          v-bind:inverse="isShoppingCartDisabled"
        />
      </button>
    </header>
    <Lessons
      v-if="this.showLessonPage"
      :cart="this.cart"
      :lessons="this.lessons"
    ></Lessons>
    <ShoppingCart
      v-else
      :cart="this.cart"
      :lessons="this.lessons"
    ></ShoppingCart>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lessons: [
        {
          id: 1,
          subject: "Maths",
          price: 85,
          location: "Manchester",
          spaces: 6,
          icon: "calculator",
        },
        {
          id: 2,
          subject: "English",
          price: 80,
          location: "Oxford",
          spaces: 7,
          icon: "calculator",
        },
        {
          id: 3,
          subject: "Music",
          price: 95,
          location: "London",
          spaces: 10,
          icon: "book",
        },
        {
          id: 4,
          subject: "English",
          price: 75,
          location: "Bristol",
          spaces: 5,
          icon: "book",
        },
        {
          id: 5,
          subject: "Maths",
          price: 70,
          location: "Bristol",
          spaces: 7,
          icon: "music",
        },
        {
          id: 6,
          subject: "Maths",
          price: 100,
          location: "London",
          spaces: 5,
          icon: "calculator",
        },
        {
          id: 7,
          subject: "Maths",
          price: 90,
          location: "Oxford",
          spaces: 8,
          icon: "calculator",
        },
        {
          id: 8,
          subject: "English",
          price: 100,
          location: "London",
          spaces: 6,
          icon: "book",
        },
        {
          id: 9,
          subject: "English",
          price: 80,
          location: "York",
          spaces: 9,
          icon: "book",
        },
        {
          id: 10,
          subject: "Music",
          price: 60,
          location: "Bristol",
          spaces: 7,
          icon: "music",
        },
      ],
      cart: [],
      showLessonPage: true,
    };
  },
  computed: {
    isShoppingCartDisabled: function () {
      return this.cart.length < 1 && this.showLessonPage;
    },
  },
  methods: {
    switchPage: function () {
      console.log("switching page");
      this.showLessonPage = !this.showLessonPage;
    },
  },
};
</script>

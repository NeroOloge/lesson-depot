<script setup>
import Lessons from "./components/Lessons.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <div id="app" class="">
    <header class="flex justify-between mb-4 bg-gray-300 p-3 items-center">
      <h1 class="font-bold text-2xl">Lesson Depot</h1>
      <button v-on:click="switchPage" :disabled="isShoppingCartDisabled">
        {{ cart.length }}
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          size="lg"
          v-bind:inverse="isShoppingCartDisabled"
        />
      </button>
    </header>
    <div class="flex w-[100%] px-3">
      <input
        class="flex-1 border rounded-md focus:border-black outline-none px-3 py-3"
        type="text"
        placeholder="Search"
        v-on:keyup="(e) => search(e.target.value)"
      />
    </div>
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
      lessons: [],
      cart: [],
      showLessonPage: true,
    };
  },
  created: function () {
    console.log("getting lessons");
    fetch("http://localhost:3000/lessons").then((res) => {
      res.json().then((data) => {
        this.lessons = data;
      });
    });
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
    search: function (searchTerm) {
      console.log(searchTerm);
      fetch(`http://localhost:3000/search?searchTerm=${searchTerm}`).then(
        (res) => {
          res.json().then((data) => {
            this.lessons = data;
          });
        }
      );
    },
  },
};
</script>

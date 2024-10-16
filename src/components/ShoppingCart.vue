<script setup>
import Lesson from "./Lesson.vue";
import Checkout from "./Checkout.vue";

defineProps({
  cart: { type: Array, required: true },
  lessons: { type: Array, required: true },
});
</script>

<template>
  <div class="p-3">
    <div class="mb-8">
      <h1 class="text-3xl text-center mb-4">Shopping Cart</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-2 justify-items-center">
        <div v-for="lesson in cart" class="">
          <Lesson
            :lesson="lesson"
            :isCart="true"
            :removeFromCart="removeFromCart"
          />
        </div>
      </div>
    </div>
    <Checkout></Checkout>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    removeFromCart: function (id) {
      const cartItemIndex = this.cart.findIndex((c) => c.id === id);
      const lessonIndex = this.lessons.findIndex((l) => l.id === id);
      const lesson = this.lessons.find((l) => l.id === id);
      this.cart.splice(cartItemIndex, 1);
      lesson.spaces++;
      this.lessons[lessonIndex] = lesson;
    },
  },
};
</script>

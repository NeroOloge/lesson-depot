<script setup>
import CartItem from "./CartItem.vue";
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
        <div v-for="cartItem in cart" class="">
          <CartItem
            :lessonId="cartItem.lessonId"
            :lessons="lessons"
            :cartItem="cartItem"
            :removeFromCart="removeFromCart"
          />
        </div>
      </div>
    </div>
    <Checkout :cart="cart" :lessons="lessons"></Checkout>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    removeFromCart: function (cartItemId) {
      const cartItemIndex = this.cart.findIndex((c) => c.id === cartItemId);
      const cartItem = this.cart[cartItemIndex];
      const lessonIndex = this.lessons.findIndex(
        (l) => l._id === cartItem.lessonId
      );
      const lesson = this.lessons[lessonIndex];
      cartItem.spaces--;
      this.cart[cartItemIndex] = cartItem;

      lesson.spaces++;
      this.lessons[lessonIndex] = lesson;
      if (cartItem.spaces == 0) {
        this.cart.splice(cartItemIndex, 1);
      }
    },
  },
};
</script>

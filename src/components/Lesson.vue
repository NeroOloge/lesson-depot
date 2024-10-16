<script setup>
defineProps({
  lesson: { type: Object, required: true },
  isCart: { type: Boolean, required: false },
  addToCart: {
    type: Function,
    required: false,
  },
  removeFromCart: {
    type: Function,
    required: false,
  },
});
</script>

<template>
  <div class="border border-gray-600 rounded-lg w-64 p-3">
    <div class="flex justify-between mb-2 items-center">
      <div>
        <p>Subject: {{ lesson.subject }}</p>
        <p>Location: {{ lesson.location }}</p>
        <p>Price: £{{ lesson.price }}</p>
        <p>Spaces: {{ lesson.spaces }}</p>
      </div>
      <div><font-awesome-icon :icon="['fas', lesson.icon]" size="5x" /></div>
    </div>
    <div class="text-center">
      <button
        v-if="isCart"
        class="px-2 bg-blue-500 border text-white w-[70%] disabled:bg-gray-400"
        v-on:click="() => removeFromCart(lesson.id)"
      >
        Remove
      </button>
      <button
        v-else
        :disabled="lesson.spaces < 1"
        class="px-2 bg-blue-500 border text-white w-[70%] disabled:bg-gray-400"
        v-on:click="() => addToCart(lesson.id)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {},
};
</script>

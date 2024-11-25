<script setup>
defineProps({
  lessonId: { type: String, required: true },
  lessons: { type: Array, required: true },
  cartItem: { type: Object, required: true },
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
        <p>Subject: {{ this.lesson.subject }}</p>
        <p>Location: {{ this.lesson.location }}</p>
        <p>Price: £{{ this.lesson.price }}</p>
        <p>Spaces: {{ cartItem.spaces }}</p>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', this.lesson.icon]" size="5x" />
      </div>
    </div>
    <div class="text-center">
      <button
        class="px-2 bg-blue-500 border text-white w-[70%] disabled:bg-gray-400"
        v-on:click="() => removeFromCart(cartItem.id)"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lesson: {},
      spaces: 0,
    };
  },
  created: function () {
    this.lesson = this.lessons.find((l) => l._id === this.lessonId);
  },
  methods: {},
};
</script>

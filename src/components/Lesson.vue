<script setup>
defineProps({
  subject: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  spaces: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="border border-gray-600 rounded-lg w-64 p-3">
    <div class="flex justify-between mb-2 items-center">
      <div>
        <p>Subject: {{ subject }}</p>
        <p>Location: {{ location }}</p>
        <p>Price: £{{ price }}</p>
        <p>Spaces: {{ spaces }}</p>
      </div>
      <div><font-awesome-icon :icon="['fas', icon]" size="5x" /></div>
    </div>
    <div class="text-center">
      <button class="px-2 bg-blue-500 border text-white w-[70%]">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello",
    };
  },
};
</script>

<script setup>
defineProps({
  lesson: { type: Object, required: true },
  addToCart: {
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
      <div class="w-[30%]">
        <img :src="this.image" :alt="lesson.image" />
      </div>
    </div>
    <div class="text-center">
      <button
        :disabled="isAddToCartDisabled"
        class="px-2 bg-blue-500 border text-white w-[70%] disabled:bg-gray-400"
        v-on:click="() => addToCart(lesson._id)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      image: ``,
    };
  },
  created: function () {
    fetch(`http://localhost:3000/images/${this.lesson.image}`).then((res) => {
      res
        .blob()
        .then((blob) => {
          const imageUrl = URL.createObjectURL(blob);
          this.image = imageUrl;
        })
        .catch((err) => console.error(err));
    });
  },
  computed: {
    isAddToCartDisabled: function () {
      return this.lesson.spaces < 1;
    },
  },
  methods: {},
};
</script>

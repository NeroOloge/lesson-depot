<script setup>
defineProps({
  cart: { type: Array, required: true },
  lessons: { type: Array, required: true },
});
</script>

<template>
  <div>
    <h1 class="text-3xl text-center mb-4">Checkout</h1>
    <div
      class="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0 items-center"
    >
      <label class="md:space-x-2">
        <span class="text-lg">Name: </span>
        <input
          class="border-b-2 border-b-black outline-none"
          type="text"
          id="name"
          name="name"
          v-model="name"
        />
      </label>
      <label class="md:space-x-2 space-y-2 md:space-y-0">
        <span class="text-lg">Phone: </span
        ><input
          class="border-b-2 border-b-black outline-none"
          type="number"
          id="phone"
          name="phone"
          v-model="phone"
        />
      </label>
      <button
        v-on:click="checkout"
        :disabled="name.length === 0 || phone == 0"
        class="text-lg px-2 bg-blue-600 border text-white disabled:bg-gray-400"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "",
      phone: 0,
    };
  },
  computed: {
    isCheckoutDisabled: function () {
      return this.name.length === 0 || this.phone == 0;
    },
  },
  methods: {
    checkout: function () {
      const phoneRegex = /^\d*$/;
      const nameRegex = /^[a-zA-Z]*$/;
      if (!phoneRegex.test(Number(this.phone))) {
        return alert("Phone has to be digits");
      }
      if (!nameRegex.test(this.name)) {
        return alert("Name has to be letters only");
      }
      const lessonIDs = this.cart.map((cartItem) => cartItem.lessonId);
      const totalSpaces = this.cart.reduce((prev, acc) => prev + acc.spaces, 0);
      const orderBody = {
        name: this.name,
        phone: this.phone,
        lessonIDs,
        totalSpaces,
      };
      fetch("http://localhost:3000/orders", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(orderBody),
      })
        .then((res) => {
          res.json().then((data) => {
            console.log(data);
            alert("Your lesson order has been submitted");
          });
        })
        .catch((err) => alert(err.message));
      for (const lessonId of lessonIDs) {
        const lesson = this.lessons.find((l) => l._id === lessonId);
        fetch(`http://localhost:3000/lessons/${lessonId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify({ spaces: lesson.spaces }),
        });
      }
    },
  },
};
</script>

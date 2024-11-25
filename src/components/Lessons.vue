<script setup>
import Lesson from "./Lesson.vue";

defineProps({
  lessons: { type: Array, required: true },
  cart: { type: Array, required: true },
});
</script>

<template>
  <div class="flex justify-between p-3">
    <div>
      <p>Sort by</p>
      <div class="flex flex-col mb-5">
        <label
          ><input
            v-on:click="onSelect"
            type="radio"
            value="subject"
            name="sorting-attr"
            :checked="this.sort.attr === 'subject'"
          />
          Subject</label
        >
        <label
          ><input
            v-on:click="onSelect"
            type="radio"
            value="price"
            name="sorting-attr"
            :checked="this.sort.attr === 'price'"
          />
          Price</label
        >
        <label
          ><input
            v-on:click="onSelect"
            type="radio"
            value="location"
            name="sorting-attr"
            :checked="this.sort.attr === 'location'"
          />
          Location</label
        >
        <label
          ><input
            v-on:click="onSelect"
            type="radio"
            value="availability"
            name="sorting-attr"
            :checked="this.sort.attr === 'availability'"
          />
          Availability</label
        >
      </div>

      <div class="flex flex-col">
        <label
          ><input
            v-on:click="onSelect"
            type="radio"
            value="ascending"
            name="sorting-order"
            :checked="this.sort.order === 'ascending'"
          />
          Ascending</label
        >
        <label
          ><input
            v-on:click="onSelect"
            type="radio"
            value="descending"
            name="sorting-order"
            :checked="this.sort.order === 'descending'"
          />
          Descending</label
        >
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-2">
      <div v-for="lesson in lessons">
        <Lesson :lesson="lesson" :addToCart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      sort: {
        attr: "",
        order: "",
      },
    };
  },
  methods: {
    sortPriceAsc: (a, b) => a.price - b.price,
    sortPriceDesc: (a, b) => b.price - a.price,
    sortSubjectAsc: (a, b) => a.subject.localeCompare(b.subject),
    sortSubjectDesc: (a, b) => -1 * a.subject.localeCompare(b.subject),
    sortAvailabilityAsc: (a, b) => a.spaces - b.spaces,
    sortAvailabilityDesc: (a, b) => b.spaces - a.spaces,
    sortLocationAsc: (a, b) => a.location.localeCompare(b.location),
    sortLocationDesc: (a, b) => -1 * a.location.localeCompare(b.location),
    onSelect: function (e) {
      console.log("selected", e.target.value);
      console.log(e.target.name);
      this.sort.attr =
        e.target.name === "sorting-attr"
          ? e.target.value
          : this.sort.attr || "price";
      this.sort.order =
        e.target.name === "sorting-order"
          ? e.target.value
          : this.sort.order || "ascending";
      console.log(this.sort.attr);

      let compare;

      switch (this.sort.attr) {
        case "price":
          if (this.sort.order === "ascending") compare = this.sortPriceAsc;
          else if (this.sort.order === "descending")
            compare = this.sortPriceDesc;
          break;
        case "subject":
          if (this.sort.order === "ascending") compare = this.sortSubjectAsc;
          else if (this.sort.order === "descending")
            compare = this.sortSubjectDesc;
          break;
        case "availability":
          if (this.sort.order === "ascending")
            compare = this.sortAvailabilityAsc;
          else if (this.sort.order === "descending")
            compare = this.sortAvailabilityDesc;
          break;
        case "location":
          if (this.sort.order === "ascending") compare = this.sortLocationAsc;
          else if (this.sort.order === "descending")
            compare = this.sortLocationDesc;
          break;
      }

      this.lessons = this.lessons.sort(compare);
    },
    addToCart: function (lessonId) {
      const lessonIndex = this.lessons.findIndex((l) => l._id === lessonId);
      const lesson = this.lessons[lessonIndex];
      lesson.spaces--;
      this.lessons[lessonIndex] = lesson;
      const cartItemId = this.cart.findIndex((cl) => cl.lessonId === lessonId);
      if (cartItemId < 0) {
        const cartItem = {
          spaces: 1,
          id: this.cart.length + 1,
          lessonId,
        };
        this.cart.push(cartItem);
      } else {
        const cartItem = this.cart[cartItemId];
        cartItem.spaces++;
        this.cart[cartItemId] = cartItem;
      }
    },
  },
};
</script>

<script setup>
import Lesson from "./components/Lesson.vue";
</script>

<template>
  <div id="app" class="p-3">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-2">
      <div v-for="lesson in lessons">
        <Lesson
          :subject="lesson.subject"
          :price="lesson.price"
          :location="lesson.location"
          :spaces="lesson.spaces"
          :icon="lesson.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lessons: [
        {
          subject: "Maths",
          price: 100,
          location: "London",
          spaces: 5,
          icon: "calculator",
        },
        {
          subject: "Maths",
          price: 90,
          location: "Oxford",
          spaces: 5,
          icon: "calculator",
        },
        {
          subject: "English",
          price: 100,
          location: "London",
          spaces: 5,
          icon: "book",
        },
        {
          subject: "English",
          price: 80,
          location: "York",
          spaces: 5,
          icon: "book",
        },
        {
          subject: "Music",
          price: 60,
          location: "Bristol",
          spaces: 5,
          icon: "music",
        },
      ],
    };
  },
};
</script>

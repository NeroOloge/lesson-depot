<script setup>
import Lesson from "./components/Lesson.vue";
</script>

<template>
  <div id="app">
    <header>
      <Lesson
        subject="Maths"
        :price="100"
        location="London"
        :spaces="5"
        icon="calculator"
      />
    </header>

    <main></main>
  </div>
</template>

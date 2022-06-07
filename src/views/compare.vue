<template>
  <Hero title="Compare" :image="image" />

  <div class="right-section-content">
    <input type="url"/>
  </div>
  <div class="left-section-content">
    <input type="url"/>
  </div>
  <Button text="Compare" @click="comparePlaylist" />

</template>

<script setup>
import Button from "@/components/button";
import Hero from "@/components/hero.vue";

const image = require("@/assets/images/hero-4.png");
</script>

<style scoped>

input {
  display :flexbox;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-top: 10px;
  height: 35px;
  width: 50%;
}
</style>
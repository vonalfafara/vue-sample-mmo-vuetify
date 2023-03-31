<template>
  <div v-if="game">
    <div class="hero">
      <img :src="game.screenshots[0].image" alt="">
    </div>
    <v-container>
      <h1>{{ game.title }}</h1>
      <h6>{{ game.short_description }}</h6>
      <div class="body" v-html="game.description"></div>
      <v-carousel>
        <v-carousel-item v-for="({image}, index) in game.screenshots" :key="index" :src="image" cover></v-carousel-item>
      </v-carousel>
      <p>Genre: {{ game.genre }}</p>
      <p>Platform: {{ game.platform }}</p>
      <p>Release Date: {{ game.release_date }}</p>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import http from "../utils/http";

const route = useRoute()
const game = ref()

async function getGame() {
  const res = await http.get(`/game?id=${route.params.id}`)
  game.value = res.data
}

getGame()
</script>

<style scoped>
  .hero img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  .body {
    margin: 2rem 0;
  }

  .v-carousel {
    margin-bottom: 2rem;
  }
</style>
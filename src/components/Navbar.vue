<template>
  <v-app-bar :elevation="2" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>MMO Games</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn @click="goTo('/')">Home</v-btn>
    <v-btn @click="goTo('/news')">News</v-btn>
    <v-btn @click="goTo('/games')">Games</v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goTo(url) {
  router.push(url)
}
</script>

<style lang="scss" scoped>

</style>
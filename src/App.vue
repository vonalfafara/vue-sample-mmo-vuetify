<template>
  <div>
    <v-layout>
      <Navbar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<style scoped>
</style>
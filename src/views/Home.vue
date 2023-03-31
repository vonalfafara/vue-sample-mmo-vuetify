<template>
  <div class="hero">
    <img src="../assets/hero.jpg" alt="">
    <div class="hero-text">
      <h1>The last MMO Website you will ever need</h1>
      <h3>The last MMO Website you will ever need</h3>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
  .hero img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .hero-text {
    background-color: rgba(0, 0, 0, .6);
    border-radius: 1rem;
    padding: 2rem;
    color: white;
  }
</style>
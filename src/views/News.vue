<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(article, index) in news"
        :key="index"
        :title="article.title"
      >
        <v-expansion-panel-text>
          <div v-html="article.article_content"></div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import http from '../utils/http';

const news = ref([])

async function getNews() {
  const res = await http.get("/latestnews")
  news.value = res.data
}

getNews()
</script>

<style scoped>

</style>
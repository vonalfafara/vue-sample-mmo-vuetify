<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel
        title="Filter Options"
      >
        <v-expansion-panel-text>
          <v-row>
            <v-col>
              <v-radio-group>
                <template v-slot:label>
                  Categories
                </template>
                <v-radio v-for="(category, index) in categories" :key="index" :label="category" :value="category" @change="setCategory(category)"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col>
              <v-radio-group>
                <template v-slot:label>
                  Platforms
                </template>
                <v-radio v-for="(platform, index) in platforms" :key="index" :label="platform" :value="platform" @change="setPlatform(platform)"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col>
              <v-radio-group>
                <template v-slot:label>
                  Sort By
                </template>
                <v-radio v-for="(sortBy, index) in sort" :key="index" :label="sortBy" :value="sortBy" @change="setSort(sortBy)"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row>
      <v-col v-for="(game, index) in games" :key="index">
        <v-card class="card-custom">
          <v-img
            class="game-img"
            :src="game.thumbnail"
            gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.7)"
            cover
          >
            <v-card-title class="text-white">{{ game.title }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4">
            {{ game.genre }}
          </v-card-subtitle>
          <v-card-text>
            <div>{{ game.short_description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue" @click="viewGame(game.id)">
              View Game
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import http from '../utils/http';
import { useRouter } from "vue-router"

const router = useRouter()
const categories = ref([
  "Shooter",
  "MMORPG",
  "battle-royale",
  "Strategy",
  "Fighting",
  "Card",
  "action-rpg",
  "Racing",
  "MOBA",
  "Sports",
  "MMOFPS",
  "MMO",
  "Social",
  "Fantasy"
])
const platforms = ref(['pc', 'browser'])
const sort = ref(['release-date', 'alphabetical'])

const params = ref({
  category: null,
  platform: null,
  'sort-by': null,
})

const games = ref([])

async function getGames() {
  const uriParams = Object.keys(params.value).filter(key => {
    return params.value[key]
  }).map(key => `${key}=${params.value[key]}`)

  const res = await http.get(`/games?${uriParams.join("&")}`)
  games.value = res.data
}

function setCategory(category) {
  params.value.category = category
  getGames()
}

function setPlatform(platform) {
  params.value.platform = platform
  getGames()
}

function setSort(sortBy) {
  params.value['sort-by'] = sortBy
  getGames()
}

function viewGame(id) {
  router.push(`/games/${id}`)
}

getGames()
</script>

<style scoped>

.card-custom {
  max-width: 200px;
  height: 100%;
}
.game-img {
  width: 100%;
  height: 250px;
}

.v-card {
  display: flex;
  flex-direction: column;
}

</style>
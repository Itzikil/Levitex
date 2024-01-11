<template>
  <main class="home">
    <h1>LeviTex</h1>
    <h3 class="mb-20">Textile products in the best price</h3>
    <router-link to="/textile"> Start exploring! </router-link>
    <div class="category-container">
      <router-link v-for="category in categories" :to="`/explore/${category.name}`">
        <img :src="category.imgUrl" alt="">
      </router-link>
    </div>
  </main>
</template>

<script>
import { textileService } from '../services/textile-service';

export default {
  data() {
    return {
      categories: textileService.loadCategories(),
    }
  },

  methods: {
  }
}
</script>

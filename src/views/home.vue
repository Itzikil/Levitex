<template>
  <main class="home">
    <h1>LeviTex</h1>
    <h3 class="mb-20">Textile products in the best price</h3>
    <router-link to="/textile"> Start exploring! </router-link>
    <div class="category-container">
      <img v-for="category in categories" :src="category.imgUrl" alt="">
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

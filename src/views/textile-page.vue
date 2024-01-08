<template>
    <section class="textile-page">
        <textileFilter />
        <div class="img-container">
            <div v-if="!products.length" v-for="category in categories" class="card-container">
                <div class="card" @click="loadtextiles(category.name)">
                    <img class="front-card" :src=category.imgUrl alt="category">
                    <p>{{ category.name }}</p>
                    <!-- <div class="back-card" @click="loadtextiles(category.name)">
                        <p>{{ category.name }}</p>
                    </div> -->
                </div>
            </div>
            <textileList v-else :products="products" />
        </div>
    </section>
</template>

<script>
import { textileService } from '../services/textile-service';
import textileList from '../components/textile-list.vue'
import textileFilter from '../components/textile-filter.vue';

export default {
    data() {
        return {
            categories: textileService.loadCategories(),
            products: []
        }
    },
    methods: {
        loadtextiles(category) {
            this.products = textileService.loadtextiles(category)
        }
    },
    components: {
        textileList,
        textileFilter
    }
}
</script>
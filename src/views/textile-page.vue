<template>
    <section class="textile-page">
        <textileFilter />
        <div class="img-container">
            <div v-if="!products.length" v-for="category in categories" class="card-container">
                <router-link class="card" :to="`/explore/${category.name}`" @click="loadtextiles(category.name)">
                    <img class="front-card" :src=category.imgUrl alt="category">
                    <p>{{ category.name }}</p>
                </router-link>
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
    created() {
        const id = this.$route.params.id
        this.products = id ? textileService.loadtextiles(id) : []
    },
    methods: {
        loadtextiles(category) {
            this.products = textileService.loadtextiles(category)
        }
    },
    watch: {
        $route(to, from) {
            const id = this.$route.params.id;
            this.products = id ? textileService.loadtextiles(id) : []
        },
    },
    components: {
        textileList,
        textileFilter
    }
}
</script>
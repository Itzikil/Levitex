<template>
    <section>
        <div>
            <router-link to="/">Home</router-link> - 
            <router-link to="/explore">Categories</router-link>
        </div>
        <h2 class="mb-20">Showing {{ products.length }} {{products[0].category}}</h2>
        <ul class="textile-list">
            <textilePreview v-for="product in products" :product="product" />
        </ul>
    </section>
</template>

<script>
import textilePreview from './textile-preview.vue';
export default {
    props: {
        products: Array
    },
    created() {
    },
    mounted() {
    },
    components: {
        textilePreview
    }
}
</script>
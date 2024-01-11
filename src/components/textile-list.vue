<template>
    <section>
        <router-link to="/explore">Back to categories</router-link>
        <h2 class="mb-20">Showing {{ products.length }} results</h2>
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
<template>
    <section>
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
        console.log(this.products);
    },
    components: {
        textilePreview
    }
}
</script>
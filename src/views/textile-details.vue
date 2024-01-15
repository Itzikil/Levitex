<template>
    <section v-if="textile" class="textile-details">
        <div class="router-links">
            <p>
                <router-link :to="`/`">Home</router-link> -
                <router-link :to="`/explore`">Categories</router-link> -
                <router-link :to="`/explore/${textile.category}`">{{ textile.category }}</router-link>
            </p>
        </div>
        <h1>{{ textile.name }}</h1>
        <div class="item-container flex">
            <img :src="textile.imgUrl" alt="">
            <p>{{ textile.desc }}</p>
        </div>
        <h3>${{ textile.price }}</h3>
        <button @click="addToCart(textile._id)">Add to cart</button>
    </section>
    <h1 v-else>Sorry can't find the product</h1>
</template>

<script>
import { textileService } from '../services/textile-service';

export default {
    data() {
        return {
            textile: null
        }
    },
    created() {
        const id = this.$route.params.id
        const textile = textileService.getTextileById(id)
        this.textile = textile
    },
    methods: {
        addToCart(productId) {
            this.$store.dispatch({ type: 'addToCart', productId })
        }
    },
    components: {
    }
}
</script>
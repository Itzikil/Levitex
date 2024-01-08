<template>
    <div class="textile-preview-container">
        <router-link :to='`/textile/${product._id}`' >
            <li class="textile-preview">
                <img class="textile-img" :src="product.imgUrl" alt="">
                <div class="preview-info">
                    <h3>{{ product.name }}</h3>
                    <p class="product-desc">{{ product.desc }}</p>
                    <p class="price"><span>$</span>{{ product.price }}</p>
                </div>
            </li>
        </router-link>
        <button @click="addToCart(product._id)">
            <img class="cart" src="../assets/imgs/cart.png" alt="">
        </button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart(productId) {
            this.$store.dispatch({ type: 'addToCart', productId })
        }
    }
}
</script>
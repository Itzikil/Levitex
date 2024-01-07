<template>
    <router-link :to='`/textile/${product._id}`' class="textile-preview-container">
        <li class="textile-preview">
            <img class="textile-img" :src="product.imgUrl" alt="">
            <div class="preview-info">
                <h3>{{ product.name }}</h3>
                <p class="product-desc">{{ product.desc }}</p>
                <p><span>$</span>{{ product.price }}</p>
            </div>
            <button @click="addToCart(product._id)">
                <img class="cart" src="../assets/imgs/cart.png" alt="">
            </button>
        </li>
    </router-link>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods:{
        addToCart(productId){
             this.$store.dispatch({ type: 'addToCart', productId })
        }
    }
}
</script>
<template>
    <div class="cart-page">
        <h1>Cart</h1>
        <ul class="cart-list">
            <li v-for="item in cartItems">
                <div>
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.price }} $</p>
                </div>
                <img :src="item.imgUrl" alt="">
            </li>
        </ul>
        <div>
            <h3>Total</h3>
            <p>{{ sumItems }} $</p>
        </div>
        <button>Pay</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            // cartItems: this.cart()
        }
    },
    created() {
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart
        },
        sumItems() {
            var items = this.cartItems
            return items.reduce((sum, item) => sum + item.price, 0)
        },
    },
    methods: {
    }
}
</script>
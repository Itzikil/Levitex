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
        <div v-if="afterBuy" class="flex align-center column">
            <h3>Thank you for buying</h3>
            <p>You can check your order <router-link :to="`/user/${loggedinUser._id}`">here</router-link></p>
        </div>
        <div v-else>
            <h3>Total</h3>
            <p>{{ sumItems }} $</p>
        </div>
        <button @click="addOrder">Pay</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            afterBuy: false
        }
    },
    created() {
        // console.log(this.cartItems());
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart
        },
        sumItems() {
            var items = this.cartItems
            return items.reduce((sum, item) => sum + item.price, 0)
        },
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
    },
    methods: {
        addOrder() {
            if(!this.sumItems) return console.log('need to add items');
            this.$store.dispatch({ type: 'addOrder' })
            this.afterBuy = true
        }
    }
}
</script>
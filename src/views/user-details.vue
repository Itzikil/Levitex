<template>
    <div class="user-details">
        <h1>Hello {{ getUser.username }}</h1>
        <router-link to="/cart">To your cart</router-link>
        <div>
            <p>Your details:</p>
            <p>username - {{ getUser.username }}</p>
            <p>password - {{ getUser.password }}</p>
            <p>id - {{ getUser._id }}</p>
        </div>
        <div class="orders-container">
            <h3>{{ orders.length }} Orders</h3>
            <div v-for="order in orders" class="orders">
                <p> Order id - {{ order._id }} </p>
                <p>{{ order.items.length }} items</p>
                <p>{{ sumPrice(order) }} $</p>
                <div v-if="order._id === orderOpend" v-for="item in order.items">
                    <img :src="item.imgUrl" alt="">
                    <p>{{ item.name }}</p>
                    <p>{{ item.price }}$</p>
                </div>
                <button @click="openOrder(order._id)">{{ orderOpend ? 'close' : 'open' }} order</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            orders: '',
            orderOpend: ''
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadOrders' })
        this.orders = this.$store.getters.orders
    },
    computed: {
        getUser() {
            return this.$store.getters.loggedinUser
        },
    },
    methods: {
        sumPrice(order) {
            return order.items.reduce((sum, item) => sum + item.price, 0)
        },
        openOrder(orderId) {
            this.orderOpend = this.orderOpend ? '' : orderId
        }
    }
}
</script>
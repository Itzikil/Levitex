<template>
    <div class="user-details">
        <h1>Hello <span class="bold">{{ getUser.username }}</span></h1>
        <!-- <router-link to="/cart">To your cart</router-link> -->
        <div class="user-info">
            <p>Your details:</p>
            <p>Username - {{ getUser.username }}</p>
            <p>password - {{ getUser.password }}</p>
            <p>Id - {{ getUser._id }}</p>
        </div>
        <div class="orders-container">
            <h3>{{ orders.length }} Orders</h3>
            <div v-for="order in orders" class="orders" @click="openOrder(order._id)">
                <div class="order-line">
                    <p>{{ dateFormat(order.createdAt) }} </p>
                    <p>{{ order.items.length }} items</p>
                    <p>{{ sumPrice(order) }} $</p>
                </div>
                <div v-if="order._id === orderOpend" v-for="item in order.items" class="order-details">
                    <img :src="item.imgUrl" alt="">
                    <p>{{ item.name }}</p>
                    <p>{{ item.price }}$</p>
                </div>
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
        },
        dateFormat(date) {
            const originalDate = new Date(date);
            return `${originalDate.getDate()}.${originalDate.getMonth() + 1}.${originalDate.getFullYear().toString().slice(-2)}`;
        }
    }
}
</script>
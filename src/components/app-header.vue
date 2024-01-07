<template>
    <header class="flex space align-center">
        <RouterLink to="/">
            <h2>Levitex</h2>
        </RouterLink>
        <div class="flex">
            <img src="../assets/imgs/mobile-nav.png" alt="" class="show-on-mobile" @click="openNav = !openNav">
        </div>
        <nav :class="openNav ? 'open-nav' : ''" @click="openNav ? !openNav : ''">
            <div class="show-on-mobile nav-logo">
                <p @click="openNav = !openNav">X</p>
                <!-- <RouterLink to="/">
                    <h2>Levitex</h2>
                </RouterLink> -->
            </div>
            <!-- <RouterLink to="/"><h2>Levitex</h2></RouterLink> -->
            <RouterLink to="/textile-page">Bedding</RouterLink>
            <RouterLink to="/cart">Cart ({{ cartItems }})</RouterLink>
            <RouterLink v-if="!loggedinUser" to="/login" @click="logout()">Log in</RouterLink>
            <RouterLink v-if="!loggedinUser" to="/signup">Signup</RouterLink>
            <!-- <button v-else class="anchor">{{ loggedinUser.username }}</button> -->
            <!-- <div v-if="userInfo" > -->
            <!-- </div> -->
            <RouterLink to="/about">About</RouterLink>
            <RouterLink v-if="loggedinUser" to="/" @click="logout()">Log out</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            openNav: false,
            userInfo: false
        }
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        cartItems() {
            return this.$store.getters.cart.length
        }
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logout', })
        },
    }
}
</script>
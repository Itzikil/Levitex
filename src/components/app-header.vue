<template>
    <header class="flex space align-center">
        <RouterLink to="/">
            <h2>Levitex</h2>
        </RouterLink>
        <div class="show-on-mobile mobile-nav">
            <RouterLink to="/cart">Cart ({{ cartItems }})</RouterLink>
            <img src="../assets/imgs/mobile-nav.png" alt=""  @click="openNav = !openNav">
        </div>
        <nav :class="openNav ? 'open-nav' : ''" @click="handleNavClick">
            <div class="show-on-mobile nav-logo">
                <p @click="openNav = !openNav">X</p>
            </div>
            <RouterLink to="/textile">Bedding</RouterLink>
            <RouterLink to="/cart">Cart ({{ cartItems }})</RouterLink>
            <RouterLink v-if="!loggedinUser" to="/login" @click="logout()">Log in</RouterLink>
            <RouterLink v-if="!loggedinUser" to="/signup">Signup</RouterLink>
            <RouterLink :to="`/user/${loggedinUser._id}`" v-else class="anchor">{{ loggedinUser.username }}</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink v-if="loggedinUser" to="/" @click="logout()">Log out</RouterLink>
        </nav>
        <div v-if="openNav" class="overlay" @click="openNav = !openNav"></div>
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
            console.log(this.$store.getters.loggedinUser);
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
        handleNavClick(event) {
            if (event.target.tagName === 'A') this.openNav = false;
        },
    }
}
</script>
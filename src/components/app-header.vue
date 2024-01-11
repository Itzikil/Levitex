<template>
    <header class="flex space align-center">
        <RouterLink to="/" class="hide-on-mobile">
            <h2>Levitex</h2>
        </RouterLink>
        <div class="show-on-mobile mobile-nav">
            <img src="../assets/imgs/mobile-nav.svg" alt="" @click="openNav = !openNav">
            <RouterLink to="/">
                <h2>Levitex</h2>
            </RouterLink>
            <RouterLink to="/cart" class="cart-container">
                <img src="../assets/imgs/shopping-cart.svg" alt="">
                <p>{{ cartItems }}</p>
            </RouterLink>
        </div>
        <nav :class="openNav ? 'open-nav' : ''" @click="handleNavClick">
            <div class="show-on-mobile nav-logo">
                <RouterLink to="/">
                    <h2>Levitex</h2>
                </RouterLink>
                <img src="../assets/imgs/x.svg" alt="" @click="openNav = !openNav">
            </div>
            <RouterLink to="/explore" class="icon-container">
                <img src="../assets/imgs/bed.svg" alt="">
                <p>Bedding</p>
            </RouterLink>
            <RouterLink to="/cart" class="icon-container">
                <img src="../assets/imgs/shopping-cart.svg" alt="">
                <p>Cart ({{ cartItems }})</p>
            </RouterLink>
            <RouterLink v-if="!loggedinUser" to="/login" @click="logout()" class="icon-container">
                <img src="../assets/imgs/log-in.svg" alt="">
                <p>Log in</p>
            </RouterLink>
            <RouterLink v-if="!loggedinUser" to="/signup" class="icon-container">
                <img src="../assets/imgs/sign-up.svg" alt="">
                <p>Signup</p>
            </RouterLink>
            <RouterLink v-else :to="`/user/${loggedinUser._id}`" class="icon-container anchor">
                <img src="../assets/imgs/user.svg" alt="">
                <p>{{ loggedinUser.username }}</p>
            </RouterLink>
            <RouterLink to="/about" class="icon-container">
                <img src="../assets/imgs/about.svg" alt="">
                <p>About</p>
            </RouterLink>
            <RouterLink v-if="loggedinUser" to="/" @click="logout()" class="icon-container">
                <img src="../assets/imgs/log-out.svg" alt="">
                <p>Log out</p>
            </RouterLink>
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
            if (event.target.tagName !== 'NAV') this.openNav = false;
        },
    }
}
</script>
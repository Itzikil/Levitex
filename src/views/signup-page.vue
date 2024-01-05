<template>
    <section class="signup-container" @submit.prevent="onSignup">
        <form class="signup">
            <h1>{{ signupPage ? 'Signup' : 'Login' }}</h1>
            <div class="input-container">
                <img src="../assets/imgs/username.png" alt="">
                <input v-model="user.username" type="text" :class="user.username ? 'transform-input':''">
                <label>Username</label>
            </div>
            <div class="input-container">
                <img src="../assets/imgs/lock.png" alt="">
                <input v-model="user.password" type="text" :class="user.password ? 'transform-input':''">
                <label>Password</label>
            </div>
            <button>{{ signupPage ? 'Sign up' : 'Log in' }}</button>
            <router-link :to="signupPage ? '/login' : '/signup'">{{ signupPage ? 'Already habe an acount?' : 'Dont have an acount yet?' }}</router-link>
        </form>
    </section>
</template>
  
<script>

export default {

    data() {
        return {
            user: {}
        }
    },
    computed: {
        signupPage() {
            return this.$route.name === 'signup'
        }
    },
    methods: {
        onSignup() {
            var user
            if (this.signupPage) {
                const userInfo = this.user
                user = this.$store.dispatch({ type: 'signup', userInfo })
            } else {
                const userInfo = this.user
                user = this.$store.dispatch({ type: 'login', userInfo })
            }
            if (user) this.$router.push('/')
        },
    }
}
</script>
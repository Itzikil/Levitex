<template>
    <div class="about">
        <h1>Hello {{ getUser.username }}</h1>
        <router-link to="/cart">To your cart</router-link>
        <div>
            <p>Your details:</p>
            <p>username - {{ getUser.username }}</p>
            <p>password - {{ getUser.password }}</p>
            <p>id - {{ getUser._id }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        getUser() {
            return this.$store.getters.loggedinUser
        }
    }
}
</script>
<template>
  <!-- <img class="back-img"
    src="https://images.unsplash.com/photo-1606885118474-c8baf907e998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    alt=""> -->
  <appHeader />
  <RouterView />
  <appFooter class="footer" />
</template>

<script >
import { RouterView } from 'vue-router'
import appHeader from './components/app-header.vue';
import appFooter from './components/app-footer.vue';
export default {
  created() {
    this.$store.dispatch({ type: 'setLoggedinUser' })
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>

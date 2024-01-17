<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <toggleMode></toggleMode>
</template>

<script>
import toggleMode from '../components/toggle-mode.vue';
export default {
  components: {
    toggleMode,
  }
}
</script>
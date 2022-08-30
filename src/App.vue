<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import AuthenticationModal from '@/components/modal/AuthenticationModal.vue'
</script>

<style lang="scss">
  .wrapper {
    height: 893px;
    border: 2px solid #E9F2FF;;
  }
</style>

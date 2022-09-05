<template>
  <div class="wrapper">
    <router-view />
    <notifications />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import AuthenticationModal from '@/components/modal/AuthenticationModal.vue'
</script>

<style lang="scss">
  .wrapper {
    height: 893px;
    border: var(--base-border);
  }
</style>

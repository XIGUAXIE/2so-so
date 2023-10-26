<script lang="ts" setup>
import { bannerUrl } from '~/config'
</script>

<template>
  <router-link to="/" title="SOSO Engine">
    <img class="w-16" :src="bannerUrl" alt="NU11">
  </router-link>
</template>

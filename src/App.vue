<template>
  <!--
  <div class="flex flex-col min-h-screen font-Roboto">
    <SiteNavigation /> 
    <RouterView />
    <Footer />
  </div>

  -->
  <TestApp />
</template>
<script lang="ts" setup>
/* 

<SiteNavigation />
<Header />


*/
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import TestApp from './components/TestApp.vue'

</script>
<style >

</style>
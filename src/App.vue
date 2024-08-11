<template>
  <div class="flex flex-col min-h-screen font-Roboto">
    <SiteNavigation /> 
    

    <RouterView />
    <Footer />

  </div>
  
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

</script>
<style >

</style>
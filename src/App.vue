<template>
  <!--
  <div class="flex flex-col min-h-screen font-Roboto">
    <SiteNavigation /> 
    <RouterView />
    <Footer />
  </div>
<TestApp />
  -->
  <div class="flex flex-col min-h-screen font-Roboto">
    <Header :menu="menu" title="MJ Consultant" icon-file="assets/Logo_MJ_shadow_white.png" /> 
    <div class="flex flex-col min-h-screen font-Roboto">
      <RouterView />

    </div>
    <Footer />
  </div>
  
</template>
<script lang="ts" setup>
/* 
<Header_IOS :menu="menu" title="MJ Consultant" icon-file="assets/Logo_MJ_shadow_white.png" /> 
<SiteNavigation />
<Header />


*/
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

import { ref } from 'vue';
const menu = ref([
  {id: 'start', title: 'Start',selected: true},
  {id: 'info', title: 'Info'},
  {id: 'skills', title: 'Skills'},
  {id: 'kontakt', title: 'Kontakt'},
  
]);
</script>
<style >

</style>
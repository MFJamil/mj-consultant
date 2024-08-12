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
    <span class="text-white">Before--</span> 
    <Header_IOS :menu="menu" title="MJ Consultant" icon-file="assets/Logo_MJ_shadow_white.png" /> 
    <span class="text-white">After--</span> 
    <div class="flex flex-col min-h-screen font-Roboto my-60">
      <RouterView />

    </div>
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
import Header_IOS from './components/Header_IOS.vue'
import TestApp from './components/TestApp.vue'

import { ref } from 'vue';
const menu = ref([
  {id: 'mnu_Info', title: 'Info'},
  {id: 'mnu_Kontakt', title: 'Kontakt'},
  {id: 'mnu_skills', title: 'Skills'},
  {id: 'mnu_projects', title: 'Projects',selected: true},
]);
</script>
<style >

</style>
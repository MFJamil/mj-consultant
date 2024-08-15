<template>
<!--
          <div class="container flex justify-center items-center backdrop-saturate-200 backdrop-blur-2xl  text-white" 
              id="footerContainer">

-->
  <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative py-3">
    
    <div class="container text-white mainBody h-auto justify-center flex flex-row items-center my-2" >
      <!--  Sitemap   -->
      <div class="container text-white mainBody h-auto justify-center flex flex-col my-10" >
        <h2 class="mb-2 text-lg font-semibold text-white">Sitemap</h2>
        <ul class="max-w-md space-y-1  list-disc list-inside ">
            <li v-for="item in siteMapItems" :key="item.title" >{{ item.title }}
                
            </li>
        </ul>
      </div>
      <!--     -->
      <div class="container text-white mainBody h-auto justify-center flex flex-col my-10" >
        <h2 class="mb-2 text-lg font-semibold text-white">Sitemap</h2>
        <ul class="max-w-md space-y-1  list-disc list-inside ">
            <li v-for="item in siteMapItems" :key="item.title" >{{ item.title }}
                
            </li>
        </ul>
      </div>
      <!--     -->
      <div class="container text-white mainBody h-auto justify-center flex flex-col my-10" >
        <h2 class="mb-2 text-lg font-semibold text-white">Sitemap</h2>
        <ul class="max-w-md space-y-1  list-disc list-inside ">
            <li v-for="item in siteMapItems" :key="item.title" >{{ item.title }}
                
            </li>
        </ul>
      </div>

    </div>
    <div class="container text-white mainBody h-auto" >
      <Divider class="w-full"/>
      <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative">
        <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">
          <div><img src="../assets/Logo_MJ_shadow_white.png" class="h-12" alt="MJ Logo" /></div>
          <div>&copy; MJ Consultant<span>, August 2024</span></div>
        </div>
        <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">
          <img src="../assets/xing-logo-2447.svg" style="width: 20px;" />
          <img src="../assets/linkedin-logo-2430.svg" style="width: 20px;" />
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
 import Divider from './Divider.vue';
 const siteMapItems = [
  {
    title: 'Start',
    link: '#'
  },
  {
    title: 'Info',
    link: 'info'
  },
  {
    title: 'Skills',
    link: 'skills'
  },
  {
    title: 'Kontakt',
    link: 'kontakt'
  },

 ];
</script>

<style scoped>
#footerContainer{
  height: 90px;
}
.rounded{
  border-top: 8px solid #bbb;
border-radius: 5px;

}
</style>
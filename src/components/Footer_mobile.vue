<template>
  <!--
            <div class="container flex justify-center items-center backdrop-saturate-200 backdrop-blur-2xl  text-white" 
                id="footerContainer">
  
  -->
    <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative py-3">
      
      <div class="container text-white h-auto flex-col justify-center items-start my-2" >
        <Accordion title="Contact" :rounded-top="true" >
          <template #content>
            Mohammed Jamil <br />
            Walpodenstr.10 <br />
            55116, Mainz <br />
            <div class="flex flex-row gap-2"><img src="../assets/icon_mobile_24.png"> <span>+49 15209511152</span></div>
            <div class="flex flex-row gap-2"><img src="../assets/icon_email_24.png"> <span>info@mj-consultant.de</span></div><br />
          </template>
        </Accordion>
        <Accordion :items="siteMap.items" :title="siteMap.title" />
        <Accordion :items="about.items" :title="about.title" />
      </div>
      <div class="container text-white mainBody h-auto" >
        
        <div class="w-full max-w-full flex flex-col items-center justify-center mx-auto">
          <div><img src="../assets/Logo_MJ_shadow_white.png" class="h-12" alt="MJ Logo" /></div>
          <div class="space-x-3 rtl:space-x-reverse text-white text-xs" >&copy; MJ Consultant<span>, August 2024</span></div>
          <br />
          <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">

            <img src="../assets/xing-logo-2447.svg" style="width: 20px;" />
            <img src="../assets/linkedin-logo-2430.svg" style="width: 20px;" />
          </div>
  
        </div>
  
      </div>
    </div>
  </template>
  <script lang="ts">
  export default {
      name: 'Footer_mobile'
  }
  </script>
  
  <script lang="ts" setup>
   import Divider from './Divider.vue';
   import siteMap from '../data/en/sitemap.json';
   import about from '../data/en/About.json';
   import SimpleList from './SimpleList.vue';
   import Accordion from './Accordion.vue';
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
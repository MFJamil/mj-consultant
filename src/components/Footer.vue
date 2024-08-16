<template>
<!--
          <div class="container flex justify-center items-center backdrop-saturate-200 backdrop-blur-2xl  text-white" 
              id="footerContainer">

-->
  <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative py-3">
    
    <div class="container text-white mainBody h-auto flex  justify-center items-start my-2" >
      <!--  Sitemap   -->
      <div class="container text-white h-max justify-center flex flex-col my-0 py-0 items-start">
        <h2 class="mb-2 text-lg font-semibold text-white text-left w-max">Contact</h2>
        <ul class="max-w-md space-y-1  list-disc list-inside ">
          Mohammed Jamil <br />
          Walpodenstr.10 <br />
          55116, Mainz <br />
          <div class="flex flex-row gap-2"><img src="../assets/icon_mobile_24.png"> <span>+49 15209511152</span></div>
          <div class="flex flex-row gap-2"><img src="../assets/icon_email_24.png"> <span>info@mj-consultant.de</span></div><br />
           


        </ul>
      </div>
      <!--     -->
      <div class="container text-white h-max justify-center flex flex-col my-0 py-0 items-start">
        <h2 class="mb-2 text-lg font-semibold text-white text-left">{{siteMap.title}}</h2>
        <ul class="max-w-md space-y-1  list-disc list-inside ">
            <li v-for="item in siteMap.items" :key="item.title" >{{ item.title }}
                
            </li>
        </ul>
      </div>
      <!--     -->
      <div class="container text-white h-max justify-center flex flex-col my-0 py-0 items-start">
        <h2 class="mb-2 text-lg font-semibold text-white text-left">{{about.title}}</h2>
        <ul class="max-w-md space-y-1  list-disc list-inside ">
            <li v-for="item in about.items" :key="item.title" >{{ item.title }}
                
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
<script lang="ts">
export default {
    name: 'Footer'
}
</script>

<script lang="ts" setup>
 import Divider from './Divider.vue';
 import siteMap from '../data/en/sitemap.json';
 import about from '../data/en/About.json';
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
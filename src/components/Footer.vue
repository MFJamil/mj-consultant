<template>
<!--
          <div class="container flex justify-center items-center backdrop-saturate-200 backdrop-blur-2xl  text-white" 
              id="footerContainer">

-->
  <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative py-3">
    
    <div class="container text-white h-auto flex justify-center items-start my-2" >
      <SimpleList title="Contact" >
        <template #content>
          Mohammed Jamil <br />
          Walpodenstr.10 <br />
          55116, Mainz <br />
          <div class="flex flex-row gap-2">
            <a href="tel:015209511152">
              <img src="../assets/icon_mobile_24.png"> 
            </a>
            <span>+49 15209511152</span>
            
            </div>
          <div class="flex flex-row gap-2">
            <a href="mailto:info@mj-consultant.de">
              <img src="../assets/icon_email_24.png">
            </a>
            <span>info@mj-consultant.de</span>
          </div>
        </template>
      </SimpleList>
      <SimpleList :items="siteMap.items" :title="siteMap.title" @action="handleAction"/>
      <SimpleList :items="about.items" :title="about.title" @action="handleAction"/>
    </div>
    <div class="container text-white mainBody h-auto" >
      <Divider class="w-full"/>
      <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative">
        <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">
          <div><img src="../assets/Logo_MJ_shadow_white.png" class="h-12" alt="MJ Logo" /></div>
          <div>&copy; MJ Consultant<span>, August 2024</span></div>
        </div>
        <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">
          <a href="https://www.xing.com/profile/Mohammed_Jamil2/web_profiles"><img src="../assets/xing-logo-2447.svg" style="width: 20px;" /></a>
          <a href="https://www.linkedin.com/in/dipl-ing-m-jamil-b2532562/"><img src="../assets/linkedin-logo-2430.svg" style="width: 20px;" /></a>
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
 import SimpleList from './SimpleList.vue';
 const handleAction=(action:string)=>{
    console.log("Got Action : " + action);
    if (action === '#') window.scrollTo(0,0);
    if ((action!== 'impressum')&&(action!== 'datenschutz')){
      let top = document?.getElementById(action)?.offsetTop; //Getting Y of target element
      if (top!==undefined) window.scrollTo(0, top);   
    }

}

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
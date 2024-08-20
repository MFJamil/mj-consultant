<template>
  <div 
    class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative py-3"
    
  >
    
    <div class="container text-white h-auto flex justify-center items-start my-2" >
      <SimpleList :title="Fields.mnu_contact" >
        <template #content>
          M. Jamil <br />
          Walpodenstr.10 <br />
          55116, Mainz <br />
          <div class="flex flex-row gap-2">
            <a href="tel:015209511152">
              <img src="../../assets/images/icon_mobile_24.png"> 
            </a>
            <span>+49 15209511152</span>
            
            </div>
          <div class="flex flex-row gap-2">
            <a href="mailto:info@mj-consultant.de">
              <img src="../../assets/images/icon_email_24.png">
            </a>
            <span>info@mj-consultant.de</span>
          </div>
        </template>
      </SimpleList>
      <SimpleList :items="siteMap.items" :title="siteMap.title" @action="(item) => $emit('action',item)"/>
      <SimpleList :items="about.items" :title="about.title" @action="(item) => $emit('action',item)"/>
    </div>
    <div class="container text-white mainBody h-auto" >
      <Divider class="w-full"/>
      <div class="w-full max-w-full backdrop-saturate-200 backdrop-blur-2xl flex flex-wrap items-center justify-between mx-auto relative">
        <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">
          <div><img src="../../assets/images/Logo_MJ_shadow_white.png" class="h-12" alt="MJ Logo" /></div>
          <div>&copy; MJ Consultant<span>, August 2024</span></div>
        </div>
        <div class="flex items-center space-x-3 rtl:space-x-reverse text-white text-sm">
          <a class="pi pi-globe text-white cursor-pointer" @click="$emit('action','showLangs')" ></a>
          <a href="https://www.xing.com/profile/Mohammed_Jamil2/web_profiles"><img src="../../assets/images/xing-logo-2447.svg" style="width: 20px;" /></a>
          <a href="https://www.linkedin.com/in/mj-consultant/"><img src="../../assets/images/linkedin-logo-2430.svg" style="width: 20px;" /></a>
          
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
 import Divider from '../Divider.vue';
 import {ref} from 'vue';
 import siteMap from '../../data/sitemap.json';
 import about from '../../data/About.json';
 import SimpleList from '../SimpleList.vue';
 import translator from '../../utils/Translator';
 import { Fields } from '../../utils/Fields';
 const tr = ref(translator);

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
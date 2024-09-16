<template>
  <div class="flex flex-col min-h-screen font-Roboto">
    <Header :menu="menu" title="MJ Consultant" icon-file="./assets/images/Logo_MJ_shadow_white.png" /> 
    <div class="flex flex-col min-h-screen font-Roboto">
      <RouterView />

    </div>
    
    <Footer_Mobile v-if="isMobile" @action="handleAction"/>
    <Footer @action="handleAction"  v-else/>

    <impressum @doClose="showImpressum=false" :doShow="showImpressum"> </impressum>
    <DatenSchutz @doClose="showDatenSchutz=false" :doShow="showDatenSchutz"> </DatenSchutz>
    <LangsSelector @doClose="showLangs=false" :doShow="showLangs" @lang="handleLanguageSelection"></LangsSelector>

  </div>
  
</template>
<script lang="ts" setup>

import { RouterView } from 'vue-router';
import Footer from './components/panels/Footer.vue'
import Footer_Mobile from './components/panels/Footer_mobile.vue'
import Impressum from './components/panels/Impressum.vue'
import DatenSchutz from './components/panels/DatenSchutz.vue'
import Header from './components/panels/Header.vue'
import { ref } from 'vue';
import {onMobile} from "./utils/BrowserUtils";
import t,{Lang} from './utils/Translator';
import { Fields } from './utils/Fields';
import LangsSelector from './components/panels/LangsSelector.vue';

const isMobile = ref(onMobile());
const showImpressum = ref(false);
const showDatenSchutz = ref(false);
const showLangs = ref(false);
const curLang = ref(t);

const handleAction=(action:string)=>{
    console.log("Got Action : " + action);
    if (action === '#') window.scrollTo(0,0);
    switch(action){
        case('impressum'):
          showImpressum.value = true;
          break;
        case('datenschutz'):
          showDatenSchutz.value = true;
          break;
        case('showLangs'):
          showLangs.value = true;
          break;
        default:
          let top = document?.getElementById(action)?.offsetTop; //Getting Y of target element
          if (top!==undefined) window.scrollTo(0, top);   
    }
}
const handleLanguageSelection = (lang:Lang)=>{
  console.log("Got Language Selection  " + lang);
  curLang.value.setLanguage(lang);


  showLangs.value = false;

}


const menu = ref([
  {id: '', title: Fields.mnu_start,selected: true},
  {id: 'info', title: Fields.mnu_info},
  {id: 'skills', title: Fields.mnu_skills},
  {id: 'kontakt', title: Fields.mnu_contact},
  
]);
</script>
<style scoped>

</style>
<template>
  <div class="flex flex-col min-h-screen font-Roboto">
    <Header :menu="menu" title="MJ Consultant" icon-file="assets/Logo_MJ_shadow_white.png" /> 
    <div class="flex flex-col min-h-screen font-Roboto">
      <RouterView />

    </div>
    
    <Footer_Mobile v-if="isMobile" @action="handleAction"/>
    <Footer @action="handleAction"  v-else/>

    <impressum @doClose="showImpressum=false" :doShow="showImpressum"> </impressum>
    <DatenSchutz @doClose="showDatenSchutz=false" :doShow="showDatenSchutz"> </DatenSchutz>

  </div>
  
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'
import Footer_Mobile from './components/Footer_mobile.vue'
import Impressum from './components/Impressum.vue'
import DatenSchutz from './components/DatenSchutz.vue'
import Header from './components/Header.vue'
import { ref } from 'vue';
import {onMobile} from "./utils/BrowserUtils";
const isMobile = ref(onMobile());
const showImpressum = ref(false);
const showDatenSchutz = ref(false);

const handleAction=(action:string)=>{
    console.log("Got Action : " + action);
    if (action === '#') window.scrollTo(0,0);
    if ((action!== 'impressum')&&(action!== 'datenschutz')){
      let top = document?.getElementById(action)?.offsetTop; //Getting Y of target element
      if (top!==undefined) window.scrollTo(0, top);   
    }else{
      if (action==='impressum') showImpressum.value = true;
      if (action==='datenschutz') showDatenSchutz.value = true;
    }

}


const menu = ref([
  {id: '', title: 'Start',selected: true},
  {id: 'info', title: 'Info'},
  {id: 'skills', title: 'Skills'},
  {id: 'kontakt', title: 'Kontakt'},
  
]);
</script>
<style scoped>

</style>
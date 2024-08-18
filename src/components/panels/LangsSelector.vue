 <template>
    <!--calc(100vh-15px)-->
    <SlidePanel 
        :topPos="onMobile()?'70vh':'70vh'" width="100px" height="125px" 
        :roundedHeader="true" :rightPos="onMobile()?'40vw':'10vw'">
        <template #content>
            <div class="flex flex-col justify-center items-center py-5 font-bold ">
            <LangElement language="English" 
                :lang="Lang.EN" 
                :isSelected="t.getCurrentLang()==Lang.EN" 
                @lang="(lang)=>$emit('lang',lang)" />
            <LangElement language="Deutsch" 
                :lang="Lang.DE" 
                :isSelected="t.getCurrentLang()==Lang.DE" 
                @lang="(lang)=>$emit('lang',lang)" />
                <!-- Arabic will be activated later
            <LangElement language="Arabisch" 
                :isSelected="t.getCurrentLang()==Lang.AR" 
                :lang="Lang.AR" 
                @lang="(lang)=>$emit('lang',lang)" />
                -->
            
        </div>
        </template>
    </SlidePanel>
 </template>
 
 <script lang="ts">
  
  export default {
      name: 'Impressum'
  }
</script>
<script lang="ts" setup>
import SlidePanel from '../SlidePanel.vue';
import LangElement from '../LangElement.vue';
import t,{Lang} from '../../utils/Translator';
import { onMobile } from '../../utils/BrowserUtils';
const props = defineProps({
    location:{
        type: String,
        default: ''
    }
})

 </script>
 
 <style>
 
 </style>    
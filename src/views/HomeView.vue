
<template>
  <main class="container text-white mainBody h-auto" id="start">

    <section class="page" >
      
      <div class="w-full py-20 bg-white rounded-3xl flex flex-col justify-center items-center -translate-y-20" >
        <div shown="-translate-y-5 duration-1500 opacity-100 scale-100"  class="scale-0 opacity-0 gemini mb-4 lg:text-5xl !leading-tight text-3xl font-sans font-extrabold py-0">Full Stack</div>
        <div shown="translate-y-5 duration-1500 opacity-100 scale-100" class="scale-0 opacity-0 gemini mb-4 lg:text-5xl !leading-tight text-3xl font-sans font-extrabold py-0">IT Consultant</div>
        <div class="scale-0 opacity-0 rounded-2xl" 
          shown="duration-1500 opacity-100 scale-100" 
          :style="`width: ${isMobile?'40':'20'}%;height: auto;`">
          <img src="../assets/images/under_construction_1.png" />
        </div>
      </div>
    </section>

    <section class="page" id="info">
      <CardPicAction class="my-60"
        :picture="{fileName: info.picture,height:'300px',width:'200px'}" :title="t.t(Fields.tit_info)" :text="tr.t(Fields.txt_info)" />
    </section>


    <section class="page gap-5" id="skills" >
      
      <Carousel  :items= "skillIntervals.map(item=>item.text)" >
            <template v-for="item in skillIntervals" :key="item.text" #[item.text]>
              <div 
                class="w-full bg-white text-black opacity-100 cursor-pointer"  
                @click="switchSkills(item)"
                >
                <img class="absolute size-24 h-auto opacity-40 translate-x-10" :src="`assets/${item.image}`" />
                <span class="text-sm z-40">{{ item.text }}</span>
              </div>
            </template>
      </Carousel>

      <!--Carousel  :items= "['2019-Present','2015-2019','2008-2015','2002-2008','1998-2002']" class="border-2">
            <template #2019-Present>
              <div class="w-full">
                <img class="absolute size-24 h-auto opacity-40 translate-x-10" src="../assets/images/mj_2020.png" />
                <span class="text-sm z-40">2019 - Present</span>
              </div>
              
            </template>
            <template #2015-2019>
              <span class="text-sm">2015 - 2019</span>
            </template>
            <template #2008-2015>
              <span class="text-sm">2008 - 2015</span>
            </template>
            <template #2002-2008>
              <span class="text-sm">2002 - 2008</span>
            </template>
            <template #1998-2002>
              <span class="text-sm">1998-2002</span>
            </template>
        </Carousel-->
      <div :class="`${!isMobile?'flex-wrap flex-row':'px-5 flex-1 flex-col'} flex w-full h-auto justify-center items-center opacity-0 duration-1500 translate-y-10 scale-0`" shown="scale-100 opacity-100 -translate-y-10"  >
        <Qube v-for="skill in info.skills" :key="skill.title" :openLink="false" settings="width:300;" class="my-5 mx-4">
          <template #front>
            <p class="text-2xl font-sans font-bold justify-center align-middle py-20 text-blue-900">{{ skill.title }}</p> 
          </template>
          <template #right>
            <div class="flex flex-col gap-1 place-items-start px-4 py-1 my-1" >
              <li v-for="item in skill.items" :key="item">{{item}}</li>
            </div>
          </template>
        </Qube>
      </div>
    </section>
    <section class="page" id="kontakt">
      <ContactInfo />
    </section>
    
  </main>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Qube from 'smyld-lib-3d/src/components/Qube.vue'
  import Carousel from 'smyld-lib-3d/src/components/Carousel.vue'

  import CardPicAction from '../components/CardPicAction.vue';
  import info_present from '../data/info_present.json'
  import info_2015 from '../data/info_2015_2019.json'
  import info_2008 from '../data/info_2008_2015.json'
  import info_2002 from '../data/info_2002_2008.json'
  import info_1998 from '../data/info_1998_2002.json'

  import ContactInfo from '../components/panels/ContactInfo.vue'
  import {onMobile} from "../utils/BrowserUtils";
  
  import t from '@/utils/Translator';
  import { Fields } from '@/utils/Fields';
import { isTemplateExpression } from 'typescript';
  
  const isMobile = ref(onMobile());

  const searchQuery = ref('')  
  const tr = ref(t);
  const infoText = t.t(Fields.txt_info); // "I'm M.Jamil, a passionate developer based in Germany. Here, you'll get a glimpse of my journey in the world of development, where creativity meets functionality."
  const info = ref(info_present);
  const infoTitle = ref(t.t(Fields.tit_info));
  const skillIntervals = [
    {
      image: 'mj_present.png',
      text: '2019 - Present',
      data: info_present
    },
    {
      image: 'mj_2020.png',
      text: '2015 - 2019',
      data: info_2015
    },
    {
      image: 'mj_2010.png',
      text: '2008 - 2015',
      data: info_2008
    },
    {
      image: 'mj_2004.png',
      text: '2002 - 2008',
      data: info_2002
    },
    {
      image: 'mj_1998.png',
      text: '1998 - 2002',
      data: info_1998
    },
    
  ]

  const switchSkills = (item:any)=>{
    console.log("New Skills are selected for : " + JSON.stringify(item,null,2))
    info.value = item.data;
  }
  
</script>
<style scoped>

.panel--rotate-y {
  transform: rotateY(45deg);
}
.gemini {
    background: radial-gradient(circle,dodgerblue,yellow);
    background-clip: text;
    color: transparent;
    animation: gemini 15s linear infinite;
    background-size: 200% 200%;
}
@keyframes gemini {
    
    0%{
        background-position: 0% 0%;
    }
    
    50%{
        background-position: 100% 100%;
    }
    
    100%{
        background-position: 0% 0%;
    }
}
.page{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
}


.fadeIn{
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: 2500;
  
}

</style>


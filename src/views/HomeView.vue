
<template>
  <main class="container text-white mainBody">

  <section class="bg-white rounded-2xl shadow-5xl">
      <div class="gemini container flex w-full flex-col sm:flex-row items-center gap-12 text-black py-20" >
        <div class="flex flex-1" ><span class="mb-4 lg:text-5xl !leading-tight text-3xl font-sans font-extrabold py-0">IT Consultant</span></div>
        <!--
        <div class="flex justify-end" >
          <img src="../assets/MJ_2.png" class="rounded-3xl size-1/2 opacity-50" />
        </div>
        -->
        </div>
    </section>

    <CardPicAction 
      :picture="{fileName: 'assets/MJ_2.png',height:'40vw'}" title="Welcome" :text="infoText" />


  <div class="lg:flex flex-1 items-center  max-w-full " style="border:1px solid white;">
    <Box v-for="skill in skills" :key="skill.title">
      <template #front>
        <p class="text-2xl font-sans font-bold justify-center align-middle py-20">{{ skill.title }}</p> 
      </template>
      <template #right>
        <div class="flex flex-col  gap-3 place-items-start px-4 py-2 my-1" >
          <li v-for="item in skill.items" :key="item">{{item}}</li>
        </div>
      </template>
    </Box>
  </div>


</main>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Box from 'smyld-lib-3d/src/components/Box.vue'
  import CardPicAction from '../components/CardPicAction.vue';
  const searchQuery = ref('')  
  const infoText = "I'm M.Jamil, a passionate developer based in Germany. Here, you'll get a glimpse of my journey in the world of development, where creativity meets functionality."
  const skills = [
    {
      title: 'Front End',
      items:[
        'Vue',
        'React',
        'Angular',
        'HTML5,css,tailwind'
      ]
    },
    {
      title: 'Languages',
      items:[
        'Java',
        'Typescript',
        'Javascript',
        'Pyton',
        'C++'
      ]
    },

  ]

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

</style>



<template>
  <main class="container text-white mainBody">

  
  <div class="container w-full flex py-20 bg-white rounded-3xl" >
    <span class="gemini mb-4 lg:text-5xl !leading-tight text-3xl font-sans font-extrabold py-0">IT Consultant</span>
    <!--
    <div class="flex justify-end" >
      <img src="../assets/MJ_2.png" class="rounded-3xl size-1/2 opacity-50" />
    </div>
    -->
    </div>


    <CardPicAction 
      :picture="{fileName: 'assets/MJ_2.png',height:'40vw'}" title="Welcome" :text="infoText" />


  <div class="container lg:flex items-center w-full h-auto block flex-wrap justify-center" >
    <Qube v-for="skill in skills" :key="skill.title" :openLink="false" class="my-10">
      <template #front>
        <p class="text-2xl font-sans font-bold justify-center align-middle py-20">{{ skill.title }}</p> 
      </template>
      <template #right>
        <div class="flex flex-col  gap-3 place-items-start px-4 py-1 my-1" >
          <li v-for="item in skill.items" :key="item">{{item}}</li>
        </div>
      </template>
    </Qube>
  </div>


</main>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Qube from 'smyld-lib-3d/src/components/Qube.vue'
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
        'HTML5,css,tailwind',
        'Swing,ThemeLeaf'
      ]
    },
    {
      title: 'Back End',
      items:[
        'Spring Boot',
        'Node JS',
        'Hibernate',
        'Servlet/REST APIs',
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
    {
      title: 'Testing',
      items:[
        'JUnit',
        'Cypress',
        'Selenium',
        'Jest',
        'Mockito'
      ]
    },
    {
      title: 'Build Tools',
      items:[
        'Maven',
        'Npm',
        'CI/CD',
        'Jenkins',
        'Docker'
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


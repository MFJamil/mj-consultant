
<template>
  <main class="container text-white mainBody">

  
  <div class="w-full py-20 bg-white rounded-3xl flex flex-col justify-center items-center" >
    
    <div class="gemini mb-4 lg:text-5xl !leading-tight text-3xl font-sans font-extrabold py-0">Full Stack</div>
    
    <div class="gemini mb-4 lg:text-5xl !leading-tight text-3xl font-sans font-extrabold py-0">IT Consultant</div>
  
  </div>

  <CardPicAction 
      :picture="{fileName: info.picture,height:'300px',width:'200px'}" title="Welcome" :text="infoText" />


  <div class="container lg:flex items-center w-full h-auto block flex-wrap justify-center" >
    <Qube v-for="skill in info.skills" :key="skill.title" :openLink="false" class="my-10">
      <template #front>
        <p class="text-2xl font-sans font-bold justify-center align-middle py-20 text-blue-900">{{ skill.title }}</p> 
      </template>
      <template #right>
        <div class="flex flex-col  gap-3 place-items-start px-4 py-1 my-1" >
          <li v-for="item in skill.items" :key="item">{{item}}</li>
        </div>
      </template>
    </Qube>
  </div>

  <contact-info />


</main>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Qube from 'smyld-lib-3d/src/components/Qube.vue'
  import CardPicAction from '../components/CardPicAction.vue';
  import info_current from '../data/info_current.json'
  import info_2009 from '../data/info_2009_2020.json'
  
  const searchQuery = ref('')  
  const infoText = "I'm M.Jamil, a passionate developer based in Germany. Here, you'll get a glimpse of my journey in the world of development, where creativity meets functionality."
  const info = ref(info_2009);

  
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



<template>
  <main class="container text-white mainBody">
    <!--
    <div class="pt-4 mb-8 relative">
      <input 
        v-model="searchQuery"
        type="text" placeholder="Search for a city or state"
        class="py-2 px-1 w-full bg-transparent border-b 
        focus:border-weather-secondary 
        focus:outline-none 
        focus:placeholder-weather-secondary
        focus:shadow-sm"
      >
    </div>
    -->

    


  <section class="bg-white rounded-2xl shadow-5xl">
      <div class="gemini container flex w-full flex-col sm:flex-row items-center gap-12 text-black py-20" >
        <div class="flex flex-1" ><span class="mb-4 lg:text-5xl !leading-tight text-3xl font-bold py-0">IT Consultant</span></div>
        <div class="flex justify-end" >
          <img src="../assets/MJ_2.png" class="rounded-3xl size-1/2 opacity-50" />
        </div>
        </div>
      <p
        variant="lead"
        class="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
      >
        I&apos;m Mohammed Jamil, a passionate developer based in Germany. Here,
        you&apos;ll get a glimpse of my journey in the world of 
        development, where creativity meets functionality.
      </p>

    </section>

    <Box>
    <template #front>
      <p class="text-2xl font-sans font-bold py-10">MJamil</p> 
    </template>
    <template #right>
      <div class="flex items-center gap-3 place-items-center" >
        <img src="../assets/Logo_MJ_shadow_white.png" class="size-30" >
      </div>
    </template>

  </Box>
  <div class="max-w-sm overflow-hidden shadow-lg bg-white rounded-3xl">
    <img class="w-full" src="../assets/MJ_2.png" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        I'm Mohammed Jamil, a passionate developer based in Germany. Here, you'll get a glimpse of my journey in the world of development, where creativity meets functionality.
      </p>
    </div>
  </div>

  <Box>
      <template #front>
        <div class="w-full" >
          <img src="../assets/MJ_1.jpg" class="rounded-3xl w-fit" />
        </div>
    </template>
    <template #right>
      <div class="flex items-center gap-3" >
        <img src="../assets/Logo_2.png" class="size-24" >
      </div>
    </template>
  </Box>
  <CardPicActionVue />

</main>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Box from 'smyld-lib-3d/src/components/Box.vue'

  import CardPicActionVue from '../components/CardPicAction.vue';
  
   
  const searchQuery = ref('')  

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


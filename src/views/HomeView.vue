
<template>
  <main class="container text-white">
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
    <div class="container flex w-full flex-col sm:flex-row items-center gap-12 text-white py-20" >
      <div class="flex flex-1" ><span class="mb-4 lg:text-5xl !leading-tight text-3xl font-bold">IT Consultant</span></div>
      
      <div class="flex justify-end" >
        <img src="../assets/MJ_1.jpg" class="rounded-3xl shadow-2xl  size-1/2 opacity-20" />
        
      </div>
    </div>
    <section class="container">
      <p>I'm Mohammed Jamil, a passionate developer based in Germany. Here, you'll get a glimpse of my journey in the world of development, where creativity meets functionality.</p>
    </section>
    <section class="container py-28">
      <h1 class="text-justify text-3xl font-bold py-44">Portfolio</h1>
      <p>I'm Mohammed Jamil, a passionate developer based in Germany. Here, you'll get a glimpse of my journey in the world of development, where creativity meets functionality.</p>
    </section>
    
    <Box settings="width:300;height: 400;length:150;" show="back" >
      <div slot="front" style="padding-top:30px;" >Front</div>
      <div slot="right" style="padding-top:30px;">Right</div>
      <div slot="left" style="padding-top:30px;">Left</div>
      <div slot="back" style="padding-top:30px;">Back</div>
      <div slot="top" style="padding-top:30px;">Top</div>
      <div slot="bottom" style="padding-top:30px;">Bottom</div>
    </Box>
    <Box>
      <template #front>
        <p class="text-2xl font-sans font-bold py-10">MJamil</p> 
      </template>
    </Box>
    <Box>
      <template #front>
        <p class="text-2xl font-sans font-bold py-10">MJamil</p> 
      </template>
    </Box>
    <Box>
      <template #front>
        <p class="text-2xl font-sans font-bold py-10">MJamil</p> 
      </template>
    </Box>
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

</main>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Box from 'smyld-lib-3d/src/components/Box.vue'
  
   
  const searchQuery = ref('')  

</script>
<style scoped>

.panel--rotate-y {
  transform: rotateY(45deg);
}
</style>


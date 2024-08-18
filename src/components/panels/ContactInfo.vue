 <template>
   <div 
      class="opacity-0 scale-0 container flex items-center w-full h-auto  justify-center text-black rounded-2xl py-10 ring-2 ring-white backdrop-saturate-200 backdrop-blur-2xl"
      shown="opacity-100 scale-100 duration-2000"
      
      >
      <div class="w-1/2 justify-center flex duration-2000 opacity-0" shown="opacity-100 transition-x-10">
         <a href="tel:015209511152"><img src="../../assets/images/icon-mobile.png" class="cursor-pointer "/></a> 
      </div>
      <div class="w-1/2 justify-center flex" shown="transition-x-10">
         <a href="mailto:info@mj-consultant.de"> <img src="../../assets/images/icon-email.png" class="cursor-pointer" /></a>
      </div>
   </div>
 </template>
 
 <script lang="ts">
 export default {
    name: 'ContactInfo'
 }
</script>
<script lang="ts" setup>

 
 </script>
 
 <style>
 
 </style>
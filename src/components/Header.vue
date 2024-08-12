<template>
    <header class="top-0 z-50 block sticky backdrop-saturate-100 backdrop-blur-xl w-full max-w-full"
    :style="`position: -webkit-sticky;height: ${navHeight}px !important;background-color:rgba(255,255,255,${opacity}) !important;box-shadow: 0 10px 15px -3px rgb(0 0 0 / ${shadowOp}), 0 4px 6px -4px rgb(0 0 0 / ${shadowOp});`"
    >
    <nav class="text-black block">
      <div :class="`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative`"
        :style="`top: ${topLoc}px !important;`"
      >
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img :src="iconFile" class="h-12" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" 
            :style="`color:rgb(${tc},${tc},${tc})`"
            >{{title}}</span>
        </a>
        <button @click="showMenu=!showMenu" :style="`color:rgb(${tc},${tc},${tc})`" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div class="backdrop-saturate-200 backdrop-blur-2xl relative w-full md:hidden sm:block sm:w-auto" 
            id="navbar-default-mobile" :style="`background-color:rgba(255,255,255,${opacity})`" v-show="showMenu">
          <ul class="font-medium flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 ">
            <li v-for="item in menu" :key="item.id">
              <a :style="`color:rgb(${tc},${tc},${tc})`" href="#" :class="`${menuClasses} ${item.selected?'bg-blue-700':''}`" aria-current="page" @click="showMenu=false">{{ item.title }}</a>
            </li>
          </ul>
        </div>



        <div class="hidden w-full md:block md:w-auto" id="navbar-default" >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li v-for="item in menu" :key="item.id">
              <a href="#" 
                :class="`${menuClasses} ${item.selected?'bg-blue-700 ':''}`" 
                :style="`color:rgb(${tc},${tc},${tc})`" aria-current="page">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
</header>
     </template>
     
     <script lang="ts">
        export default {
            name: 'Header'
        }
    </script>
    <script lang="ts" setup>
        import type{MenuItem}  from '../model/MenuItem';
        import { ref, type PropType } from 'vue';
        import {onMobile} from "../utils/BrowserUtils";
        const isMobile = ref(onMobile());
        const menuClasses = ref('block py-2 px-3 rounded bg-transparent sm:p-0');
        const props = defineProps({
            menu:{
                type: Array as PropType<MenuItem[]>,
                defult:[]
            },
            title: String,

            iconFile: String
        })
        const showMenu = ref(!isMobile.value);
        const PC_NAV_HEIGHT_MAX = 150;
        const PC_NAV_HEIGHT_MIN = 80;
        const MO_NAV_HEIGHT_MAX = 90;
        const MO_NAV_HEIGHT_MIN = 65;

        const NAV_HEIGHT_MAX =  isMobile.value?MO_NAV_HEIGHT_MAX:PC_NAV_HEIGHT_MAX;
        const NAV_HEIGHT_MIN = isMobile.value?MO_NAV_HEIGHT_MIN:PC_NAV_HEIGHT_MIN;
        const NAV_END_EXPAND = 450;
        const OP_END_EXPAND = 30;


        let navDiff = NAV_HEIGHT_MAX - NAV_HEIGHT_MIN;


        const modalActive = ref(false);
        const navHeight = ref(NAV_HEIGHT_MAX);
        const opacity = ref(0);
        const shadowOp = ref(0);
        const tc = ref(255);
        const topLoc = ref(NAV_HEIGHT_MAX-NAV_HEIGHT_MAX/2-20)
        const handleScrolling=()=>{
            console.log(window.scrollY);
            let scrollVal = window.scrollY - NAV_END_EXPAND; 
            if (window.scrollY>0){
                navHeight.value = scrollVal>=0?NAV_HEIGHT_MIN:
                    NAV_HEIGHT_MAX-(navDiff*(window.scrollY/NAV_END_EXPAND));
                opacity.value = (NAV_HEIGHT_MAX-navHeight.value)/OP_END_EXPAND;
                shadowOp.value = opacity.value/10;
                tc.value = 255 - ((NAV_HEIGHT_MAX-navHeight.value)/navDiff)*255;
                topLoc.value = navHeight.value/2-20;
            }
        };
        window.addEventListener("scroll", (event) => {handleScrolling();});

    </script>
    
     <style>
     
     </style>
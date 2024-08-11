<template>
    <header class="sticky top-0 bg-weather-primary z-50 fixed"  
    :style="`position:fixed;top:0;height: ${navHeight}px !important;background-color:rgba(255,255,255,${opacity}) !important;box-shadow: 0 10px 15px -3px rgb(0 0 0 / ${shadowOp}), 0 4px 6px -4px rgb(0 0 0 / ${shadowOp});`">
        <nav class="container lg:flex flex-row items-center gap-4 text-black py-2" >
            <RouterLink :to="{name: 'home'}">
                <div class="lg:flex items-center gap-3 hidden" >
                    <img src="../assets/Logo_MJ.png" style="height: 70px;width: 120px;" >
                    <p class="text-2xl font-bold" :style="`color:rgb(${tc},${tc},${tc})`">MJ Consultant</p>
                </div>
            </RouterLink>
            <div class="gap-3 flex-1 justify-end lg:flex" >
                <i :style="`color:rgb(${tc},${tc},${tc})`" class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer" @click="toggleModal"></i>
                <i :style="`color:rgb(${tc},${tc},${tc})`" class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i>
                
            </div>
            <BaseModal :modalActive="modalActive" @modal-close="toggleModal"> 
                <div class="text-black">
                <h1 class="text-2xl mb-1">About:</h1>
                <p class="mb-4">
                    The Local Weather allows you to track the current and
                    future weather of cities of your choosing.
                </p>
                <h2 class="text-2xl">How it works:</h2>
                <ol class="list-decimal list-inside mb-4">
                    <li>
                    Search for your city by entering the name into the
                    search bar.
                    </li>
                    <li>
                    Select a city within the results, this will take
                    you to the current weather for your selection.
                    </li>
                    <li>
                    Track the city by clicking on the "+" icon in the
                    top right. This will save the city to view at a
                    later time on the home page.
                    </li>
                </ol>

                <h2 class="text-2xl">Removing a city</h2>
                <p>
                    If you no longer wish to track a city, simply select
                    the city within the home page. At the bottom of the
                    page, there will be am option to delete the city.
                </p>
                </div>
            </BaseModal>
        </nav>

    </header>
</template>
<script lang="ts">
 export default {
    name: 'SiteNavigation'
 }
</script>
<script lang="ts" setup>
import {RouterLink} from "vue-router";
import BaseModal from "./BaseModal.vue";
import {ref} from "vue"
const isMobile = ref(((navigator)as any).userAgentData.mobile);
const PC_NAV_HEIGHT_MAX = 150;
const PC_NAV_HEIGHT_MIN = 80;
const MO_NAV_HEIGHT_MAX = 80;
const MO_NAV_HEIGHT_MIN = 40;

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


const toggleModal= () =>{
    modalActive.value = !modalActive.value;
}
const handleScrolling=()=>{
    console.log(window.scrollY);
    let scrollVal = window.scrollY - NAV_END_EXPAND; 
    if (window.scrollY>0){
        navHeight.value = scrollVal>=0?NAV_HEIGHT_MIN:
            NAV_HEIGHT_MAX-(navDiff*(window.scrollY/NAV_END_EXPAND));
        opacity.value = (NAV_HEIGHT_MAX-navHeight.value)/OP_END_EXPAND;
        shadowOp.value = opacity.value/10;
        tc.value = 255 - ((NAV_HEIGHT_MAX-navHeight.value)/navDiff)*255;

    }
    

};
window.addEventListener("scroll", (event) => {handleScrolling();});
console.log("Mobile Check : " + isMobile.value);
console.log("Navigator : ");

console.dir(navigator);

</script>


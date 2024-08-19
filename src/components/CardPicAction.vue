 <template>
    <div
        shown="-translate-y-10 duration-1500 opacity-100" 
        class="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark place-items-center lg:flex my-20 opacity-0">
        <div shown="-translate-y-5 duration-1500 opacity-100" class="translate-y-5">
        <img 
            
            :class="`rounded-t-lg size-fit m-auto`"
            :src="picture.fileName"
            :style="`height: auto;max-width: ${picture.width};opacity:${props.picture.opacity!=undefined?props.picture.opacity:0.5} !important;`"
            alt="" />
        </div>
    
            
    <div class="p-6 text-surface dark:text-white" shown="-translate-y-10 duration-1500 opacity-100" >
        <h5 class="mb-2 lg:text-5xl font-extrabold font-sans text-3xl text-black">{{ title }}</h5>
        <p class="mb-4 font-bold text-gray-400 text-lg">
            {{text}}
        </p>
        <!--
        <button
:style="`height: ${picture.height};width: ${picture.width};`"
        type="button"
        class="text-black inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        Button
        </button>
        -->
    </div>
    
    </div>
 </template>
 
 <script lang="ts">
 export default {
    name: 'CardPicAction'
 }
</script>
<script lang="ts" setup>
import type { CardPic } from '../model/CardPic';
import {ref } from 'vue'
import type{PropType} from 'vue'
const props = defineProps({
    picture: {
        type: Object as PropType<CardPic>,
        default:{fileName: '',opacity: 50}
    },

    title: String,
    text: String,


})
/*
const imgUrl = ref(new URL(props.picture.fileName, import.meta.url).href);

console.log("Original Image  : " + props.picture.fileName)
console.log("Meta URL : " + import.meta.url)
console.log("Image URL : " + imgUrl.value)
console.dir(import.meta.url);
console.dir(imgUrl.value);
*/
</script>
 <style>
 
 </style>
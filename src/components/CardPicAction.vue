 <template>
    <div
        class="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark place-items-center lg:flex my-20">
    
        <img
            :class="picClasses"
            :src="picture.fileName"

            alt="" />
    
            {{ picClasses }}
    <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-5xl font-medium leading-tight text-black">{{ title }}</h5>
        <p class="mb-4 font-bold text-gray-500 text-lg">
            {{text}}
        </p>
        <!--
        <button

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
const picClasses = ref(`rounded-t-lg size-auto opacity-${props.picture.opacity!=undefined?props.picture.opacity:50}`);
</script>
 <style>
 
 </style>
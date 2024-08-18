 <template>
    <div class="container text-white h-max justify-center flex flex-col my-0 py-0 items-center opacity-0"
        shown="opacity-100"
        >
        <div class="text-white h-max justify-center flex flex-col my-0 py-0 items-start">
            <h2 class="mb-2 text-lg font-semibold text-white text-left w-max">{{tr.t(title)}}</h2>
            <ul class="max-w-md space-y-1  list-disc list-inside ">
            <template v-if="items.length>0">
                <li v-for="item in items" 
                    :class="(item.action||item.id)?'cursor-pointer hover:text-green-500':''"
                    :key="item.title" 
                    @click="$emit('action',item.action?item.action:item.id)" 
                >{{ tr.t(item.title) }}</li>
            </template>
            <slot name="content" />
            </ul>
        </div>
    </div>
 </template>
 
 <script lang="ts">
 export default {
    name: 'SimpleList'
 }
</script>
<script lang="ts" setup>
import type { MenuItem } from '../model/MenuItem';
import{ref, type PropType} from 'vue'
import translator from '../utils/Translator';
const tr = ref(translator);


const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
        default:[]
    },

    title: String,
})

 </script>
 
 <style>
 
 </style>
 <template>

<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-3">
    <button type="button" 
        :class="`flex focus:ring-1 focus:ring-gray-200 focus:text-black items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-gray-200  dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 gap-3 ${roundedTop?'rounded-t-xl':''}`" 
        data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3"
        @click="showContents=!showContents"
        >
      <span>{{ title }}</span>
      <svg  data-accordion-icon :class="`${!showContents?'rotate-180':''} w-3 h-3 shrink-0 duration-300`" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5 5 1 9 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" :class="`${(showContents?'visible bottom-10':'hidden')} transition duration-700 ease-in-out`" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ul class="max-w-md space-y-1  list-disc list-inside ">
            <template v-if="items.length>0">
                <li v-for="item in items" 
                    :class="(item.action||item.id)?'cursor-pointer hover:text-green-500':''"
                    :key="item.title" 
                    @click="$emit('action',item.action?item.action:item.id)" 
                >{{ item.title }}</li>
            </template>
            <slot name="content" />
            </ul>
    </div>
  </div>
</div>

 </template>
 
 <script lang="ts">
 export default {
     name: 'Accordion'
 }
</script>
<script lang="ts" setup>
import type { MenuItem } from '../model/MenuItem';
import{type PropType, ref} from 'vue'

const showContents = ref(false);

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
        default:[]
    },

    title: String,
    roundedTop:{
        type:Boolean,
        default:false
    }
})

</script>
 
 <style>
 
 </style>
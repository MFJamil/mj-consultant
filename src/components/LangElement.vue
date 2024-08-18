
 <template> 
    <div 
        :class="`hover:text-blue-700 cursor-pointer ${isSelected?'text-green-500':''}`" 
        @click="$emit('lang',lang)"
    >{{ language }}</div>
   
 </template>
 
 <script lang="ts">
 export default {
    name: 'LangElement'
 }
</script>
<script lang="ts" setup>

    import {Lang} from '../utils/Translator';
    import type { PropType } from 'vue';
    const props = defineProps({
        lang:{
            type:String,
            default: Lang.DE
        },
        language:{
            type:String,
            default: ''
        },

        isSelected:{
            type: Boolean,
            default: false
        }

    })



 </script>
 
 <style>
 
 </style>
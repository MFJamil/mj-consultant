 <template>
    <div :class="`opacity-100 z-50 rounded-3xl absolute ring-white ring-2 bg-blue-500 duration-1000 '  
        ${doShow?'showAtBottom':'hideAtBottom'} ${roundedHeader?'overflow-hidden':''} `"
        :style="`top:${doShow?topPos:'102%'} !important;bottom:${bottomPos};right:${rightPos};width:${width};height:${height};`"
        >
        <div class="w-full  backdrop-saturate-200 backdrop-blur-2xl h-10">
            <li class="right-5 top-3 absolute pi pi-times font-bold cursor-pointer hover:text-blue-900 text-white" @click="$emit('doClose')"></li> 
        </div>
        <div class="overflow-auto h-screen bg-white px-10">
            <slot name="content"></slot>
        </div>
    </div>
 </template>
 
 <script lang="ts">
    export default {
        name: 'SlidePanel'
    }
</script>
<script lang="ts" setup>
    const props = defineProps({
        doShow:{
            type:Boolean,
            default:false
        },
        topPos:{
            type: String,
            default: '0'
        },
        bottomPos:{
            type: String,
            default: '0'
        },

        leftPos:{
            type: String,
            default: '0'
        },
        rightPos:{
            type: String,
            default: '0'
        },

        width:{
            type: String,
            default: '100%'

        },
        height:{
            type: String,
            default: '100%'

        },

        roundedHeader:{
            type:Boolean,
            default: false
        }

        
    })



</script>

 

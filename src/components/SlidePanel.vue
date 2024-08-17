 <template>
    <div :class="'opacity-100 z-50 rounded-3xl absolute ring-white ring-2 bg-blue-500 duration-1000 ' + (doShow?'showAtBottom':'hideAtBottom')">
        <div class="w-full  backdrop-saturate-200 backdrop-blur-2xl h-10">
            <li class="right-5 top-3 absolute pi pi-times font-bold cursor-pointer hover:text-blue-900 text-white" @click="$emit('doClose')"></li> 
        </div>
        <div class="overflow-auto h-screen bg-white">
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
    }
})


</script>

 
 <style scoped>
  .hideAtBottom{
    position:fixed;
    top: 102%;
    width:100%;
    opacity:0;
  }
  .showAtBottom{
    position:fixed;
    top: 0;
    width:100%;
    opacity: 1;
  }

</style>
 
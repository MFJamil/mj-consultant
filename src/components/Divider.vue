
 <template>

   <hr :style="`border-top: ${(pattern==='rounded'?8:size)}px ${pattern} ${color}; ${(pattern==='rounded'?'border-radius: 5px:':'')}`">
 </template>
  <script lang="ts">
  export default {
     name: 'Divider'
  }
 </script>
 
 <script lang="ts" setup>
    const props = defineProps({
        pattern:  {
            type: String,
            default:'rounded'
        },
        size:  {
            type: Number,
            default:3
        },
        color:  {
            type: String,
            default:'#bbb'
        },
    })


 </script>
 
 <style>
    /* Dashed border */
    hr.dashed {
    border-top: 3px dashed #bbb;
    }

    /* Dotted border */
    hr.dotted {
    border-top: 3px dotted #bbb;
    }

    /* Solid border */
    hr.solid {
    border-top: 3px solid #bbb;
    }

    /* Rounded border */
    hr.rounded {
    border-top: 8px solid #bbb;
    border-radius: 5px;
    }
 </style>
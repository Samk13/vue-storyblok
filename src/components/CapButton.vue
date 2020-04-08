<template >
  <div v-editable="blok" class="px-5 py-2 w-56 m-auto mb-5 rounded-full text-green-400 bg-white shadow-lg hover:border-green-600 hover:text-white hover:bg-green-400" >
        {{ blok.headline }}
  </div>
</template>

<script>
export default {
  props: ['blok']
  
}

</script>

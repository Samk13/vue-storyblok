<template>
  <div class="bg-gray-200">
    <img class="m-auto mb-5 w-16" alt="Vue logo" src="../assets/logo.png">
    <StoryBlock msg="StoryBlock Sam test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoryBlock from '@/components/StoryBlock.vue'

export default {
  name: 'Home',
  components: {
    StoryBlock
  }
}
</script>

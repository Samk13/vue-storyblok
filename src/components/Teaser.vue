<template>
  <div class=" w-56 m-auto shadow-lg bg-green-500 mb-5 p-3 rounded-full">
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the side by side editor can
    show the right component.
    -->
    <div v-editable="blok">
      <h1>
        <!--
        You can access every attribute you
        define in the schema in the blok variable
        -->
        {{blok.headline}}
        </h1>

    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
<template>
  <div class="row gif-display">
    <div v-for="gif in gifs" class="gif col-sm-12 col-md-6 col-lg-3">
      <img :src="gif.images.original.url"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['gifs'],
  };
</script>

<style scoped>
</style>

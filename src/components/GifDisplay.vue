<template>
  <div class="row gif-display">
    <div v-for="gif in gifs" class="gif col-xs-12 center-block">
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
img {
  max-width: 320px;
}

.center-block {
  float: none;
}

.gif {
  padding: 15px 0px;
}

@media (min-width: 500px) {
  img {
    max-width: 500px;
  }
}
</style>

<template>
  <div class="row gif-display">
    <div v-for="gif in gifs" class="col-xs-12 col-md-6">
      <div class="gif">
        <a :href="gif.images.original.url"><img :src="gif.images.original.url"/></a>
      </div>
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
  max-width: 95%;
  max-height: 200px;
  border: 2px solid #fefefe;
  border-radius: 2px;
}

.gif {
  padding: 20px;
  min-height: 250px;
}
</style>

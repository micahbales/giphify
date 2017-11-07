<template>
  <div id="app">
    <form v-on:submit="searchGiphy">
      <input type="text" v-model="searchString" placeholder="GIF ME!"/>
      <button type="submit">Go</button>
    </form>
    <h3>{{searchString}}</h3>
    <div v-for="gif in gifs">
      <span>
        {{gif.images.original.url}}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data() {
    return {
      searchString: '',
      gifs: [],
    };
  },
  methods: {
    searchGiphy(e) {
      e.preventDefault();
      this.$http.get('http://localhost:3000' +
        `/api/v1/giphy?search=${this.searchString}`)
      .then((res) => {
        res.body.data.map(gif => this.gifs.push(gif));
      }, (err) => {
        console.error(err);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

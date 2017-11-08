<template>
  <div id="app" class="container">
    <div class="row">
      <form v-on:submit="searchGiphy" class="col-xs-12">
        <input type="text" v-model="searchString" placeholder="GIF ME!"/>
        <button type="submit" class="btn">Go</button>
      </form>
      <h2>{{searchString}}</h2>
      <GifDisplay :gifs="gifs" />
    </div>
  </div>
</template>

<script>
import GifDisplay from './components/GifDisplay';

export default {
  name: 'app',
  components: { GifDisplay },
  data() {
    return {
      searchString: '',
      gifs: [],
    };
  },
  methods: {
    searchGiphy(e) {
      e.preventDefault();
      this.$http.get(`/api/v1/giphy?search=${this.searchString}`)
      .then((res) => {
        this.gifs = [];
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

<template>
  <div id="app" class="container">
    <div v-if="!searchString" class="row logo">
      <img src="./assets/img/giphy-logo.gif"/>
    </div>
    <div class="row">
      <form v-on:submit="searchGiphy" class="col-xs-12 search-form">
        <input type="text" v-model="searchString" placeholder="Search for GIFs"/><br/>
        <button type="submit" class="btn btn--search">Go!</button>
      </form>
      <h2 class="col-xs-12 search-string">{{searchString}}</h2>
    </div>
    <GifDisplay :gifs="gifs" />
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

<style lang="scss">
  @import './assets/styles/_vars.scss';

  * { transition: background-color, color .2s ease-in }

  body { background-color: $navy!important; /* overriding bootstrap */ }

  input[type=text] {
    text-align: center;
    border: 2px solid $white;
    border-radius: 1px;
    background: $green;
    height: 40px;
    width: 55%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $white;
    margin-top: 60px;
  }

  .logo img { width: 55%; }

  .search-form {
    padding: 20px 0px;
    transform: translateX(1%);
  }

  .btn--search {
    background-color: $orange;
    border-radius: 1px;
    height: 30px;
    width: 55%;
    font-weight: bold;

    &:hover {
      background-color: $purple;
      color: $white;
    }
  }

  @media (min-width: 500px) {
    .logo img, input[type=text], .btn--search { width: 40%; }
  }

  @media (min-width: 750px) {
    .logo img, input[type=text], .btn--search { width: 35%; }
  }

  @media (min-width: 970px) {
    .logo img, input[type=text], .btn--search { width: 30%; }
  }

  @media (min-width: 1170px) {
    .logo img, input[type=text], .btn--search { width: 25%; }
  }
</style>

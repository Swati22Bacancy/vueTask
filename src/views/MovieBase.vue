<template>
    <router-view :movieList="movieList"></router-view>
</template>

<script>
import axios from 'axios';
export default {
  name: "MovieBase",
  data() {
    return {
      movieList: []
    };
  },
  mounted()
  {
    this.getMovieData();
  },
  methods: {
    getMovieData() {
      axios
        .get('movies.json') 
        .then(response => {
          this.movieList = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>



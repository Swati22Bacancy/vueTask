<template>
  <div class="row">
    <div v-for="movie in movieList" :key="movie.id" class="movie-data col-md-3">
      <div class="">
        <div>
          <h4><router-link style="text-decoration: none;"  :to="'/movies/' + movie.id">{{movie.name}}</router-link></h4>
          <img :src="movie.thumbnailUrl">
          <p>{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>

export default {
  name: "MovieView",
  props:
  {
    movieList:
    {
      type:Array,
      // default:[],
      
    }
    
  },
  // data() {
  //   return {
  //     movieList: []
  //   };
  // },
  
};
</script>
<style scoped>
.movie-data
{
  border: 1px solid #ccc;
  margin: 10px;
  padding: 25px;
  background: #f0f0f0;
}
</style>
<template>
  <div>
    <div class="poster-view">
      <div v-for="movie in movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviePoster',
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poster-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.poster-view div {
  margin: 10px;
  cursor: pointer;
  text-align: center;
}
</style>

<template>
  <div class="list-view">
    <ul  style="list-style-type: none;" class="list-view">
      <li v-for="movie in movies" :key="movie.id">
        <b>{{ movie.title }}</b> - {{ movie.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
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
.list-view li
{
  padding: 10px;
};
</style>

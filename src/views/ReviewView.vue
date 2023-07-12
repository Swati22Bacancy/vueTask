<template>
  <div class="review">
    <h3>Reviews of {{moviename}}</h3>
    <ul v-if="reviews" class="review-list">
      <li v-for="review in reviews" :key="review.id"><router-link  style="text-decoration: none;" :to="'/movies/' + movie.id + '/reviews/' + review.id">{{review.title}}</router-link></li>
    </ul>
    <div v-else>
      <p>No record found.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movie: null,
      moviename: '',
      reviews:[]
    };
  },
  methods: {
    fetchRecordById(id) {
      fetch('../../movies.json')
        .then(response => response.json())
        .then(data => {
          const record = data.find(record => record.id === id);
          this.movie = record ? record : null;
          this.moviename=this.movie.name;
          this.reviews=this.movie.reviews;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    
  },
  mounted() {
    this.fetchRecordById(Number(this.$route.params.id));
  }
};
</script>
<style scoped>
.movie-data
{
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
}
.review-list
{
  width: 150px;
  margin: auto;
}
.review-list li {
  padding: 10px;
};
</style>
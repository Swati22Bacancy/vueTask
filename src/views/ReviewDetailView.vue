<template>
  <div>
    <div v-if="review" class="movie-detail">
      <h3 style="color: brown;">{{ review.title }}</h3>
      <p>{{ review.description }}</p>
    </div>
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
      review:null
    };
  },
  methods: {
    fetchRecordById(id) {
      fetch('../../../movies.json')
        .then(response => response.json())
        .then(data => {
          const record = data.find(record => record.id === id);
          this.movie = record ? record : null;
          const record1 = this.movie.reviews.find(record1 => record1.id === parseInt(this.$route.params.reviewid));
          this.review = record1 ? record1 : null;
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
.movie-detail
{
  width: 700px;
    margin: auto;
    padding: 50px;
    border: 2px solid #ccc
}
</style>
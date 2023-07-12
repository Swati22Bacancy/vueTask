<template>
  <div>
    <div v-if="movie" class="movie-detail">
      <h2 style="color: brown;">{{ movie.name }}</h2>
      <img :src="movie.thumbnailUrl">
      <p>{{ movie.description }}</p>
      <h5 style="text-align: right;"> <router-link :to="{ name: 'review', params: { id : movie.id  }}" >Reviews</router-link></h5>
    </div>
    <div v-else>
      <p>No record found.</p>
    </div>
  </div>
</template>

<script>
export default {
  props:
  {
    movieList:
    {
      type:Array,
    }
  },
  data() {
    return {
      movie: null
    };
  },
  mounted() {
    this.fetchRecordById(this.$route.params.id);
  },
  methods: {
    // fetchRecordById(id) {
    //   fetch('../movies.json')
    //     .then(response => response.json())
    //     .then(data => {
    //       const record = data.find(record => record.id === id);
    //       this.movie = record ? record : null;
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
    fetchRecordById(id)
    {
      this.movie=this.movieList.filter((object)=>
        {
          return object.id== id;
        }
      )
      this.movie= this.movie[0];
    }
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

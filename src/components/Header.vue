<template>
  <div>
    <header>
      <h1>Logo</h1>
      <input type="text" v-model="searchString" placeholder="Search movies" @input="manageSearch" />
      <ul style="list-style-type: none;text-align: right;">
        <li @click="changeLayout('MovieList')">List View</li>
        <li @click="changeLayout('MovieGrid')">Grid View</li>
        <li @click="changeLayout('MoviePoster')">Poster View</li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      searchString: ''
    }
  },
  methods: {
    manageSearch() {
      this.$emit('filter', this.searchString.trim().toLowerCase())
    },
    changeLayout(layoutPattern) {
      this.$emit('layout', layoutPattern)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}
</style>

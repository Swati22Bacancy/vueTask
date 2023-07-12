<template>
  <div>
    <ul style="list-style-type: none;text-align: right;">
      <li @click="changeLayout('list')">List View</li>
      <li @click="changeLayout('grid')">Grid View</li>
      <li @click="changeLayout('poster')">Poster View</li>
    </ul>
    <div v-if="layoutPattern=='list'">
      <slot name="list-view" :movies="movies" />
    </div>
    <div v-if="layoutPattern=='grid'">
      <slot name="grid-view" :movies="movies" />
    </div>
    <div v-if="layoutPattern=='poster'">
      <slot name="poster-view" :movies="movies" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieData',
  data() {
    return {
      showListView: true,
      layoutPattern: 'list'
    }
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeLayout(layoutPattern) {
      this.layoutPattern = layoutPattern;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

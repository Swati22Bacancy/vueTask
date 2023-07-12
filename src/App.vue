<template>
  <nav>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
      <li v-if="isAuthenticated"><router-link to="/movies">Movies</router-link></li>
      <button @click="logout" v-if="isAuthenticated" class="btn btn-danger">Logout</button>
      <!-- <li class="has-submenu">
        <a href="#">Technologies</a>
        <ul class="submenu">
          <li><router-link to="/technology/laravel">Laravel</router-link></li>
          <li><router-link to="/technology/vue">Vue</router-link></li>
        </ul>
      </li> -->
    </ul>
  </nav>
  <router-view/>
</template>
<script>
export default {
  computed: {
    isAuthenticated() {
      return localStorage.getItem('isAuthenticated');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated');
      this.isLogin=''
      location.href = '/login';
      //this.$router.push('/login');
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 2%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  display: inline-block;
  position: relative;
}

.menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.submenu li {
  display: block;
}

.menu li.has-submenu:hover .submenu {
  display: block;
}
</style>

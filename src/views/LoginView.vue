<template>
  <div class="login-div">
    <p v-if="error" class="error">{{ error }}</p>
    <input type="text" v-model="username" placeholder="Username" class="form-control mb-3" />
    <input type="password" v-model="password" placeholder="Password" class="form-control mb-3" />
    <button @click="login" class="btn btn-primary">Login</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error:''
    };
  },
  methods: {
    login() {
      fetch('users.json') 
        .then(response => response.json())
        .then(data => {
          const user = data.find(user => user.username === this.username && user.password === this.password);
          
          if (user) {
            localStorage.setItem('isAuthenticated', true);
            location.href = '/movies';
            //this.$router.push('/movies');
          } else {
            this.error='Invalid username or password';
            console.error('Invalid username or password');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
<style scoped>
.login-div
{
  width:500px;
  margin: auto;
  padding: 40px;
  background: #cccccc3d;
}
.error
{
  color: red;
}
</style>
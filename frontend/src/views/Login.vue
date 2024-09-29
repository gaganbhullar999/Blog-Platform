
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['login']),
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', {
            email: this.email,
            password: this.password
          });
          this.login(response.data.token);
          this.$router.push('/'); // Redirect to home after login
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
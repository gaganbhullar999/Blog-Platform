
<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async handleRegister() {
        try {
          await axios.post('http://localhost:5000/api/auth/register', {
            name: this.name,
            email: this.email,
            password: this.password
          });
          this.$router.push('/login'); // Redirect to login after registration
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
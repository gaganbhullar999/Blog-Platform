<template>
    <div>
      <h1>Blog Posts</h1>
      <div v-for="post in posts" :key="post._id">
        <router-link :to="'/post/' + post._id">{{ post.title }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        posts: []
      };
    },
    created() {
      axios.get('http://localhost:5000/api/posts')
        .then(response => {
          this.posts = response.data;
        });
    }
  };
  </script>
  
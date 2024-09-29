<template>
    <div>
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
      <h2>Comments</h2>
      <div v-for="comment in post.comments" :key="comment._id">{{ comment.text }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        post: {}
      };
    },
    created() {
      axios.get(`http://localhost:5000/api/posts/${this.$route.params.id}`)
        .then(response => {
          this.post = response.data;
        });
    }
  };
  </script>
  
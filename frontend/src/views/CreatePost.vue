
<template>
    <div>
      <h1>Create Post</h1>
      <form @submit.prevent="handleCreatePost">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="title" required />
        </div>
        <div>
          <label for="content">Content:</label>
          <quill-editor v-model="content" :options="editorOptions"></quill-editor>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import { quillEditor } from 'vue-quill-editor';
  import axios from 'axios';
  
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        title: '',
        content: '',
        editorOptions: {
          // Quill editor options (customize as needed)
          theme: 'snow'
        }
      };
    },
    methods: {
      async handleCreatePost() {
        try {
          const response = await axios.post('http://localhost:5000/api/posts', {
            title: this.title,
            content: this.content
          });
          this.$router.push('/'); // Redirect to home after creating post
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
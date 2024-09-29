
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    posts: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setToken', token);
    },
    fetchPosts({ commit }) {
      // Fetch posts from the backend and commit to state
      axios.get('http://localhost:5000/api/posts')
        .then(response => {
          commit('setPosts', response.data);
        });
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    allPosts: state => state.posts
  }
});

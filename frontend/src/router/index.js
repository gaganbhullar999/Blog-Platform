import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import PostDetail from '../views/PostDetail.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CreatePost from '../views/CreatePost.vue';

Vue.use(Router);

const routes = [
    { path: '/', component: Home },
    { path: '/post/:id', component: PostDetail },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/create', component: CreatePost },
];

export default new Router({ routes });

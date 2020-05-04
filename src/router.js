import VueRouter from 'vue-router';
import {connect} from 'redux-vue';
import {scrollBehavior} from './helpers/tools';

import * as appActions from './actions/app';
import HomePage from './pages/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/profile',
    meta: {
      requiresAuth: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ './pages/ProfilePage'),
  },
  { path: '*', redirect: '/' }
];

const RouterComponent = {
  props: ['user', 'clearErrors'],
  created () {
    if (this.user.token) {
      // set auth token
    }
    this.authGuard();
    this.clearErrors();
  },

  watch: {
    '$route': 'authGuard',
  },

  methods: {
    authGuard () {
      const isAuthorized = !!(this.user.token && this.user.model);

      if (this.$route.meta.requiresAuth && !isAuthorized) {
        this.$router.push({
          path: '/login',
          query: { redirect: this.$route.path }
        });
      }
    }
  },

  /**
   *
   * @param h
   * @returns {*}
   */
  render (h) {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/profile">Profile</router-link>
        </div>
        <router-view/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapActionToProps(dispatch) {
  return {
    clearErrors: () => dispatch(appActions.clearErrors()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(RouterComponent);

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes
});

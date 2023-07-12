import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import TechnologyView from '../views/TechnologyView.vue'
import LaravelView from '../views/technology/LaravelView.vue'
import VueView from '../views/technology/VueView.vue'
import MovieBase from '../views/MovieBase.vue'
import MovieView from '../views/MovieView.vue'
import MovieDetailsView from '../views/MovieDetailsView.vue'
import ReviewView from '../views/ReviewView.vue'
import ReviewDetailView from '../views/ReviewDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  // {
  //   path: '/movies',
  //   name: 'movies',
  //   component: MovieView,
  //   meta: { requiresAuth: true } 
  // },
  {
      path: "/movies",
      name: 'moviebase',
      component: MovieBase,
      meta: { requiresAuth: true } ,
      children: [
        {
          path: '',
          name: 'movielist',
          component: MovieView,
          meta: { requiresAuth: true } ,
        },
        {
          path: '/movies/:id',
          name: 'moviedetails',
          component: MovieDetailsView,
          meta: { requiresAuth: true } ,
        },
        {
          path: '/movies/:id/reviews',
          name: 'review',
          component: ReviewView,
          meta: { requiresAuth: true } ,
        },
        {
          path: '/movies/:id/reviews/:reviewid',
          name: 'reviewdetails',
          component: ReviewDetailView,
          meta: { requiresAuth: true } ,
        },
      ]
    },
  {
    path: "/technology",
    name: 'technology',
    component: TechnologyView,
    children: [
      {
        path: 'laravel',
        name: 'laravel',
        component: LaravelView
      },
      {
        path: 'vue',
        name: 'vue',
        component: VueView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router

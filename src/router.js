import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import StudentShow from './views/StudentShow.vue'
import StudentEdit from './views/StudentEdit.vue'
import Logout from "./views/Logout.vue"
import StudentNew from "./views/StudentNew.vue"


Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },

    { path: '/login', name: 'login', component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: '/students/new', name: 'student-new', component: StudentNew },
    { path: '/students/:id', name: 'student-show', component: StudentShow },
    { path: '/students/:id/edit', name: 'student-edit', component: StudentEdit },
    

  ]
});

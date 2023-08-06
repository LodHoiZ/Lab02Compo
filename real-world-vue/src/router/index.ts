import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import MenuListView from '../views/MenuListView.vue'
import StudentListView from '../views/StudentListView.vue'
import EventDetailView from '../views/EventDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuListView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView
    },
    {
      path: '/events/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router

import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Quizzes from '@/views/Quizzes.vue'
import Quiz from '@/views/Quiz.vue'
import Results from '@/views/Results.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    component: Quizzes,
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/results/:id',
    name: 'Results',
    component: Results,
  },
]

export default routes

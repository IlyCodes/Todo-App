import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import TaskDoneView from '@/views/TaskDoneView.vue'
import TodolistView from '@/views/TodolistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/task_done',
      name: 'task_done',
      component: TaskDoneView
    },
    {
      path: '/todo_list',
      name: 'todo_list',
      component: TodolistView
    }
  ]
})

export default router

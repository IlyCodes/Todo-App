<template>
  <section class="todolist">

    <span>TODO LIST</span>
    <br><br>

    <draggable v-model="todoList" tag="div" itemKey>

      <template #item="{ element: todo }">

        <div :key="todo.createdAt" :class="`${todo.done && 'done' ? 'todo-item2' : 'todo-item'}`">
          <span class="material-symbols-outlined">
            drag_handle
          </span>
          <input type="text" v-model="todo.content" />
          <input type="checkbox" v-model="todo.done" />
          <span @click="removeTodo(todo)" class="material-symbols-outlined delete">delete</span>
        </div>

      </template>

    </draggable>

  </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import draggable from "vuedraggable"

defineProps({
  todo_asc: Array
})

const todoList = ref([])
const emit = defineEmits()

const removeTodo = (todo) => {
  todoList.value = todoList.value.filter((t) => t !== todo)
  emit('removeTodo', todoList)
}

watch(todoList, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

onMounted(() => {
  todoList.value = JSON.parse(localStorage.getItem('todos')) || []
})

</script>

<style></style>
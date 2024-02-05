<template>
    <section class="task-done">

        <span>Task Done</span>
        <br><br>

        <div v-for="(todo, i) in todo_done" :key="i" class="todo-done">

            <div class="content">{{ todo.content }}</div>
            <span @click="removeTodo(todo)" class="material-symbols-outlined delete">delete</span>

        </div>

    </section>
</template>

<script setup>
import { onMounted, ref } from "vue"

var todo_done = ref([])
const filtredTodo = ref([])

defineProps({
    todo_asc: Array
})

const emit = defineEmits()

const removeTodo = (todo) => {
    todo_done.value = todo_done.value.filter( (t) => t !== todo )
    filtredTodo.value = filtredTodo.value.filter( (t) => t !== todo )
    emit('removeTodo', filtredTodo)
}

onMounted(() => {
    todo_done.value = JSON.parse(localStorage.getItem('todos')) || []
    filtredTodo.value = todo_done.value
    todo_done.value = todo_done.value.filter( (todo) => todo.done == true )
})

</script>
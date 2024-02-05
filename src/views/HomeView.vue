<template>
  <div class="home">
    <section>

      <div class="greeting">

        <h1>
          What's up,
          <input type="text" placeholder="Name" v-model="name" />
        </h1>

      </div>

      <form @submit.prevent="addTodo">

        <div class="create-todo">

          <h3>CREATE TODO</h3>
          <span>What's on your todo list?</span><br>
          <input type="text" placeholder="e.g. make a video" v-model="input_content" />

        </div><br>

        <div class="category">

          <span>Pick a category</span>
          <div>
            <input type="radio" name="category" value="business" v-model="input_category" /><b>Business</b>
            <input type="radio" name="category" value="personal" v-model="input_category" /><b>Personal</b>
          </div>

        </div><br>

        <div class="addTodo">
          <input type="submit" value="Add Todo">
        </div>

      </form>

    </section><br>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

defineProps({
  todo_asc: Array
})

const emit = defineEmits()

watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

watch(name, (newVal) => localStorage.setItem('name', newVal))

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

const addTodo = () => {

  if (input_content.value.trim() === '' || input_category.value === null) {
    return
  }

  todos.value.push({

    content: input_content.value,
    category: input_category.value,
    createdAt: new Date().getTime(),
    done: false

  })

  input_content.value = ''
  input_category.value = null
  emit('addTodo', todos)
}

</script>
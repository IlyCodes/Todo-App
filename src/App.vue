<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todo_asc = computed(() => todos.value.sort((a, b) => {

	return b.createdAt - a.createdAt

}))

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

watch(name, (newVal) => localStorage.setItem('name', newVal))


onMounted(() => {
	name.value = localStorage.getItem('name') || ''
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

const addTodo = () => {

	if ( input_content.value.trim() === '' || input_category.value === null ) {
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

}

const removeTodo = (todo) => {
	todos.value = todos.value.filter( t => t !== todo)
}


</script>

<template>
	<main class="app">

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

		<section class="todolist">

			<span>TODO LIST</span>
			<br><br>

			<div v-for="(todo, i) in todo_asc" :key="i" :class="`${todo.done && 'done' ? 'todo-item' : '' }`">

				<input type="checkbox" v-model="todo.done" />
				<input type="text" v-model="todo.content" />
				<button @click="removeTodo(todo)">DELETE</button><br>

			</div>

		</section>

	</main>
</template>

<style>

.greeting input {
	
	background: transparent;
	border: none;
	font-size: large;
	font-weight: 600;
	color: grey;

}

.greeting input:focus {
	
	outline: none;

}

.todo-item {

	display: flex;
	align-items: center;
	width: max-content;
	background-color: lightgreen;
	padding: 2px;
	border-radius: 2px;

}

.todo-item input {
	background: transparent;
	border: none;
	text-decoration: line-through;
}

.todo-item input:focus {
	outline: none;
	border: none
}

.todo-item button {
	font-size: x-small;
}

</style>

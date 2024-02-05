<template>

	<div class="app">

		<Sidebar :toggle="ToggleSidebar" :class="`${ is_expanded ? 'expanded' : 'not_expanded' }`" />

		<div class="main">
			<RouterView
				:todo_asc="todo_asc"
				@addTodo="updateTodo($event)"
				@removeTodo="deleteTodo($event)"
			/>
		</div>

	</div>

</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import { onMounted, ref, watch } from 'vue';
import { RouterView } from 'vue-router'

var todo_asc = ref([])

const is_expanded = ref(false)

const ToggleSidebar = () => {
	is_expanded.value = !is_expanded.value
}

const updateTodo = (arg) => {
	todo_asc.value = arg.value
}

const deleteTodo = (arg) => {
	todo_asc.value = arg.value
}

watch(todo_asc, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

onMounted(() => {
	todo_asc.value = JSON.parse(localStorage.getItem('todos')) || []
})

</script>


<style lang="scss">

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: black;
	font-family: 'Roboto', sans-serif;
}

.app {
	display: flex;
}

.main {
	padding: 10px;
}

span {
	&.menu {
		text-align: center;
	}
    cursor: pointer;
	&.delete {
		font-size: 16px;
		color: red;
	}
}

aside {
	width: 130px;
	height: 100vh;
	display: flex;
    flex-direction: column;
    background-color: gray;
}

.not_expanded {
	width: 40px;
	span{
		&.menu_open {
			display: none;
		}
		&.icon {
			font-size: x-large;
		}
	}
	p {
        &.viewName {
            display: none;
        }
    }
}

.expanded {
	position: relative;
    left: 0; top: 0;
    span{
		&.menu {
			visibility: hidden;
		}
		&.menu_open {
			position: absolute;
			right: 0; top: 0;
			cursor: pointer;
		}
	}
	div {
		&.navbar {
			margin-left: 15px;
			nav {
				align-items: flex-start;
			}
		}
	}
}

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

.todo-item
{
	display: flex;
	align-items: center;
	padding: 2px;
}

.todo-item2
{
	display: none;
}

.todo-done {

	display: flex;
	align-items: center;
	width: max-content;
	background-color: lightgreen;
	padding: 2px;
	border-radius: 2px;
	.content {
		margin-right: 20px;
		text-decoration: line-through;
	}
	button {
		font-size: x-small;
	}
}

</style>

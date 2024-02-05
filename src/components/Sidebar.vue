<template>
    <aside>
        <span @click="toggle" class="menu material-symbols-outlined">
            menu
        </span>
        <span @click="toggle" class="menu_open material-symbols-outlined">
            menu_open
        </span>
        <div class="navbar">

            <nav>
                <RouterLink class="routerLink" to="/">

                    <div class="link">
                        <span class="icon material-symbols-outlined">
                            home
                        </span>
                        <p class="viewName">
                            Home
                        </p>
                    </div>
                </RouterLink>
                <RouterLink class="routerLink" to="/category">

                    <div class="link">
                        <span class="icon material-symbols-outlined">
                            category
                        </span>
                        <p class="viewName">
                            Category
                        </p>
                    </div>
                </RouterLink>
                <RouterLink class="routerLink" to="/todo_list">

                    <div class="link">
                        <span class="icon material-symbols-outlined">
                            list_alt
                        </span>
                        <p class="viewName">
                            Todolist
                        </p>
                    </div>
                </RouterLink>
                <RouterLink class="routerLink" to="/task_done">

                    <div class="link">
                        <span class="icon material-symbols-outlined">
                            fact_check
                        </span>
                        <p class="viewName">
                            Tasks done
                        </p>
                    </div>
                </RouterLink>
            </nav>


        </div>
    </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    toggle: Function
})

</script>

<style lang="scss" scoped>
div {
    &.navbar {
        margin: 50px 0 0 0;
        nav {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}

.routerLink {
    margin: 0 0 15px 0;
    text-decoration: none;

    div {
        &.link {
            display: flex;
            align-items: center;
        }
    }

    span {
        margin-top: -2px;
        font-size: larger;
    }

    p {
        &.viewName:hover {
            text-decoration: underline;
        }
    }
}
</style>
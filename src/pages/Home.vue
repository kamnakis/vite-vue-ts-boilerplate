<template>
  <div class="bg-yellow-50">
    <div class="container mx-auto">
      <form  @submit="addTodo" class="mt-4">
        <input type="text" v-model="newTodo">
        <button type="submit" class="ml-2">Add</button>
      </form>

      <div class="mt-4">
        <div
          v-for="(todo, index) in todos"
          :key="index"
          class="flex space-x-2 items-center"
        >
          <button class="text-red-600" @click="removeTodo(index)">X</button>
          <span>{{ todo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '~/store'

export default defineComponent({
  name: 'Home',
  setup () {
    const store = useStore()

    const todos = computed(() => {
      return store.getters['todo/todos']
    })

    const newTodo = ref('')

    const addTodo = () => {
      store.dispatch('todo/addTodo', newTodo.value)
      newTodo.value = ''
    }

    const removeTodo = (index: number) => {
      store.dispatch('todo/removeTodo', index)
    }

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo
    }
  }
})
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      {{ selectedOption }}
      <span class="caret"></span>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in props.options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(['selectedOption','options'])

const emit = defineEmits(['goToProduct'])

const selectOption = (option) => {
  emit('goToProduct', option)
}

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>
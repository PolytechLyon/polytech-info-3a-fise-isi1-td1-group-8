<script setup>
import { ref } from "vue";
import useTodoList from "../composables/useTodoList.js";

const text = ref("");

const {
    addItem,
} = useTodoList();

function add() {
    addItem(text.value);
    text.value = "";
}


</script>
<template>
    <div>
        <label for="new-item-input">Nouvel item</label>
        <input v-model="text" id="new-item-input" @keyup.enter="add"/>
        <button @click="add">Ajouter</button>
    </div>
</template>
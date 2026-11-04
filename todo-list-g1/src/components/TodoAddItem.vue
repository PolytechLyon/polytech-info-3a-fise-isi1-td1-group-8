<script setup>
import { ref } from "vue";
import useTodoList from "../composables/useTodoList.js";

const { addItem } = useTodoList();


const nouvelItemText = ref("");

function add() {
    addItem(nouvelItemText.value);
    nouvelItemText.value = "";
}

</script>

<template>
    <div>
        <label>Nouvel item</label>
        <input v-model="nouvelItemText" @keyup.enter="add" />
        <button @click="add">Ajouter</button>
    </div>
</template>
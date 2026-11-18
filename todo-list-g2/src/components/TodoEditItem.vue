<script setup>
import { ref, watch } from "vue";
import useTodoList from "../composables/useTodoList.js";

const text = ref("");

const {
    itemUnderEdit,
    updateItem,
    resetEdit,
} = useTodoList();

watch([itemUnderEdit], () => text.value = itemUnderEdit.value.text);

function update() {
    updateItem(text.value);
    resetEdit();
}

function cancel() {
    resetEdit();
}


</script>
<template>
    <div v-if="itemUnderEdit">
        <label for="edit-item-input">Mise à jour d'item</label>
        <input v-model="text" id="edit-item-input" @keyup.enter="update"/>
        <button @click="update">Modifier</button>
        <button @click="cancel">Annuler</button>
    </div>
</template>
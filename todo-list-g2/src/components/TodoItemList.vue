<script setup>
import useTodoList from "../composables/useTodoList.js";

const {
    items,
    removeItem,
    editItem,
} = useTodoList();

</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <span>{{ item.text }}</span>
            <button @click='removeItem(item.id)'>Supprimer</button>
            <button @click='editItem(item.id)'>Modifier</button>
        </li>
    </ul>
</template>
<script setup>
import useTodoList from "../composables/useTodoList.js";

const { items, removeItem } = useTodoList();

</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <span>{{ item.text }}</span>
            <button @click="removeItem(item.id)">Supprimer</button>
        </li>
    </ul>
</template>
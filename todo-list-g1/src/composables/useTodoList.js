import { ref } from "vue";

const items = ref([]);

let lastId = 0;

function addItem(text) {
    const newItem = {
        id: lastId++,
        text,
    };
    items.value = [...items.value, newItem];
}

function removeItem(id) {
    items.value = items.value.filter(item => item.id !== id);
}

export default function useTodoList() {
    return {
        items,
        addItem,
        removeItem,
    };
}
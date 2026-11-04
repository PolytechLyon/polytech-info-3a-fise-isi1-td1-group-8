import { ref, readonly } from "vue";

const items = ref([]);
const itemUnderEdit = ref();

let lastId = 0;

function addItem(text) {
    const newItem = {
        id: lastId++,
        text: text,
    };
    items.value = [...items.value, newItem];
}

function removeItem(id) {
    items.value = items.value.filter(item => item.id !== id);
}

function editItem(id) {
    itemUnderEdit.value = items.value.find(item => item.id === id);
}

function updateItem(text) {
    itemUnderEdit.value.text = text;
}

function resetEdit() {
    itemUnderEdit.value = undefined;
}

export default function useTodoList() {
    return {
        items: readonly(items),
        addItem,
        removeItem,
        editItem,
        itemUnderEdit: readonly(itemUnderEdit),
        updateItem,
        resetEdit,
    };
}
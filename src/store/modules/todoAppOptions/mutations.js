const addTodoItem = (state, todoItem) => {
    const obj = {item : todoItem, completed : false}
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeTodoItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1);
}

const toggleTodoItem = (state, payload) => {
    // anti pattern. 하위 오브젝트에서 직접 상위 오브젝트값 참조
    // todoItem.completed = ! todoItem.completed;
    let todoItem = payload.todoItem;
    let index = payload.index;
    state.todoItems[index].completed = !state.todoItems[index].completed
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const clearTodoItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addTodoItem , removeTodoItem , toggleTodoItem, clearTodoItem}
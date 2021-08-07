import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if ( localStorage.length > 0 ){
            for( let i = 0 ; i < localStorage.length ; i ++) {
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
                    let obj = JSON.parse( localStorage.getItem( localStorage.key(i) ));
                    // scope가 다르기 때문에 this로 접근 불가
                    // this.todoItems.push( obj );
                    arr.push( obj );
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state : {
        todoItems : storage.fetch()
    },
    getters : {
        storedTodoItems(state){
            return state.todoItems;
        }
    },
    mutations : {
        addTodoItem(state, todoItem){
            const obj = {item : todoItem, completed : false}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeTodoItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        toggleTodoItem(state, payload){
            // anti pattern. 하위 오브젝트에서 직접 상위 오브젝트값 참조
            // todoItem.completed = ! todoItem.completed;
            let todoItem = payload.todoItem;
            let index = payload.index;
            state.todoItems[index].completed = !state.todoItems[index].completed
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearTodoItem(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});

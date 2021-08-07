import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from "@/store/modules/todoApp";

Vue.use(Vuex);



export const store = new Vuex.Store({
    modules : {
        todoApp
    }
});

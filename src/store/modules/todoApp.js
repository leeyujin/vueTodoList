import * as getters from './todoAppOptions/getters'
import * as mutations from './todoAppOptions/mutations'

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

const state = {
    todoItems : storage.fetch()
}

export default {
    state, getters, mutations
}


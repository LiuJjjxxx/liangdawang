import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        count:{},
    },
    mutations:{
        getCount(state,count){
            state.count = count
        },
    }
})
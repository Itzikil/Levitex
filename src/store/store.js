import Vuex from 'vuex'
import { userStore } from './user.store.js'

export const store = Vuex.createStore({
    strict:true,
    modules:{
    userStore,
    }
})
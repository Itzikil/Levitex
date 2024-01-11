import Vuex from 'vuex'
import { userStore } from './user.store.js'
import { orderStore } from './order.store.js'
import { textileStore } from './textile.store.js'

export const store = Vuex.createStore({
    strict:true,
    modules:{
    userStore,
    orderStore,
    textileStore
    }
})
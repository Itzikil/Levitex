import { textileService } from '../services/textile-service'

export const textileStore = {
    state: {
        textiles: [],
        cart: [],
        filterBy: {
            name: ''
        }
    },
    getters: {
        textiles({ textiles }) { return textiles },
        cart({ cart }) { return cart },
    },
    mutations: {
        setTextiles(state, { textiles }) {
            state.textiles = textiles
        },
        setAddToCart(state, { cartItem }) {
            state.cart.push(cartItem)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
    },
    actions: {
        async loadTextiles({ commit , state }) {
            try {
                const textiles = await textileService.loadtextiles(state.filterBy)
                commit({ type: 'setTextiles', textiles })
            } catch (err) {
                console.log('textileStore: Error in loadTextiles', err)
                throw err
            }
        },
        async addToCart({ commit }, { productId }) {
            try {
                const cartItem = await textileService.getTextileById(productId)
                commit({ type: 'setAddToCart', cartItem })
            } catch (err) {
                console.log('textileStore: Error in loadTextiles', err)
                throw err
            }
        },
        async setFilter({ commit, dispatch }, { filterBy }) {
            try {
                commit({ type: 'setFilter', filterBy })
                dispatch({ type: 'loadTextiles' })
            } catch (err) {
                console.log('Cannot load gig', err);
                throw err;
            }
        },
    }
}
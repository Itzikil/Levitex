import { textileService } from '../services/textile-service'

export const textileStore = {
    state: {
        textiles: [],
        cart:[]
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
    },
    actions: {
        async loadTextiles({ commit }) {
            try {
                const textiles = await textileService.getTextiles()
                commit({ type: 'setTextiles', textiles })
            } catch (err) {
                console.log('textileStore: Error in loadTextiles', err)
                throw err
            }
        },
        async addToCart({ commit }, {productId}) {
            try {
                const cartItem = await textileService.getTextileById(productId)
                commit({ type: 'setAddToCart', cartItem })
            } catch (err) {
                console.log('textileStore: Error in loadTextiles', err)
                throw err
            }
        },
    }
}
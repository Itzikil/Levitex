import { orderService } from '../services/order-service'

export const orderStore = {
    state: {
        orders: [],
        cart: [],
    },
    getters: {
        orders({ orders }) { return orders },
        cart({ cart }) { return cart },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        setAddToCart(state, { product }) {
            state.cart.push(product)
        },
        addOrder(state, { order }) {
            state.orders.push(order)
            state.cart = []
        }
    },
    actions: {
        async loadOrders({ commit}) {
            try {
                const orders = await orderService.query()
                console.log(orders);
                commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadTextiles', err)
                throw err
            }
        },
        async addToCart({ commit }, { product}) {
            try {
                commit({ type: 'setAddToCart', product })
            } catch (err) {
                console.log('textileStore: Error in loadTextiles', err)
                throw err
            }
        },
        async addOrder({commit , state , dispatch} ) {
            try {
                var order = await orderService.save(state.cart)
                commit({ type: 'addOrder', order })
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        },
    }
}
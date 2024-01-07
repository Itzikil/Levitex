import { textileService } from '../services/textile-service'

export const textileStore = {
    state: {
        textiles: [],
        loggedinTextile: null,
    },
    getters: {
        textiles({ textiles }) { return textiles },
        loggedinTextile({ loggedinTextile }) { return loggedinTextile },
    },
    mutations: {
        setLoggedinTextile(state, { textile }) {
            state.loggedinTextile = (textile) ? { ...textile } : null
        },
        setTextiles(state, { textiles }) {
            state.textiles = textiles
        },
    },
    actions: {
        async login({ commit }, { textileInfo }) {
            try {
                const textile = await textileService.login(textileInfo)
                console.log(textile);
                commit({ type: 'setLoggedinTextile', textile })
                console.log(this.state.textileStore);
                return textile
            } catch (err) {
                console.log('textileStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { textileInfo }) {
            try {
                const textile = await textileService.signup(textileInfo)
                commit({ type: 'setLoggedinTextile', textile })
                return textile
            } catch (err) {
                console.log('textileStore: Error in signup', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await textileService.logout()
                commit({ type: 'setLoggedinTextile', textile: null })
            } catch (err) {
                console.log('textileStore: Error in logout', err)
                throw err
            }
        },
        async loadTextiles({ commit }) {
            try {
                const textiles = await textileService.getTextiles()
                commit({ type: 'setTextiles', textiles })
            } catch (err) {
                console.log('textileStore: Error in loadTextiles', err)
                throw err
            }
        },
        async setLoggedinTextile({ commit }) {
            try {
                const textile = textileService.getLoggedinTextile()
                commit({ type: 'setLoggedinTextile', textile })
            } catch (err) {
                console.log('textileStore: Error in setLoggedinTextile', err)
                throw err
            }
        },
    }
}
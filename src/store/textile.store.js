import { textileService } from '../services/textile-service'

export const textileStore = {
    state: {
        textiles: [],
        filterBy: {
            name: ''
        }
    },
    getters: {
        textiles({ textiles }) { return textiles },
    },
    mutations: {
        setTextiles(state, { textiles }) {
            state.textiles = textiles
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
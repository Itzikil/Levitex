import { userService } from '../services/user-service'

export const userStore = {
    state: {
        users: [],
        loggedinUser: {username:'itzik', password: '123'},
    },
    getters: {
        users({ users }) { return users },
        loggedinUser({ loggedinUser }) { return loggedinUser },
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.loggedinUser = (user) ? { ...user } : null
        },
        setUsers(state, { users }) {
            state.users = users
        },
    },
    actions: {
        async login({ commit }, { userInfo }) {
            try {
                const user = await userService.login(userInfo)
                console.log(user);
                commit({ type: 'setLoggedinUser', user })
                console.log(this.state.userStore);
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userInfo }) {
            try {
                const user = await userService.signup(userInfo)
                commit({ type: 'setLoggedinUser', user })
                return user
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            try {
                const users = await userService.getUsers()
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async setLoggedinUser({ commit }) {
            try {
                const user = userService.getLoggedinUser()
                commit({ type: 'setLoggedinUser', user })
            } catch (err) {
                console.log('userStore: Error in setLoggedinUser', err)
                throw err
            }
        },
    }
}
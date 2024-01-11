import { utilService } from "./util.service"

export const userService = {
    signup,
    getUser,
    getLoggedinUser,
    logout,
    getUsers,
    login
}

const USER_KEY = 'user'
const LOGGEDIN_KEY = 'loggedinUser'


function signup(user) {
    var users = utilService.loadFromStorage(USER_KEY) || []
    if (users.filter(({ username }) => username === user.username).length) return
    user._id = utilService.makeId()
    if (users) {
        users.push(user)
        utilService.saveToStorage(USER_KEY, users)
    } else utilService.saveToStorage(USER_KEY, [user])
    login(user)
    return user
}

function getUser(userId) {
    var users = getUsers()
    var user = users.filter(({ _id }) => _id === userId)
    return user
}

function getUsers() {
    return utilService.loadFromStorage(USER_KEY)
}

async function login(userInfo) {
    var users = getUsers()
    var user = users.filter(({ username }) => username === userInfo.username)[0]
    if (!user || user.password !== userInfo.password) throw new Error()  
    utilService.saveToStorage(LOGGEDIN_KEY, user) || ''
    return user
}

function logout() {
    console.log('logout');
    localStorage.removeItem(LOGGEDIN_KEY)
}

function getLoggedinUser() {
    return utilService.loadFromStorage(LOGGEDIN_KEY)
}
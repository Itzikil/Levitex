
import { storageService } from './storage-service.js'
import { utilService } from './util.service.js'
import { userService } from './user-service.js'

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
    addOrderMsg,
    queryUrl,
    getBuyerOrders,
    getSellerOrders,
}

const STORAGE_KEY = 'order'

// window.cs = orderService

async function query(filterBy) {
    var orders = await storageService.query(STORAGE_KEY)
    return orders
}

async function queryUrl() {
    var orders = await storageService.query(STORAGE_KEY)
    var urlList = []
    orders.map(order => {
        urlList = urlList.concat(order.imgUrl)
    })
    return urlList
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function getBuyerOrders(userId) {
    var orders = await storageService.query(STORAGE_KEY)
    return orders.filter(order => order.buyer._id === userId)
}

async function getSellerOrders(userId) {
    var orders = await storageService.query(STORAGE_KEY)
    return orders.filter(order => order.seller._id === userId)
}

async function remove(orderId) {
    let user = userService.getLoggedinUser()
    let idx = user.orders.findIndex(order => order._id === orderId)
    user.orders.splice(idx, 1)
    userService.update(user)
    await storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    var savedOrder = {}
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)
    } else {
        // Later, owner is set by the backend
        const user = userService.getLoggedinUser()
        savedOrder._id = utilService.makeId()
        savedOrder.items = order
        savedOrder.buyer = user ? { _id: user._id, name: user.name } : { _id:123, name: 'Guest' }
        savedOrder.createdAt = new Date().toDateString(),
        savedOrder.status = 'Pending'
        savedOrder = await storageService.post(STORAGE_KEY, savedOrder)
    }
    return savedOrder
}

async function addOrderMsg(orderId, txt) {
    // Later, this is all done by the backend
    const order = await getById(orderId)
    if (!order.msgs) order.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    order.msgs.push(msg)
    await storageService.put(STORAGE_KEY, order)

    return msg
}

function getEmptyOrder() {
    return {
        title: 'I will',
        price: { basic: '' },
        description: '',
        owner: {  },
    }
}

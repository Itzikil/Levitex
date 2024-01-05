import { utilService } from "./util.service"

export const textileService = {
    loadCategories,
    loadtextiles,
    getTextile
}
const STORAGE_KEY = 'textile'
var gTextiles = utilService.loadFromStorage(STORAGE_KEY) || demoData()

function loadCategories() {
    var categories = [
        {
            imgUrl: 'https://images.unsplash.com/photo-1593494042793-d04d43927eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            , name: 'Bed sheets',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=517&q=80'
            , name: 'Blankets',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            , name: 'Towels',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1597949501530-833e5c97bf4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            , name: 'Pillows',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1524404886881-0beaa13c7b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
            , name: 'Outlet',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
            , name: 'Curtains',
        },
    ]
    return categories
}

function loadtextiles(category = '') {
    const textiles = gTextiles.filter((tex) => tex.category === category)
    return textiles
}

function getTextile(textileId) {
    return gTextiles.find(({ _id }) => textileId === _id)
}

function demoData() {
    var textiles = []
    for (let i = 0; i < 5; i++) {
        textiles.push(
            {
                imgUrl: 'https://images.unsplash.com/photo-1593494042793-d04d43927eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                , name: 'Bed sheet', price: utilService.getRandomIntInclusive(50, 400), category: 'Bed sheets', _id: utilService.makeId(),
                desc: utilService.makeLorem()
            },
            {
                imgUrl: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=517&q=80'
                , name: 'Blanket', price: utilService.getRandomIntInclusive(50, 400), category: 'Blankets', _id: utilService.makeId(),
                desc: utilService.makeLorem()
            },
            {
                imgUrl: 'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                , name: 'Towel', price: utilService.getRandomIntInclusive(50, 400), category: 'Towels', _id: utilService.makeId(),
                desc: utilService.makeLorem()
            },
            {
                imgUrl: 'https://images.unsplash.com/photo-1597949501530-833e5c97bf4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                , name: 'Pillow', price: utilService.getRandomIntInclusive(50, 400), category: 'Pillows', _id: utilService.makeId(),
                desc: utilService.makeLorem()
            },
            {
                imgUrl: 'https://images.unsplash.com/photo-1524404886881-0beaa13c7b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
                , name: 'Outlet', price: utilService.getRandomIntInclusive(50, 400), category: 'Outlet', _id: utilService.makeId(),
                desc: utilService.makeLorem()
            },
            {
                imgUrl: 'https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                , name: 'Curtain', price: utilService.getRandomIntInclusive(50, 400), category: 'Curtains', _id: utilService.makeId(),
                desc: utilService.makeLorem()
            },
        )
    }
    utilService.saveToStorage(STORAGE_KEY, textiles)
    return textiles
}
const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 200 },
    { name: 'Album',    price: 10 },
    { name: 'Book',     price: 5 },
    { name: 'Phone',    price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

const filteredItems = items.filter((item) => { // menyaring data
    return item.price <= 100
})

const filteredNames = items.map((item) => { // menampilkan salah satu object item
    return item.name
})

const foundItem = items.find((item) => { // menemukan salah satu item
    return item.name === 'Book'
})

items.forEach((item) => { // menampilkan semua  item
    // console.log(item.name)
})

// const hasInexpensiveItems = items.every((item) => { // semua nya harus < 1000
//     return item.price <= 1000
// })

const hasInexpensiveItems = items.some((item) => { // jika ada salah satu yg < 100 | true
    return item.price <= 100
})

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)



// console.log(items)
// console.log(filteredItems)
// console.log(filteredNames)
// console.log(foundItem)
// console.log(hasInexpensiveItems)

// ===========================

const menu = [1, 2, 3, 4, 5]

const includesTwo = menu.includes(7) // jika angka yg di maksud tidak ada maka return false

console.log(includesTwo);

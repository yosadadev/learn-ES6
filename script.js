// let janji = new Promise((resolve, reject) => {
//     let num = 1 + 1
//     if (num == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// janji.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })

const userLeft = true
const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback){
//     if (userLeft) {
//         errorCallback({
//             name : 'User Left',
//             message : ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name : 'User watching cat meme',
//             message : 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up subscribe')             
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success : ' + message)
// }, (error) => {
//     console.log(error.name + '' + error.message)
// })

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name : 'User Left',
                message : ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name : 'User watching cat meme',
                message : 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up subscribe')             
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success : ' + message)
}).catch((error) => {
    console.log(error.name + '' + error.message)
})
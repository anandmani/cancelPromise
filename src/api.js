const Promise = require("bluebird");
Promise.config({ cancellation: true })

export const getOne = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tab One Contents'), 2000)
})

export const getTwo = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tab Two Contents'), 2000)
})

//-----------------------------------
let promiseThree, promiseFour;

export const getThree = () => {
    promiseThree = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Tab Three Contents'), 2000)
    })
    return promiseThree
}

export const getFour = () => {
    promiseFour = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Tab Four Contents'), 2000)
    })
    return promiseFour
}

export const cancelThree = () => {
    if (promiseThree) {
        console.log("cancelling promise for 3")
        promiseThree.cancel()
    }
}

export const cancelFour = () => {
    if (promiseFour) {
        console.log("cancelling promise for 4")
        promiseFour.cancel()
    }
}
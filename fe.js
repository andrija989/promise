const fetch = require("node-fetch")


async function checkUrl(url) {
    return url === 'http://images.somecdn.com/cat-33.jpg'
  }

let getDataFromApi = async(url,userId) => {
    return fetch(`${url}${userId}`).then(response => {
        return response.json()
    })
}

const getCats = async(userId) => {
    return getDataFromApi('http://localhost:8080/users/', '123').then(user => {
        const promises = user.cats.map(catId => {
            return getDataFromApi('http://localhost:8080/cats/', catId)
        })
        return Promise.all(promises)
    }).then(results => {
        return results.filter(cat => !cat.type)
        // return results.filter(cat => cat.imageUrl === 'http://images.somecdn.com/cat-33.jpg')
    })
}

getCats(123)

const test = async() => {
    const data = await getCats(123)
    console.log(data)
}

test()



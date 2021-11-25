const fetch = require("node-fetch")


let getDataFromApi = async(url,userId) => {
    return fetch(`${url}${userId}`).then(response => {
        return response.json()
    })
}

const typeFunction = (object) => {
    switch (typeof value){
        case 'string':
          return 'str';
    
        case 'number':
          return 'num';
    
        case 'object':
          return 'obj';
    
        default:
          return 'other';
        }
}

const getType = async(userId) => {
    return getDataFromApi('http://localhost:8080/users/', '124').then(user => {
        return Object.values(user).map(element => typeFunction(element))
    })
}

getType(123)

const test = async() => {
    const data = await getType(124)
    console.log(data)
}

test()



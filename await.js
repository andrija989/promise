const fetch = require("node-fetch")

const getUser = async(userId) => {

    try {
        let data = await fetch(`http://localhost:8080/users/${userId}`)
        
            return await data.json()
    } catch(err) {
        console.log(err);
    }
}

const getCats = async(fetchUser) => {
    try {
        let promises = fetchUser.cats.map(async catId => {
            let cat = await fetch(`http://localhost:8080/cats/${catId}`)
            
                return await cat.json()
        })
    
        return Promise.all(promises) 
    } catch(err) {
        console.log(err);
    }
}


const getUsersCats = async() => {
    const cats = await getCats(await getUser(123))
    console.log(cats)
}

getUsersCats()


 
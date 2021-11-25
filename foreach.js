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
        
        return await fetchUser.cats.forEach(async catId => {
            let catsArray = new Array
            let data = await fetch(`http://localhost:8080/cats/${catId}`)
            
            let newCat = await data.json()
            catsArray.push(newCat)
            console.log(catsArray)
            
    });
  
    } catch(err) {
        console.log(err);
    }

    return catsArray
}


const getUsersCats = async() => {
    const cats = await getCats(await getUser(123))
    console.log(cats)
}

getUsersCats()




 
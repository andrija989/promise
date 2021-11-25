const fetch = require("node-fetch");

const getUser = async () => {
  try {
    let data = await fetch("http://localhost:8080/users/123");
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};

const getCats = async (fetchUser) => {
  try {
    let promises = fetchUser.cats.map(async (catId) => {
      let cat = await fetch("http://localhost:8080/cats/");
      return await cat.json();
    });
  } catch (err) {
    console.log(err);
  }
};

const readUser = async () => {
  const user = await getUser();
  console.log(user);
};

const readCats = async () => {
  const cats = await getCats(await getUser());
  console.log(cats);
};

readCats();

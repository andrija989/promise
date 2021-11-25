const fetch = require("node-fetch");

const getCats = async () => {
  return fetch(`http://localhost:8080/users/123`)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      const promises = user.cats.map((catId) => {
        return fetch(`http://localhost:8080/cats/${catId}`).then((response) => {
          return response.json();
        });
      });
      return Promise.all(promises);
    });
};

const test = async () => {
  const data = await getCats();
  console.log(data);
};

test();

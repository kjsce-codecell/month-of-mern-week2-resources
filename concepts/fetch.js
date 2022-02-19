import fetch from "node-fetch";

const promise = fetch("https://jsonplaceholder.typicode.com/todos");

promise
  .then((res) => {
    // throw new Error("Something went wrong");

    // mapping to json is also a promise
    // we return it from this callback
    return res.json();
  })
  .then((todos) => {
    // here we get then returned json data
    // from the previous callback
    console.log(todos);
  })
  .catch((err) => {
    // all errors in this chain can be
    // caught using this single function
    console.log("Error caught: ", err);
  });

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

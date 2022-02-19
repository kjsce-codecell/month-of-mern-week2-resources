// an async function returns a Promise
const getIngredients = async (key) => {
  const ingredients = {
    bread: "🍞",
    avocado: "🥑",
  };

  return ingredients[key];

  // w/o using async I could
  // return Promise.resolve(nothing[key]);
};

// logs the promise
console.log(getIngredients("avocado"));

// gets the resolved Promise and logs it to the console
getIngredients("avocado").then((res) => console.log(res));

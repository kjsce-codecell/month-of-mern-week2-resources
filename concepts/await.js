const getIngredient = async (key) => {
  const ingredients = {
    bread: "🍞",
    avocado: "🥑",
  };
  return ingredients[key];
};

const makeSandwich = async () => {
  const a = await getIngredient("avocado");
  const b = await getIngredient("bread");

  return [a, b];
};

makeSandwich().then(console.log);

// with out async await
const makeSandwich1 = () => {
  let a;
  return getIngredient("avocado")
    .then((av) => {
      a = av;
      return getIngredient("bread");
    })
    .then((b) => [a, b]);
};

makeSandwich1().then((res) => console.log(res));

// we can further improve our code
const makeSandwich2 = async () => {
  const a = getIngredient("avocado");
  const b = getIngredient("bread");

  // this will help us run all our promises in the array concurrently
  // so instead of awaiting a bunch of individual promises
  // we can add all of them to an array
  // that await Promise.all() of that array
  const sandwich = await Promise.all([a, b]);

  return sandwich;
};

makeSandwich2().then(console.log);

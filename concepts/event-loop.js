console.log("Synchronous 1");

// macro task
setTimeout(() => {
  console.log("Timeout");
}, 0);

// micro task
Promise.resolve().then(() => console.log("Promise"));

console.log("Synchronous 2");

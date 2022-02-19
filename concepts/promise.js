const ride = new Promise((resolve, reject) => {
  var pickedUp = true;
  if (pickedUp) {
    resolve("Driver Arrived");
  } else {
    reject("Driver cancelled the ride");
  }
});

ride
.then(res => console.log(res))
.catch(err => console.error(err))

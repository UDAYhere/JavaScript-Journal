//here we are going to use the promise and we will be overcming the probel that ocuure in callback hell
function storeData(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("data saved");
    } else {
      reject("weak connection");
    }
  });
}

storeData("first data")
  .then((message) => {
    console.log(message);
    return storeData("second data");
  })
  .then((message) => {
    console.log(message);
    return storeData("third data");
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
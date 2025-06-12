// so i am going to prepare my notes for primises in js and what i am going to do that first i will create a situation or javaScript callback hell and then i am going to handle it with the help of promises.

//let us assime that we are storing data in our database with one condition the our internet spped should be more than 4mbps and we are going to generate the random number form javascript and going to perform our opertaion.

function storeData(data, sucess, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    sucess();
  } else {
    failure();
  }
}

storeData(
  "first data",
  () => {
    console.log("data 1 stored sucessfully");
    storeData(
      "second data",
      () => {
        console.log("data 2 stored sucessfully");
        storeData(
          "third data",
          () => {
            console.log("data 3 stored sucessfully");
          },
          () => {
            console.log("weak connection");
          }
        );
      },
      () => {
        console.log("weak connection");
      }
    );
  },
  () => {
    console.log("weak connection");
  }
);
// see how long and complex the code becomes if we code like this in call back hell
//no we will try to do this in script.js
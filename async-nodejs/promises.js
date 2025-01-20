// // Simulating an asynchronous task
// function simulateAsyncTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         resolve("Task completed successfully!");
//       } else {
//         reject(new Error("Task failed!"));
//       }
//     }, 2000); // Simulating a delay of 2 seconds
//   });
// }

// // Using the Promise
// simulateAsyncTask()
//   .then((result) => {
//     console.log(result); // Task completed successfully!
//   })
//   .catch((error) => {
//     console.error(error); // Task failed!
//   });


//Example no 2
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data fetched from server");
    }, 2000);
  });
}

fetchData()
  .then((message) => {
    console.log("yeta ako")
    console.log(message);
    return "Processing data...";
  })
  .catch((error) => {
    console.log("here")
    console.error("Error:", error);
  });

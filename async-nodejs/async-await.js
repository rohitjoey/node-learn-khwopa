// Simulating an asynchronous task
// function simulateAsyncTask() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//           resolve('Task completed successfully!');
//         } else {
//           reject(new Error('Task failed!'));
//         }
//       }, 2000); // Simulating a delay of 2 seconds
//     });
//   }
  
//   // Using async/await
//   async function executeAsyncTask() {
//     try {
//       const result = await simulateAsyncTask();
//       console.log(result); // Task completed successfully!
//     } catch (error) {
//       console.error(error); // Task failed!
//     }
//   }
//   // Calling the async function
//   executeAsyncTask();


//example no 2
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched from server");
//         }, 2000);
//     });
// }


// // The handleData function uses the async keyword, 
// // and within this function, we use await to pause 
// // the execution until the promise is resolved.
// async function handleData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//         console.log("Processing data...");
//         console.log("Displaying data...");
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// handleData();


const fetchCatData = async () => {
  try {
    
    const response = await fetch("https://api.publicapis.org/entries");
    // console.log(response)
    throw new Error("Errrorrrrrr");
    
    // console.log( await response.json());
  } catch (error) {
    console.log(error) 
  }
};

fetchCatData();
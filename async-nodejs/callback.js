//example 1
function fetchData() {
  setTimeout(() => {
      console.log("Data fetched from server");
      // callback();
      console.log("Processing data...");
      
  }, 2000);
}

// function processData() {
//   console.log("Processing data...");
// }

fetchData();


// Simulating an asynchronous task
function simulateAsyncTask(callback) {
  setTimeout(() => {
    const randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber > 0.5) {
      // console.log("Task completed successfully!")
      callback(null, "Task completed successfully!");
    } else {
      callback(new Error("Task failed!"), null);
      // console.log("Task failed!")
    }
  }, 2000); // Simulating a delay of 2 seconds
}

// Using the callback
simulateAsyncTask((error, result) => {
  if (error) {
    console.error(error); // Task failed!
  } else {
    console.log(result); // Task completed successfully!
  }
});

//callback hell
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback();
  }, 2000);
}

function processData(callback) {
  console.log("Processing data...");
  callback();
}

function displayData() {
  console.log("Displaying data...");
}

fetchData(() => {
  processData(() => {
    displayData();
  });
});

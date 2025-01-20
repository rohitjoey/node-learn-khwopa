let globalVar = "I'm global!";

function demoScope() {
  let localVar = "I'm local!";
  if(true){
    let blockVar = "I am block";
    console.log(blockVar) //Accessible
  }
  // console.log(blockVar) //ReferenceError: blockVar is not defined
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

// console.log(localVar); // Error: localVar is not defined
demoScope();
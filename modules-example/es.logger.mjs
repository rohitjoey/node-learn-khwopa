export function log2(message) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${message}`);
}

function test() {
  console.log("test");
}

export const yo = () => {
  console.log("yo");
};

export default test;
//  export default yo

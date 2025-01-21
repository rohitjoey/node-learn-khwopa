function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}]--${message}`);
}

function log2(message) {
  console.log("from log2");
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}]--${message}`);
}

function log3(message) {
  console.log("from log3");

  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}]--${message}`);
}

// log("my message")

module.exports = { log:log, log2:log2, log3:log3 };

const http = require("http");
const { readFile } = require("fs/promises");

const server = http.createServer((req, res) => {
  res.write("Hello world");
  res.end();
});

// In the built-in http module of Node.js, req.params is not available. 
// The http module is very low-level, and it does not provide automatic parsing of route parameters or the request URL.
//so express type frameworks.

//serve file
// const server = http.createServer(serverHtmlFile);

// async function serverHtmlFile(req, res) {
//   try {
//     const data = await readFile("./http/index.html");
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     res.end();
//   } catch (error) {
//     console.error(error.message);
//   }
// }


//routes and params
// const server = http.createServer((req, res) => {
//     console.log("Request url",req.url);
//     console.log("Request params",req.params)
//     res.write("Hello world");
//     res.end();
//   });

server.listen(3000, () => {
  console.log("Server listening at port 3000");
});

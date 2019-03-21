const http = require("http");

// Create server
http.createServer((req,res) => {
  // Write response
  res.write("hello world");
  res.end();
}).listen(1337, ()=> console.log("server running"));
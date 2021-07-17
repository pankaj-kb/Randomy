const http = require("http");
const server = http.createServer((req, res) => {
     if (req.url = "/") {
          const randomLines = require('random-status-lines');
          const quoteline = randomLines.generate();
          data = quoteline;
          res.end(quoteline);
     } else {
          res.writeHead(404, {"content-type": "text/html"});
          res.end("<h1> 404 Error , Page Not Found<h1>");
     }
});

server.listen(8000, "127.0.0.1", () => {
     console.log("listening at port 8000");
});
const http = require("http");
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
app.get("/",(req, res) => {
     res.send
     {
          const randomLines = require('random-status-lines');
          const quoteline = randomLines.generate();
          data = quoteline;
          res.end(quoteline);
     }
});
app.listen(port, () => {
     console.log(`app is running on port http://localhost:${port}`);
});
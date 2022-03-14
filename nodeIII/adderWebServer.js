const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod.js");

console.log("Server Started............");
http
  .createServer(function (req, res) {
    const endPointURL = url.parse(req.url, true);
    const endpointURLFileName = "." + endPointURL.pathname;
    if (endPointURL.pathname == "/add.js") {
      addmod.add(req, res, endPointURL.query);
    } else {
      fs.readFile(endpointURLFileName, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);

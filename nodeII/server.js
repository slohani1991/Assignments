const http = require("http");
const url = require("url");

http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    const queryString = url.parse(request.url, true, false).query;
    const content = `Year was ${queryString.year} Month was ${queryString.month}`;
    response.write(content);
    response.end();
  })
  .listen(8080);

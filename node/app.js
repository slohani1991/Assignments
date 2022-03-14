/**
 * app.js
 * @author sandesh
 * @since 2022
 *
 */

console.log("Starting HTTP Server for Hello World");

const http = require("http");

/// Create and start and HTTPServer
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const pageContent = `
        <!DOCTYPE html>
            <html lang="en">
               <head>
                     <title>My Hello world server</title>
                </head>
                <body>
                    <h1>Hello World</h1>
                </body>
        </html>
    `;
    res.end(pageContent);
  })
  .listen(8080);

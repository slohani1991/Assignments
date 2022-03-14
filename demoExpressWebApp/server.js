/**
 *
 * server.js
 *
 */

const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
  console.log("Serving homepage content...");
  const homepageContent = `<!DOCTYPE html>
                                <html lang='en'>
                                    <head>
                                        <title>This is my Express webapp</title>
                                    </head>
                                    <body>
                                        <h1>Welcome to my first Express webapp</h1>
                                    </body>
                                </html>`;
  res.send(homepageContent);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Web Server Staterd on port ${port}`);
});

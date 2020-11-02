const express = require("express");
const next = require("next");
const frameguard = require("frameguard");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, poweredByHeader: false });
const handle = app.getRequestHandler();
const async = require("async");
const http = require('http');

app.prepare().then(() => {
  const server = express();
  server.disable("x-powered-by");
  server.use(frameguard({ action: "deny" }));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  /* 
  Learn Node js
 Synchronous callbacks.

 // a function that uses a callback named 'cb' as a parameter


 function getSyncMessage(cb) {
    cb("Hello World!");
  }

  console.log("Before getSyncMessage call");
  // calling a function and sending in a callback function as an argument.
  getSyncMessage(function(message){
    console.log(message);
  })

  console.log("After getSyncMessage call");

  */


  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

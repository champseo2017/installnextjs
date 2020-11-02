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
   Asynchronous callbacks
   Some common things that are asynchronous in javascript environments that accept callbacks:
   -Events
   -setTimeout
   -setInterval
   -the fatch API
   -Promises

   // a function that users a callback named 'cb' as a parameter
  function getAsyncMessage(cb) {
    setTimeout(() => {
        cb("Hello World!")
    }, 1000);
  }

  console.log("Before getSyncMessage call");
  // calling a function and sending in a callback function as an argument.
  getAsyncMessage(function(message){
    console.log(message);
  });
  console.log("After getSyncMessage call");

  */

  


  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

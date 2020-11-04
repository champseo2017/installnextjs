const express = require("express");
const next = require("next");
const frameguard = require("frameguard");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, poweredByHeader: false });
const handle = app.getRequestHandler();
const async = require("async");
const http = require('http');
const fs = require('fs');

app.prepare().then(() => {
  const server = express();
  server.disable("x-powered-by");
  server.use(frameguard({ action: "deny" }));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  /* 
  Learn Node js
  Try catch
  Errors must always be handled. If you are using synchronous programming you could use a try
catch. But this does not work if you work asynchronous! Example:
Async errors will only be handled inside the callback function!
  */
  try {
    setTimeout(() => {
        throw new Error("grgr")
    }, 100);
  } catch (ex) {
      console.error(ex)
  }



  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

});

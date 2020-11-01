const express = require("express");
const next = require("next");
const frameguard = require("frameguard");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, poweredByHeader: false });
const handle = app.getRequestHandler();
const async = require("async");

app.prepare().then(() => {
  const server = express();
  server.disable("x-powered-by");
  server.use(frameguard({ action: "deny" }));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  /* 
  Learn Node js
 So here is when Async/Await enter in action in order to get cleaner our function:

  async const myAsyncFunction = () => {
    let result;
    try {
      result = await aFunctionThatReturnAPromise();
    } catch (error) {
      handleError(error);
    }
  }
  // doSomething is a sync function
  return doSomething(result);
  */
   


  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

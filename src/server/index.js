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
 Progression from Callbacks
In the beginning there were callbacks, and callbacks were ok:


const getTemperature = (callback) => {
  http.get('www.temperature.com/current', (res) => {
  callback(res.data.temperature)
  })
 }
 const getAirPollution = (callback) => {
  http.get('www.pollution.com/current', (res) => {
  callback(res.data.pollution)
  });
 }

 getTemperature(function(temp) {
  getAirPollution(function(pollution) {
  console.log(`the temp is ${temp} and the pollution is ${pollution}.`)
  // The temp is 27 and the pollution is 0.5.
  })
 })
 

  */

 


 
   


  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

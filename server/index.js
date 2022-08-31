"use strict";

const express = require("express");
const app = express();
var { soap } = require("strong-soap");
const cors = require("cors");

var url = "http://www.dneonline.com/calculator.asmx?WSDL";
app.use(cors({ origin: "*" }));

app.get("/", function (req, res) {
  // Hardcoded request
  var requestArgs = {
    intA: 200,
    intB: 2,
  };
  soap.createClient(url, {}, (_, client) =>
    client.Add(requestArgs, (_, result, envelop) => {
      res.status(200);
      res.send(JSON.stringify(result));
      console.log("server", JSON.stringify(result));
      console.log("envelop", envelop);
    })
  );
});
app.listen(4000, () => {
  console.log("server running");
});

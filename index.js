const express = require("express");

const server = express();

server.get("/teste", (req, res) => {
  return res.json({ mensage: "Rapha NODE" });
});

server.listen(3000);

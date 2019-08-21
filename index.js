const express = require("express");

const server = express();

server.get("/teste/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ mensage: `Rapha NODE ${id}` });
});

server.listen(3000);

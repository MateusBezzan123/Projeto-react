const express = require('express');

const app = express();

//GET,POST,PUT,DELETE
//req.query = acessar query params

app.put('/users/:id', (req, res) => {
  return res.json({ id: req.params.id });

});


app.listen(3333);
const express = require('express');

const app = express();

//GET,POST,PUT,DELETE
//req.query = acessar query params

app.get('/users', (req, res) => {
  return res.json({ idade: req.query.idade });

});


app.listen(3333);
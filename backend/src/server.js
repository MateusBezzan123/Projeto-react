const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');


const app = express();
mongoose.connect('mongodb://root:root@cluster0-shard-00-00-crsxl.mongodb.net:27017,cluster0-shard-00-01-crsxl.mongodb.net:27017,cluster0-shard-00-02-crsxl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..' , 'uploads')));
app.use(routes);

app.listen(3333);
const express = require('express');
const router = require('./routes/index');
require('./dbConnection');
const handlingErr = require('./middlewares/errorMiddlewares');

const PORT = 8080
const app = express();

app.use(express.urlencoded({extended: true})); //parse body
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => handlingErr(err, res))

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});

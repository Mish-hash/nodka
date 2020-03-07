const express = require('express');
const router = require('./routes/index');
require('./dbConnection');
const handlingErr = require('./middlewares/errorMiddlewares');
const cors = require('cors');

const PORT = 8080
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true})); //parse body
app.use(express.json());
app.use('/api', router);

app.use((err, req, res, next) => handlingErr(err, res))

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({extended: true})); //parse body
app.use(express.json());

app.get('/',  (req, res) => {
  res.send('TEst');
});

app.get('/user', (req, res) => { //request whith query params
  const query = req.query;
  console.log(query);
  res.send(query);
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`get ${id} user`);
})

app.post('/user', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
})

app.put('/user', (req, res) => {
  console.log(req.headers.authorization)
  res.send('put user');
})

app.delete('/user', (req, res) => {
  res.send('delete user');
})

const PORT = 8080

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});

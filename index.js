const express = require('express');
const app = express();

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
  res.send('post user');
})

app.put('/user', (req, res) => {
  res.send('put user');
})

app.delete('/user', (req, res) => {
  res.send('delete user');
})

const PORT = 8080

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});

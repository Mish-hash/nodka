const express = require('express');
const router = require('./routes/index');
require('./dbConnection');

const PORT = 8080
const app = express();

app.use(express.urlencoded({extended: true})); //parse body
app.use(express.json());
app.use(router);



app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});

/* const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '852456qwerty13';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    console.log(salt)
    console.log(hash)
  });
}); */

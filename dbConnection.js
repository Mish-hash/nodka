const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shred',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {if(err) process.exit(1);},
);
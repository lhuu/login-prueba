const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/login', {
useNewUrlParser: true,
useUnifiedTopology: true
})
    .then(db => { console.log('DB connect')})
    .catch(err => console.log(err));
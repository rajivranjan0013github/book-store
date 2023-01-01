const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();
const cors = require('cors')

// Milddlerwares..
app.use(express.json()); 
app.use(cors());
app.use('/books', router); // locahost:5000/books

mongoose
    .connect(
        "mongodb+srv://admin:pcqbqV3ck0kFlEgc@cluster0.eovyuqk.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log('conneted to database'))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));


// pcqbqV3ck0kFlEgc
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;


db.on('error', (err) => console.log(err));
db.once('open', () => {
    console.log("Backend Database connected");
});


app.use(express.json({ limit: '2mb'}));

const photosRouter = require('./routes/photos');
app.use('/images', photosRouter)


app.listen(3000, () => {
    console.log('Server started at port 3000');
})


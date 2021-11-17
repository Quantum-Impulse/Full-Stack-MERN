import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

//
app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://erivera7240:123@cluster0.4scrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )

app.listen(PORT, () => {
    console.log(`now listening on ${PORT}`)
})

// MangoDB atlas, database  https://www.mongodb.com/cloud/atlas



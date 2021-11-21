import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://erivera7240:123@cluster0.4scrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
const PORT = process.env.PORT || 5000;

// async function initMongo() {
//     try {
//         await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//         return [mongoose, null]
//     } catch (e) {
//         return [null, e]
//     }
// }

// async function initServer() {
//     let [data, error] = await initMongo()
//     if (data) {
//         app.listen(PORT)
//         console.log(`server running`)
//     } else if (error) {
//         console.error(`omg there was an error`)
//     }
// }

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
    .catch( (error) => console.log( error.message) )

//mongoose.set('useFindAndModify', false);


// MangoDB atlas, database  https://www.mongodb.com/cloud/atlas



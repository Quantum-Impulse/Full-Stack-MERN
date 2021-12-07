import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

// Adding the link like this is not the best since it's not secure
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

// securely using the connection url with dotenv
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
    .catch( (error) => console.log( error.message) )





// MangoDB atlas, database  https://www.mongodb.com/cloud/atlas



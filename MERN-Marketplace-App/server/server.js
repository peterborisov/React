import express from 'express';
import { readdirSync } from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';

require('dotenv').config({path: '.env'});

const app = express();
const morgan = require('morgan')

//Middlewares
/**
 * Client run on port 3000.
 * Server run on port 8000.
 * To prevent error, because of different domains, use cors.
 * When submit form, req data is undefined. Using express.json(), can get data.
 */
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Route middlewares
readdirSync('./routes').map((r) =>
    app.use('/api', require(`./routes/${r}`))
);

//db connection 
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('Connection error', err))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

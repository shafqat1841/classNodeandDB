const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = require('./connection/connectDB');

const mongooseConnectionString = process.env.MONGO_URL;

const router = require('./route/routes');


const app = express();

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH", "OPTIONS"],
    })
  );

app.use(express.json())

app.use('/api/v1',router)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(mongooseConnectionString);
        await app.listen(port , console.log('surver running'));
    } catch (error) {
        console.log(error)
    }
}

start()
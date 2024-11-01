const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./User/user');
const offerRoute = require('./Offer/offer')
require('dotenv').config(); 
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URL);

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(offerRoute);

app.listen(8000, () => {
    console.log("port : 8000 Server started");
});

app.all("*", (req, res) => {
    res.status(404).json({message: "all routes"})
})

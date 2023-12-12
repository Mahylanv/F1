const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0'
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/apinode');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoute = require("./routes/userRoute");
app.use('/users', userRoute);

// const timerRoute = require("./routes/timerRoute");
// app.use('/', timerRoute);

app.listen(port, host);
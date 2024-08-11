const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');


require('dotenv').config();

const app = express();
app.use(express.json());



app.use('/api', noteRoutes);

console.log("mongodb url",process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;

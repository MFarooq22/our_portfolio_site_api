// Import necessary modules
require('dotenv').config();
const express = require('express');
require('./DBConn/__db');

const UserRoutes = require("./routes/User");

// Initialize Express app
const app = express();

// middlewares
app.use('/api', UserRoutes);

// Define the port for your server
const PORT = process.env.PORT;




app.listen(PORT, ()=>{
    console.log(`Server start at port no ${PORT}`);
})

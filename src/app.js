// Import necessary modules
require('dotenv').config();
const express = require('express');
require('./DBConn/__db');
const bodyParser = require('body-parser');
const UserRoutes = require("./routes/User");
const cors = require('cors');

// Initialize Express app
const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());         // to avoid cors errors

app.use('/api', UserRoutes);


// Define the port for your server
const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
    console.log(`Server start at port no ${PORT}`);
})



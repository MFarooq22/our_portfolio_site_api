// Import necessary modules
require('dotenv').config();
const express = require('express');
require('./DBConn/__db');

const UserRoutes = require("./routes/User");

// Initialize Express app
const app = express();

// middlewares
app.use('/api', UserRoutes);
app.use(express.json());

// Define the port for your server
const PORT = process.env.PORT || 8000;

// const contactSchema = require('./models/contactSchema');


// app.post("/contact" , async(req, res) => {
//     try {
//     const formData = req.body
//     const contact = new contactSchema(formData);
//     await contact.save();
//     res.json({ message: 'Form submitted successfully' });
// } catch (error) {
//     console.error( error);
//     res.status(500).json({ message: 'Internal Server Error' });
// }
// })

console.log(PORT);


app.listen(PORT, ()=>{
    console.log(`Server start at port no ${PORT}`);
})

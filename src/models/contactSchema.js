const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    // Schema for contact page
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("ContactForm", contactSchema);

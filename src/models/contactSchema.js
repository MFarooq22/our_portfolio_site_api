const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    // Schema for contact page
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model("ContactForm", contactSchema);

// Schemas 
const contactSchema = require('../models/contactSchema');

const contactForm = (req, res) => {
    const formData = req.body;
    console.log(formData);

    // Respond to the client
    res.json({ message: req.body});
};

const test = (req, res) => {
    res.send('hi')
};

module.exports = {test,contactForm};

// Schemas 
const contactSchema = require('../models/contactSchema');

const contactForm = async(req, res) => {
    try {
        const formData = req.body;
        const contact = new contactSchema(formData);
        await contact.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const test = (req, res) => {
    res.send('hi');
};

module.exports = {test,contactForm};

const ContactSchema = require('../models/contactSchema');


// contact form
const contactForm = async(req, res) => {
    try {
        const formData = req.body;
        const contact = new ContactSchema(formData);
        await contact.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



module.exports = {contactForm};

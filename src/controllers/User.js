const contactSchema = require('../models/contactSchema');
const menuSchema = require('../models/menuSchema');
const multer = require('multer');   // multer use for sending image to db 
const fs = require('fs');

// Multer configuration
const upload = multer({
    storage: multer.diskStorage({
        destination: './Dashboard/Images',
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
}).single('logoImage');


// Logo and menu 
const menu =  (req, res) => {
    try {
        // Use the upload middleware to handle file upload
        upload(req, res, async(err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const menuData = req.body;
                const logoImage = {
                    data: fs.readFileSync(req.file.path),
                    contentType: req.file.mimetype,
                };

                // Find the existing menu document based on its ObjectId
                const existingMenu = await menuSchema.findOne(menuData._id);

                // If it exists, update the fields
                if (existingMenu) {
                    existingMenu.logoImage = logoImage;
                    existingMenu.menuItems = menuData.menuItems.title.map((title, index) => ({
                        title: title,
                        link: menuData.menuItems.url[index],
                    }));

                    // save the updated document 
                    await existingMenu.save();
                    res.status(200).json('Menu uploaded successfully.');
                } else {
                    // If it doesn't exist, create a new menu instance
                    const newMenu = new menuSchema({
                        logoImage,
                        menuItems: menuData.menuItems.title.map((title, index) => ({
                            title: title,
                            link: menuData.menuItems.url[index],
                        })),
                    });

                    // save the updated document 
                    await newMenu.save();
                    res.status(200).json('Menu uploaded successfully.');
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal Server Error');
    }
};


// contact form 
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

module.exports = {test,contactForm,menu};

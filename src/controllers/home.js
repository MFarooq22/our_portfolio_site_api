const HomeSchema = require('../models/homeSchema');


const createHome = async (req, res) => {
try {
    const homeData = {
        name : req.body.name,
        // image : req.file.filename,
        socialLinks : [
            {facebook : req.body.facebook},
            {instagram : req.body.instagram},
        ],
        skills : req.body.skills,
        aboutMe : req.body.aboutMe,
        resumeLink : req.body.resumeLink,
        address :[
            {age:req.body.age},
            {phone:req.body.phone},
            {email:req.body.email},
        ],
    }
    const home = new HomeSchema(homeData);
    const savedHome = await home.save();
    res.status(201).json(savedHome);
} catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
}
}

module.exports = { createHome};

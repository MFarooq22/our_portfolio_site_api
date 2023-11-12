const HomeSchema = require('../models/homeSchema');


const createHome = async (req, res) => {
try {
    const socialLinks = req.body.socialLinks.map((socialLink) => ({
        title: socialLink.title,
        link: socialLink.link
      }));
    const homeData = {
        name : req.body.name,
        // image : req.file.filename,
        socialLinks : socialLinks,
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

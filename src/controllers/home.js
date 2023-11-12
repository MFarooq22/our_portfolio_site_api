const HomeSchema = require('../models/homeSchema');

const createHome = async (req, res) => {
  try {

    const socialLinks = JSON.parse(req.body.socialLinks);

    const addressData = JSON.parse(req.body.address);


    const homeData = {
      name: req.body.name,
      image: req.file.filename,
      socialLinks: socialLinks,
      skills: req.body.skills,
      aboutMe: req.body.aboutMe,
      resumeLink: req.body.resumeLink,
      address: addressData
    };

    const home = new HomeSchema(homeData);
    const savedHome = await home.save();
    res.status(201).json(savedHome);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = { createHome};

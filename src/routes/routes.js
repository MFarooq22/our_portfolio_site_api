const express = require('express');
const router = express.Router();
// const User = require("../controllers/User");
const {contactForm} = require('../controllers/contactForm');
const {menu} = require('../controllers/menu');
const {createHome} = require("../controllers/home");
const {resume} = require('../controllers/resume')
const upload = require('../uploadFile');


router.route('/contact').post(contactForm);
router.route('/menu').post(menu);
router.post('/home', upload.single('image'), createHome)
router.route('/resume').post(resume);
module.exports = router;

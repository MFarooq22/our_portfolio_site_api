const express = require('express');
const router = express.Router();
// const User = require("../controllers/User");
const {contactForm} = require('../controllers/contactForm');
const {menu} = require('../controllers/menu');


router.route('/contact').post(contactForm);
router.route('/menu').post(menu);

module.exports = router;

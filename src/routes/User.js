const express = require('express');
const router = express.Router();
// const User = require("../controllers/User");
const {test} = require('../controllers/User');
const {contactForm} = require('../controllers/contactForm');
const {menu} = require('../controllers/menu');


router.route('/test').get(test);
router.route('/contact').post(contactForm);
router.route('/menu').post(menu);

module.exports = router;

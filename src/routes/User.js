const express = require('express');
const router = express.Router();
// const User = require("../controllers/User");
const {test, contactForm,menu} = require('../controllers/User');


router.route('/test').get(test);
router.route('/contact').post(contactForm);
router.route('/menu').post(menu);

module.exports = router;

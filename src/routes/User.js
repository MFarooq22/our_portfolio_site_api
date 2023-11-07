const express = require('express');
const router = express.Router();
// const User = require("../controllers/User");
const {test, contactForm} = require('../controllers/User');


router.route('/test').get(test)
router.route('/contact').post(contactForm)
// router.post('/contact', contactForm)

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require("../controllers/User");
const {helloShuaib, helloFarooq} = require('../controllers/User');

router.route('/').get(helloShuaib);
router.route('/farooq').get(helloFarooq);
module.exports = router;

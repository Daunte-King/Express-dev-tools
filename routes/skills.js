var express = require('express');
const { route } = require('.');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get("/", skillsCtrl.index)
route.get("/: id",skillsCtrl.show)

module.exports = router;

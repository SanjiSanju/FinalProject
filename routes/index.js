var express = require('express');
var router = express.Router();
var Index = require('../app/controllers/index_controller');

/* GET home page. */
router.get('/',Index.enter);
router.get('/index',Index.enter);

router.get('/about',Index.about);
router.get('/contact',Index.contact);
router.get('/courses',Index.courses);
router.get('/blog',Index.blog);
router.get('/signup',Index.signup);
router.get('/logout',Index.logout);
router.get('/index1',Index.index1);
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {bgImage: 'home-bg.jpg', title: "Clean Blog", subTitle: "A Blog Theme by Start Bootstrap"});
});

router.get('/index', function (req, res, next) {
    res.render('index', {bgImage: 'home-bg.jpg', title: "Clean Blog", subTitle: "A Blog Theme by Start Bootstrap"});
});

router.get('/about', function (req, res, next) {
    res.render('about', {bgImage: 'about-bg.jpg', title: "About Me", subTitle: "This is what I do."});
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {bgImage: 'contact-bg.jpg', title: "Contact Me", subTitle: "Have questions? I have answers."});
});

router.get('/post', function (req, res, next) {
    res.render('post', {bgImage: 'post-bg.jpg', title: "About Me", subTitle: "This is what I do."});
});

module.exports = router;

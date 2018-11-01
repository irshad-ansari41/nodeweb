var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.send('root');
});

router.get('/rndom.text', function (req, res) {
  res.send('rndom.text');
});

router.get(/a/, function (req, res) {
  res.send('/a/');
});

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
    res.render('contact', {data:'',bgImage: 'contact-bg.jpg', title: "Contact Me", subTitle: "Have questions? I have answers.",status: 'Send'});
});

router.get('/post', function (req, res, next) {
    res.render('post', {bgImage: 'post-bg.jpg', title: "About Me", subTitle: "This is what I do."});
});

router.post('/contact', function (req, res, next) {    
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;
    console.log(req.body);
    let query = "INSERT INTO contact SET name='" + name + "',email='" + email + "',phone='" + phone + "',message='" + message + "'"; // query database to get all the players
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render('contact', {data: req.body,bgImage: 'post-bg.jpg', title: "Contact Us", subTitle: "This is what I do.", status: 'Received'});
    });
    console.log(`${req.method} request 1 for '${req.url}' - ${JSON.stringify(req.body)}`);
    
});

module.exports = router;



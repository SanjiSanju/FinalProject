const userCollection = require("../db").collection('users');

var express = require('express');
var router = express.Router();



var Index = require('../app/controllers/index_controller');

/* GET home page. */
router.get('/',Index.enter);
router.get('/', function(req, res) {
  res.render('index', { title: 'index' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'about' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'contact' });
});

router.get('/courses', function(req, res) {
  res.render('courses', { title: 'courses' });
});

router.get('/blog', function(req, res) {
  res.render('blog', { title: 'blog' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'login' });
});

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'signup' });
});

router.post('/signupp', async function(req, res) {

  userCollection.insertOne(req.body) // Inserting Fname and Lastname Into Users Collection
// res.send("Data Successfully Added")
res.render('login')


// let name = await userCollection.find({name:"Sintheya"}).toArray()
// res.send(name)


 
});



router.post('/loginn', async function(req, res) {
  // res.send(req.body.uname)
  let email = req.body.uname

  let name = await userCollection.find({email:email}).toArray()

  res.send(name)


  if (value === "admin"){
     res.render('admin')
  }
    if(value === "parents"){
      res.render('parent')
    }

    if(value === "teacher"){
      res.render('teacher')
    }
  console.log(this.data)
 

});

router.get('/logout',Index.logout);
router.get('/index1',Index.index1);
module.exports = router;
 


exports = module.exports =router;
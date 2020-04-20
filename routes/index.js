const userCollection = require("../db").collection('users');
const pCollection = require("../db").collection('parents');
const tCollection = require("../db").collection('teacher');

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

router.get('/teacher', function(req, res) {
  res.render('teacher');
});

router.post('/teacher', function(req, res) {
  tCollection.insertOne(req.body)
  res.send("Done")
});

router.get('/ali', function(req, res) {
  res.render('ali');
});

router.post('/ali', function(req, res) {
  tCollection.insertOne(req.body)
  res.send("Done")
});



router.post('/signup', async function(req, res) {

  userCollection.insertOne(req.body) // Inserting Fname and Lastname Into Users Collection
// res.send("Data Successfully Added")
res.redirect('/login')


// let name = await userCollection.find({name:"Sintheya"}).toArray()
// res.send(name)


 
});


router.post('/profile', async function(req, res) {

// pCollection.insertOne(req.body) // Inserting Fname and Lastname Into Users Collection
 res.send("hello")
//res.redirect('/profile')


// let name = await userCollection.find({name:"Sintheya"}).toArray()
// res.send(name)


 
});



router.post('/login', async function(req, res) {
// console.log(req.body)
// res.send(req.body.email)
userCollection.findOne({email:req.body.email}).then((user)=>{
 
  if(user && user.psw != req.body.psw){   // IF username is correct but password is wrong

    res.send("Incorrect Password")

  } else if(user &&  user.psw == req.body.psw && user.value == req.body.value){  // If All is Correct
   
    if(user.value == "admin"){  /// Checking User is admin or not
    res.redirect("/admin")
    }

    if(user.value == "teacher"){ /// Checking User is teacher or not
      res.redirect("/teacher")
      }

     
    if(user.value == "parents"){  /// Checking User is parent or not
      res.redirect("/parents")
      }



  }
else{  // IF Username and password all are incorrect
  res.send("Invalid User & Password")
  }

}).catch((err)=>{ //If database Error

  res.send(err)

})

  
 

});

router.get('/admin', function(req, res) {
  res.render('admin', { title: 'admin' });
});

module.exports = router;
 


exports = module.exports =router;
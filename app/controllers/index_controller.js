
var profileSchema=require('../models/profile');

exports.enter = function(req, res, next){
	res.render('index');
};

exports.blog = function(req, res, next){
	res.render('blog');
};
exports.contact = function(req, res, next){
    res.render('contact');               
};
exports.about = function(req, res, next){
    res.render('about'); 
};
exports.courses = function(req, res, next){
    res.render('courses'); 
};
exports.signup = function(req, res, next){
    res.render('signup'); 
};
exports.signupp = function(req, res, next){


let body = req.body;
res.send(body)
};

exports.login = function(req, res, next){
    res.render('login'); 
};

exports.loginn = function(req, res, next){


    let body = req.body;
    res.send(body)
    };
    
exports.admin = function(req, res, next){
    res.render('admin'); 
};

exports.parents = function(req, res, next){
    res.render('parents'); 
};

exports.teacher = function(req, res, next){
    res.render('teacher'); 
};

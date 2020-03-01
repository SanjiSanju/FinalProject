
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
exports.logout = function(req, res, next){
    res.render('logout'); 
};
exports.login = function(req, res, next){
    res.render('login'); 
};
exports.index1 = function(req, res, next){
    res.render('index1'); 
};
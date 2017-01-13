var User=require('../app/models/user');

module.exports=function(app,passport){

app.get('/',function(req,res){
	res.render('index.ejs');
});

app.get('/all', isLoggedIn, function(req,res){
	res.sendfile('./views/users.html');
});

app.get('/all_users',isLoggedIn,function(req,res){
    User.find({},function(err,users){
    	if(err) res.send(err);    	
    	res.json(users);
    });
});

app.get('/charts',isLoggedIn,function(req,res){
	res.sendfile('./views/charts.html');
});


app.get('/charts_data',isLoggedIn,function(req,res){
    User.find({},function(err,users){
    	if(err) res.send(err);  
    	var result={loggedin:0,loggedout:0};
    	for(i=0;i<users.length;i++){
    		if(users[i].status===true)
    			result.loggedin++;
    		else
    			result.loggedout++;
    	}  	
    	res.json(result);
    });
});


app.get('/login',function(req,res){
	res.render('login.ejs',{message:req.flash('loginMessage')});
});

app.get('/signup',function(req,res){
	res.render('signup.ejs',{message:req.flash('signupMessage')});
});

app.get('/profile', isLoggedIn,function(req,res){
	res.render('profile.ejs',{
		user:req.user
	});
});

app.get('/logout',function(req,res){
	User.update({'local.email':req.user.local.email}, {
		$set:{status:false}
		
    	
	},  function(err, doc){
    if (err) return res.send(500, { error: err });
	    
	});
	req.logout();
	res.redirect('/');
});


app.post('/signup',passport.authenticate('local-signup',{
	successRedirect:'/profile',
	failureRedirect:'/signup',
	failureFlash:true

}));


app.post('/login',passport.authenticate('local-login',{

	successRedirect:'/profile',
	failureRedirect:'/login',
	failureFlash:true

}));

};


function isLoggedIn(req,res,next){
	if(req.isAuthenticated())
		return next();

	res.redirect('/');
}
var users = require('../server/controllers/users.js');

module.exports = function(app){
	// app.post("/signIn", function (req, res){
	// 	users.add(req, res);
	// });
	// app.get('/getUsers', function (req, res){
	// 	users.show(req, res);
	// });

	app.get('/home', function (req,res){  
      res.format({        
        'text/html': function(){
          db.Issue.find({}).sort({votes: 'desc'}).limit(30).populate('user').exec(function (err, issues){
          console.log('THIS IS FROM THE HTML/TEXT');
            if (req.session.passport.user == null){
              // console.log('NO ONE LOGGED IN');
              res.render('home', {});
            } else {
              // console.log(req.session.passport.user + " IS LOGGED IN"); 
              db.User.findById(req.session.passport.user, function (err, user){
                res.render('home', {});
              });
            }
          });
        },
        'application/json': function(){
          var box = [req.query.NE, req.query.SW] //format req.query in to box of bounds    
          // db.Issue.find({loc : {"$geoWithin" : {$box : box}}}).populate('user').sort({votes: 'desc'}).limit(30).exec(function (err, issues){ //find all issues inside box of bounds
          //   res.send(issues);
          })
        },
        'default': function(){
          res.status(406).send('Error. Please Try Again');
        }
    });
  });
};
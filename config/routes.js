var users = require('../server/controllers/users.js');

module.exports = function(app){
	// app.post("/signIn", function (req, res){
	// 	users.add(req, res);
	// });
	// app.get('/getUsers', function (req, res){
	// 	users.show(req, res);
	// });

	app.get('/home', function (req,res){
		res.render("home");
      
  });

  app.get('/base', function (req, res){
  	res.render("base");
  });

  app.get('/base2', function (req, res){
  	res.render("base2");
  });
};

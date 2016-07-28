var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');
var parseString = require('xml2js').parseString;
var js2xmlparser = require("js2xmlparser");

/* GET form. */
router.get('/', function(req, res) {
  Comment.find({}, '-_id jsonObject', function(err, comments){
  	console.log(comments);
    console.log(JSON.stringify(comments));
    res.render(
      'form',
      {title : 'Mongoose Tester', comments : JSON.stringify(comments)}
    );
  });
});

/* POST form. */
router.post('/', function(req, res) {
	var xml = "" + req.body.comment;
	parseString(xml, function (err, result) {
		//var obj = JSON.parse(result);
	 	new Comment({jsonObject : result})
	 	.save(function(err, comment) {
	    	//console.log(comment)
	    	res.redirect('form');
	  	});
	});
});



module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');
var parseString = require('xml2js').parseString;

/* GET form. */
router.get('/', function(req, res) {
  Comment.find(function(err, comments){
    console.log(comments)
    res.render(
      'form',
      {title : 'Mongoose Tester', comments : comments}
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
	    	console.log(comment)
	    	res.redirect('form');
	  	});
	});
});

module.exports = router;
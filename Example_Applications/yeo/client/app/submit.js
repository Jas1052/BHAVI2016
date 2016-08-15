var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Thing = mongoose.model('things');
var parseString = require('xml2js').parseString;
var js2xmlparser = require("js2xmlparser");

/* GET form. UNDER CONSTRUCTION*/
router.get('/', function(req, res) {
  Thing.find({}, '-_id jsonObject', function(err, comments){
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
	var xml = "" + req.body.title;
	parseString(xml, function (err, result) {
		//var obj = JSON.parse(result);
	 	new Thing({name : result})
	 	.save(function(err, comment) {
	    	//console.log(title)
	    	res.redirect('form');
	  	});
	});
});



module.exports = router;
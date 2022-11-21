const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
	res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
	var newShark = new Shark(req.body);
	console.log(req.body);
	newShark.save(function (err) {
		if(err) {
			res.status(400).send('Unable to save shark to database');
		} else {
			res.redirect('/sharks/getshark');
		}
	});
};

exports.list = function (req, res) {
	Shark.find({}).exec(function (err, sharks) {
		if (err) {
			return res.send(500, err);
		}
		res.render('getshark', {
			sharks: sharks
		});
	});
};

exports.delete = async function (req, res) {
	try {
		const sh = await Shark.findByIdAndDelete(req.params.id);

		if (!sh) response.status(404).send("No shark found");
		res.redirect('/sharks/getshark');
	  } catch (error) {
		response.status(500).send(error);
	  }
};

/* exports.update = async function (req, res) {
	
	try {
		await Shark.findByIdAndUpdate(req.params.id, req.body);
		await Shark.save();
		response.send(res);
	} catch (error) {
		response.status(500).send(error);
	}
}; */
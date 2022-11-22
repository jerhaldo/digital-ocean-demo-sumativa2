const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');
const SharkModel = require('../models/sharks');

router.get('/', function(req, res){
    shark.index(req,res);
});

router.post('/addshark', function(req, res) {
    shark.create(req,res);
});

router.get('/getshark', function(req, res) {
    shark.list(req,res);
});

router.get('/deleteshark/(:id)', function(req, res) {
    shark.delete(req,res);
});

router.get('/editshark/(:id)', function(req, res) {
    shark.getShark(req,res);
});

router.post('/updateshark/(:id)', function(req, res) {
    shark.update(req,res);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource or not');
});

router.get('/data', function(req, res, next) {
    res.send('this is another sub page of users.js');
});

module.exports = router;

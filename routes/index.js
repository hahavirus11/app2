var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next) {
  res.render('index', { title: 'Fut-Play' });
});

//acessed /index/test/:id page via a GET response
router.get('/test/:id',function (req,res,next) {
    res.render('test',{output: req.params.id});
});

// random routing subpage of index/home1 page
router.get('/home1',function (req, res, next) {
    res.render('home1');
});

/*adding post route
router.get('/test/submit', function (req, res ,next) {
    
})
*/


module.exports = router;

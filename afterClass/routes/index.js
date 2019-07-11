var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uli' });
});
router.get('/show-me-my-page', function (req, res) {
    res.send('Hey')
})
module.exports = router;

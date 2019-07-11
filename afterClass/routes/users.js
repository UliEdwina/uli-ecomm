var express = require('express');
var router = express.Router();
let User = require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res) {
    res.send('hello World')
    
})
router.get('/createuser', function (req, res) {
    let newUser = new User ({
        first_name: 'Yury',
        last_name: 'Schkoda'
    })

    newUser.save(function (err, user) {
        if (err) {
            console.log(err)
        } else {
            res.json({
                payload: user
            })
        }
    })
    
})
module.exports = router;

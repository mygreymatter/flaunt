/*
var express = require('express'),
    router = express.Router();

router.post('/login', function (req, res) {
    console.log('login');
    res.send('Login');
}).post('/signup', function (req, res) {
    console.log('signup');
    res.send('signup');
});

module.exports = router;
*/


module.exports = function (app) {
    /*app.get('/usignup', function (req, res) {
        console.log('signup');
        //res.send('signup');
    });*/
    app.post('/login', function (req, res) {
        console.log('Call login');
        res.json();
    });
};

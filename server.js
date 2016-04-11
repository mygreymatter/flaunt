var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000;

app.set('port', PORT);

app.use(express.static(__dirname + '/public'));

require('./routes/authrouter.js')(app);

/*app.get('/login', function (req, res) {

    console.log('Call login');
    res.json();
});*/

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
    /*res.sendFile(__dirname + '/public/views/test.html');*/
});

app.listen(app.get('port'), function () {
    console.log('Server running at http://127.0.0.1:' + PORT);
});

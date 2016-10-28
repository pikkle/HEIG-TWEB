var express = require('express');        // call express
var app = express();                 // define our app using express
var router = express.Router();              // get an instance of the express Router
var fetch = require('node-fetch');
var path = require('path');



var port = 8080;        // set our port

user = 'pikkle';
repo = 'HEIG-VD-TWEB';
token = '150944d62a81baaf3daeaf81c0f42b009b96f560';


router.get('/request', function (req, res) {

});

router.post('/request', function (req, res) {

});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.use(express.static('app'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/repos/*', function (req, res) {

    var reponse;

    fetch('https://api.github.com' + req.url, {headers: {'Authorization': 'token ' + token}})
    .then(function(res2) {
        return res2.json();
    }).then(function(json) {
        console.log(json);
        res.json(json);
    });
});

app.listen(8888);
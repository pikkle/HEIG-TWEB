var express = require('express');        // call express
var app = express();                 // define our app using express
var router = express.Router();              // get an instance of the express Router
var fetch = require('node-fetch');
var path = require('path');
var MongoCLient = require('mongodb').MongoClient;
var multer = require('multer'); // v1.0.5
var upload = multer();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json



token = '150944d62a81baaf3daeaf81c0f42b009b96f560';
var url = 'mongodb://localhost:32768/gitHubExplorer'

//Api for the history
app.use('/api', router);

router.get('/request', function (req, res) {
    MongoCLient.connect(url, function (err, db) {
        var collection = db.collection('request');
        collection.find().sort({date:-1}).limit(2).toArray(function (err, data) {
            res.send(data);
        });
        db.close();
    });
});

router.post('/request', upload.array(), function (req, res) {
    var repo = "";
    var user = "";

    if (req.body.repo){
        repo = req.body.repo;
    }

    if (req.body.user){
        user = req.body.user;
    }

    MongoCLient.connect(url, function (err, db) {
        var collection = db.collection('request');
        collection.insert({user: user, repo: repo, date: new Date()})
        res.json({ message: 'Request added to the DB' });
        db.close();

    });
});


// Redirection to gitHub API. To avoid cross-site restriction
app.get('/repos/*', function (req, res) {
    fetch('https://api.github.com' + req.url, {headers: {'Authorization': 'token ' + token}})
    .then(function(res2) {
        return res2.json();
    }).then(function(json) {
        console.log(json);
        res.json(json);
    });
});

//To serve the angular page.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

//To serve the static files
app.use(express.static('app'));

//Register the web server on port 80
app.listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
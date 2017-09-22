const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var request = require('request');
var github = require('../helpers/github.js')
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
	var user = req.body.user
	console.log('meep', req.body)
  

  github.getReposByUsername(user)
  /*app.get('https://api.github.com/users/' + user + '/repos', function(req, res) {

  	console.log('hello', res)
  })*/
 
    /*.on('response', function(response) {
    	console.log(response)
    	//console.log(response);
    })
    .on('error', function(err) {
    	console.log('err');
    })*/
    

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


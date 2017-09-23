const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const request = require('request');
const github = require('../helpers/github.js')
const { save, retrieveAll } = require('../database')

app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
	var user = req.body.user;
  github.getReposByUsername(user, (userRepos) => {
  	save(userRepos, (data) => console.log('saved data', data)); 
  })
});


app.get('/repos', function (req, res) {
  retrieveAll((instances) => {
  	console.log('retrieved data', instances);

  	res.json(instances[0].repos);
  });
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


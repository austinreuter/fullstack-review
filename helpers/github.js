const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, callback) => {

  let options = {
    url: 'https://api.github.com/users/' + user + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, res, body) => {
    var results = {};
    results.user = '';
    results.repos = [];
    JSON.parse(res.body).forEach((repo) => {
      results.repos.push(repo.url);
      results.user = repo.owner.login;
    });
    callback(results);
  })
}

module.exports.getReposByUsername = getReposByUsername;
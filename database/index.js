const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  user: String,
  repos: Array
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (userData, callback) => {
  var data = {
  	user: userData.user,
  	repos: userData.repos
  }
  var newRepo = new Repo(data);
  newRepo.save((err) => {
  	if (err) {
  		console.log(err);
  	} 
  });

};
let retrieveAll = (callback) => {
	Repo.find({}, (err, instances)=> {
    if (err) {
    	throw err;
    }
    callback(instances);
	})
};

module.exports.save = save;
module.exports.retrieveAll = retrieveAll;
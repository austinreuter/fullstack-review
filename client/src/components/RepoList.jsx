import React from 'react';
import Repo from './Repo.jsx'
//{{ props.repos.map((repo, index) => <Repo repo={repo} key={index} /> ) }}

const RepoList = (props) => {
	console.log('props.repos', props.repos)
  //const repos = props.repos.map((repo, index) => <Repo repo={repo} key={index} /> )
	return (
	  <div>
      <div>
        <h4> Repo List Component </h4>
        There are {props.repos.length} repos.
      </div>
      <ul>
        {props.repos.map((repo, key) => <Repo repo={repo} key={key}/>)}
      </ul>
    </div>
  )
}

export default RepoList;
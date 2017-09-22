import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componendDidMount() {
    //get request to server and direct db to get 'top 25';
  }

  search (term) {
    console.log(`${term} was searched`);
    //post from server
    //get back searched data
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: {user: term},
      //contentType: 'application/json',
      success: function(data) {
        console.log('success')
        console.log(data);
      },
      error: function(error) {
        console.log('err')
        console.log(error);
      }

    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
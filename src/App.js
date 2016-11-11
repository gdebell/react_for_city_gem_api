import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/sites')
    .then((data) => {
      console.log(data.data);
      this.setState({posts: data.data})
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header></header>
        </div>
        {this.state.posts.map(post =>
        <div key={post.id}>
        <div className="name">{post.name}</div><br />
        {post.city}, {post.state} <br />
        {post.description}<br />
        <img src={post.photo} alt={post.name}/><br />
        <button className={post.id} onClick={this.buttonClicked}>DELETE</button>
        <br /><br /><br /><br /><br /><br /><br /><br />
        </div>)}
      </div>
    );
  }

      buttonClicked(data) {
          console.log('Button was clicked!')
          console.log(data.target.className);
          var postNum = parseInt(data.target.className, 10);
          axios({
            method: 'delete',
            url: 'http://localhost:3001/sites/' + postNum,
            //data: {_method: 'delete'}
          })
          .then((response) => {
            console.log(response.data);
            console.log(response.statuse);
          })
          .catch(error => console.log(error));
      }

}

export default App;

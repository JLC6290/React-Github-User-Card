import React from 'react';
import GitUser from './components/GitUser';
import axios from 'axios';
import './App.css';
import GitFollower from './components/GitFollower';

class App extends React.Component {
  state = {
    users: {},
    followers: []
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/jlc6290")
      .then(response => {
        console.log(response.data)
        this.setState({
          users: response.data
        })
      })
      .catch(error => {
        console.log("error: ", error)
      })
    axios.get("https://api.github.com/users/jlc6290/followers")
      .then(response => {
        console.log("followers: ", response.data)
        this.setState({
          followers: response.data
        })
      })
      .catch(error => {
        console.log("error: ", error)
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Github User Cards</h1>
        </header>
        <div>
          <GitUser users={this.state.users}/>
          <GitFollower followers={this.state.followers}/>
        </div>
      </div>
    );
  }
}

export default App;

import React,{ Component } from 'react';

import './App.css'
import Profile from './components/profile'
import Children from './components/childrenComponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: " initial title",
      author: ' agung Tuanany'

    }

   this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({
      title: " A new title",
      author: " AGUNG TUANANY"
    });
  }

  render() {
    return (
      <div className="App">
        <Children
          title= {this.state.title}
          author= {this.state.author}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;

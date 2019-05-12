import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "App title",
      author: 'agung Tuanany'
    }

   this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({
      title: "A new title",
      author: "AGUNG TUANANY"
    });

  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>{this.state.author}</p>
        <div onClick={this.onClick}>click me</div>
      </div>

    );
  }
}

export default App;

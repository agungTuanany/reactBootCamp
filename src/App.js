import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "App title",
      author: 'agung Tuanany'
    }

   this.submitted = this.submitted.bind(this);
  }

  submitted(e) {
    e.preventDefault();

    console.log(this.input.value);
  }


  render() {
  const list = [
    'item 1',
    'item 2',
    'another item'
  ];
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>{this.state.author}</p>
      </div>

    );
  }
}

export default App;

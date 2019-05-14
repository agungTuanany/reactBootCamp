import React,{ Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "initial name"

    }

   this.updateName = this.updateName.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={this.updateName}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default App;

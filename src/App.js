import React,{ Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

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
          type="checkBox"
          onChange={this.updateName}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default App;

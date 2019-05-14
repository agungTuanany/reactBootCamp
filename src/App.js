import React,{ Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

   this.updateCheck = this.updateCheck.bind(this);
  }

  updateCheck(e) {
    this.setState({
      // checked will put in opposite what is previously it was
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="checkbox"
          onChange={this.updateCheck}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default App;

import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  clikcedItem() {
    alert('clicked!');
  }

  mouseOvered() {
    alert('overed Mouse');
  }

  onChange(e) {
    console.log(e.target.value);
  }

  submitted(e) {
    e.preventDefault();

    alert('submitted');
  }


  render() {
  const list = [
    'item 1',
    'item 2',
    'another item'
  ];
    return (
      <div className="App">
        <h1>Handling an Event in Reactjs / Event-Handler </h1>
        <h2>
          {
            list.map(item => {
              return (
                <div key={item}>
                  <div onClick={this.clikcedItem}>{item}</div>
                  {/*
                  <div onMouseOver={this.mouseOvered}>{item}</div>
                  */}
                </div>
              )
            })
          }
        </h2>
        <form onSubmit={this.submitted}>
          <input onChange={this.onChange} />
        </form>
      </div>

    );
  }
}

export default App;

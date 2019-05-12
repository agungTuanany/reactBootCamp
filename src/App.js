import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // whenever you pass in a method of the component to a element or to
    // a component you need to bind with '(this)'.
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
        <h1>Handling an Event in Reactjs / Event-Handler </h1>
        <h2>
          {
            list.map(item => {
              return (
                <div key={item} onClick={this.clikcedItem}>{item}</div>
              )
            })
          }
        </h2>
        <form onSubmit={this.submitted}>
          {/*in React a "ref=" attributes in element recommended to put a function   */}
          <input onChange={this.onChange} ref={input => this.input = input} />
        </form>
      </div>

    );
  }
}

export default App;

import React, { Component } from 'react'

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    // prevent the page from refreshing
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    // clearing the input after submitted
    this.nameInput.value='';
    this.priceInput.value='';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>ADD PRODUCT</h3>
        <input placeholder="NAME" ref={nameInput => this.nameInput = nameInput}/>
        <input placeholder="PRICE" ref={priceInput => this.priceInput = priceInput}/>
        <button>ADD</button>
        <hr />
      </form>

    );
  }
}

export default AddProduct

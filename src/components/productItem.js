import React, {Component} from 'react'

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }
  // define onDelete method that has pass-in as a props in App.js
  onDelete() {
    const {onDelete, name } = this.props;
    onDelete(name)
  }
  render() {
    const { name, price } = this.props;
    return (
      <div>
        <span>{name}</span>
        {` | `}
        <span>{price}</span>
        {` | `}
        <button onClick={this.onDelete}>DELETE</button>
      </div>
  )
  }
}

export default ProductItem

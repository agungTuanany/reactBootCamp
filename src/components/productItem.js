import React, {Component} from 'react'

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    }

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  // define onDelete method that has pass-in as a props in App.js
  onDelete() {
    const {onDelete, name } = this.props;
    onDelete(name)
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(e) {
    e.preventDefault();

    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({ isEdit: false });

  }

  render() {
    const { name, price } = this.props;
    return (
      <div>
        {
          this.state.isEdit
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder="NAME" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                <input placeholder="PRICE" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                <button>SAVE</button>
              </form>
            )
            : (
              <div>
                <span>{name}</span>
                {` | `}
                <span>{price}</span>
                {` | `}
                <button onClick={this.onEdit}>EDIT</button>
                {` | `}
                <button onClick={this.onDelete}>DELETE</button>
            </div>
            )
        }
      </div>
    )
  }
}

export default ProductItem

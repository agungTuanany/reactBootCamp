import React,{ Component } from 'react';
import './App.css';

import ProductItem from './components/productItem'
import AddProduct from './components/AddProduct'

const products = [
  {
    id: 1,
    name: 'Samsung x10',
    price: 400
  },
  {
    id: 2,
    name: 'samsung x9',
    price: 300
  }
];

localStorage.setItem('products', JSON.stringify(products));
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products })
  }

  getProducts() {
    return this.state.products
  }

  onAdd(name, price) {
    const products = this.getProducts();

    products.push({
      name,
      price
    });
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts })
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }

      return product;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <AddProduct
          onAdd={this.onAdd}
        />
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

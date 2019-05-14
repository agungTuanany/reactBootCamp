import React,{ Component } from 'react';
import './App.css';

import ProductItem from './components/productItem'

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
      product: []
    };

    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    this.getProducts();
  }

  // method will use
  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));

    this.setState({ products })
  }

  onDelete(name) {
    console.log(name);
    // this.setState({})
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.id}
                {...product}
                onDelete={this.onDelete}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

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
    //2. make a getProduct method just return the list of products
    const products = this.getProducts();
    // 3, declare a list of product before deleted
    this.setState({ products })
  }

  getProducts() {
    // 4. return getProducts 
    return JSON.parse(localStorage.getItem('products'));
  }

    //1. define onDelete method with a product which actually get deleted
  onDelete(name) {
    const products = this.getProducts();

    // 5. filtered deleted product
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    // 6. get result that showed up after deleted product
    this.setState({ products: filteredProducts })

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

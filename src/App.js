import React,{ Component } from 'react';
import './App.css';

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
  }

  componentWillMount() {
    this.getProducts();
  }

  // method will use
  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));

    this.setState({ products })
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <div key={product.id} >
                <span>{product.name}</span>
                {`|`}
                <span>{product.price}</span>
                {`|`}
              </div>

            );
          })
        }
      </div>
    );
  }
}

export default App;

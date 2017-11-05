import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      qty:0
    };
  }

  buy = () => {
    alert("Vous avez acheté un smartphone Android");
    this.setState({
      qty: this.state.qty + 1
    });
  }

  render() {
    return (
      <div className="App" >
        <p>Android - 199€</p>
        <button onClick={this.buy} type="submit">BUY</button>
        <p>quantity:{this.state.qty}</p>
        <hr/>
      </div>
    );
  }
}

class Total extends React.Component {
  render() {
    return(
      <h3>Total Cash: </h3>
    )
  }
}

class ProductList extends React.Component {
  render() {
    return(
      <div>
        <Product />
        <Product />
        <Product />
        <Total />
      </div>

    )
  }
}

export default ProductList;

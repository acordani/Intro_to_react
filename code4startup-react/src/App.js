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
      </div>
    );
  }
}

export default Product;

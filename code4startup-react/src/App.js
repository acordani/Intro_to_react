import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {

  buy = () => {
    alert("Vous avez acheté un smartphone Android");
  }
  render() {
    return (
      <div className="App" >
        <p>Android - 199€</p>
        <button onClick={this.buy} type="submit">BUY</button>
      </div>
    );
  }
}

export default Product;

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

  show = () => {
    this.props.handleShow(this.props.name);
  }

  render() {
    return (
      <div className="App" >
        <p>{this.props.name} - {this.props.price}€</p>
        <button onClick={this.buy} type="submit">BUY</button>
        <button onClick={this.show} type="submit">SHOW</button>
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

  showProduct = (name) => {
    alert('You selected' + name);
  }

  render() {
    return(
      <div>
        <Product name="Android" price={121} handleShow={this.showProduct} />
        <Product name="Apple" price={100} handleShow={this.showProduct} />
        <Product name="Nokia" price={90} handleShow={this.showProduct} />
        <Total />
      </div>

    )
  }
}

export default ProductList;

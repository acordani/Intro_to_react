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
    // alert("Vous avez acheté un smartphone Android");
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
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
      <h3>Total Cash: {this.props.total} </h3>
    )
  }
}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      total:0
    }
  }

  calculateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    });
  }

  showProduct = (name) => {
    alert('You selected' + name);
  }

  render() {
    return(
      <div>
        <Product name="Android" price={121} handleShow={this.showProduct} handleTotal={this.calculateTotal} />
        <Product name="Apple" price={100} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Product name="Nokia" price={90} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Total total={this.state.total} />
      </div>

    )
  }
}

export default ProductList;

import React, { Component } from 'react';

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
    );
  }
}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      total:0,
      productList: [
        { name: "Android", price: 121},
        { name: "Apple", price: 220},
        { name: "Nokia", price: 90},
      ]
    };
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
    const component = this
    const products = this.state.productList.map((product) => {
      return(
        <div>
          <Product name={product.name} price={product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal} />
        </div>
      )
    });
    
    return(
      <div className="App">
        <ProductForm />
        {products}
        <Total total={this.state.total} />
      </div>

    )
  }
}

class ProductForm extends React.Component {

  submit = (event) => {
  event.preventDefault();
  alert('Name: ' + this.name.value + ' € ' + this.price.value);
  }

  render() {
    return(
      <form onSubmit= {e => this.submit(e)} >
        <input type="text" placeholder="Product Name" ref={(input) => this.name = input} />
        <input type="text" placeholder="Product Price" ref={(input) => this.price = input} />
        <button type="submit">Created Product</button>
      </form>
    );
  }
}

export default ProductList;


## Table of Contents

- [Your First Component](#your-first-component)
- [Working With Events](#working-with-events)
- [Working With State](#working-with-state)
- [Reusable Components](#reusable-components)
- [Working With Property Data](#working-with-property-data)
- [Working With Property Function](#working-with-property-function)
- [Data Between Child Components](#data-between-child-components)
- [Working With Array](#working-with-array)



## Your First Component

Mettre en place le premier component <App /> avec un rendu en jsx Hello World

## Working with Events

- Appeler le component <Product/>
- Mettre en paragraphe - Android - 199€
- ajouter un bouton BUY
- Créer une fonction sur le bouton. Au submit, il doit y avoir une alert js qui s'affiche: Vous avez acheté un smartphone Android.

```
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
```

Faire attention, c'est onClick et pas onSubmit.

Il n'y a pas de parenthèse à this.buy


## Working With State

- Initialiser un state avec un objet qui aura comme clé/valeur qty:0
- Ajouter dans la fonction buy la mise à jour de l'objet qty quand on clique sur buy
- Indiquer en dessous du bouton buy la nouvelle quantité mise à jour.

```
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
```

Ne pas oublier qty à this.state



## Reusable Components

Ajouter un component Total et un component ProductList

```
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
```

### Working With Property Data

- Ajouter les props aux components Product
    - name="Android" price={121}
    - name="Apple" price={134}
    - name="Nokia" price={90}

```
<div>
        <Product name="Android" price={121} />
        <Product name="Apple" price={100}/>
        <Product name="Nokia" price={90}/>
        <Total />
      </div>
```

- Et rendre chaque product dans le jsx
{this.props.name} {this.props.price}


```
render() {
    return (
      <div className="App" >
        <p>{this.props.name} - {this.props.price}€</p>
        <button onClick={this.buy} type="submit">BUY</button>
        <p>quantity:{this.state.qty}</p>
        <hr/>
      </div>
    );
  }
}
```

### Working With Property Function

- Ajouter un bouton SHOW pour chaque Product.

Attention: La fonction doit être appelée dans le component <ProductList /> car les props des products(name...) sont dans ProductList.

  - Créer un bouton Show dans <Product />

```
<button onClick={this.show} type="submit">SHOW</button>
```

- Créer la fonction show dans <Product />
```
show = () => {
    
}
```

Il faut passer les informations par les props des `<Products />` qui se situent dans `<ProductList />`

Donc, a la suite des props name et price, on va passer la props `handleShow={this.showProduct}`

```
<Product name="Android" price={121} handleShow={this.showProduct} />
```

`this.showProduct` se refere à la fonction showProduct qui est dans le component `<ProductList />`

```
showProduct = (name) => {
    alert('You selected' + name);
  }
```

Puis pour terminer, dans la fonction show du component `<Product />`, mettre `this.props.handleShow(this.props.name)`

```
show = () => {
    this.props.handleShow(this.props.name);
  }
```

### Data Between Child Components

1 - Dans `<ProductList />`


C'est dans `<ProductList />` qu'il y a les props de <Product /> avec le price de chaque product.

Donc on rajoute une props pour calculer le total.

Mais pour faire un calcul, il faut d'abord initialiser le state. 

Donc:
  - On initialise le state:

```
  constructor() {
    super();
    this.state = {
      total:0
    }
  }
```

Avec un objet total egale à 0.

 - Puis, on va dans chaque `<Product />` et on ajoute un props `handleTotal={this.calculateTotal}`

 Il faut donc rajouter la fonction calculateTotal:

```
 calculateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    });
  }
```

2 - Puis dans `<Product />`

On rajoute à la fonction `buy`

`this.props.handleTotal(this.props.price)`


```
buy = () => {
    // alert("Vous avez acheté un smartphone Android");
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }
```

3 - Puis dans `<ProductList />`

On ajoute un props  au component `<Total />`

`<Total total=this.state.total>`

4 - Puis dans <Total />

on ajoute un props 

```
class Total extends React.Component {
  render() {
    return(
      <h3>Total Cash: {this.props.total} </h3>
    )
  }
}
```

## Working With Array

Transformer les `<Product />` en array dans `<ProductList />`

- Dans le state de `<ProductList />`, on ajoute un array.

```
this.state = {
      total:0,
      productList: [
        { name: "Android", price: "121"},
        { name: "Apple", price: "220"},
        { name: "Nokia", price: "90"},
      ]
    };
```

- Puis dans le render de `<ProductList />`, on va mapper sur cet array.

```
const products = this.state.productList.map((product) => {
  return(
    <div>
      <Product name={product.name} price={product.price} handleShow={this.showProduct} handleTotal={this.calculateTotal} />
    </div>
  )
});
```

On met le `map` dans une constante `products` car cela va nous permettre de l'appeler dans le render.

Il faut egalement à la place des this dans `{this.showProduct}` et `{this.calculateTotal}`,

créer une constante `component = this` car le this ici correspond à la fonction `products` et nous, on veux que cela correspond au component.
Donc, on crée une fonction component et on remplace les this par component. 

Donc:
```
const component = this
const products = this.state.productList.map((product) => {
  return(
    <div>
      <Product name={product.name} price={product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal} />
    </div>
  )
});
```
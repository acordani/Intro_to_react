
## Table of Contents

- [Your First Component](#your-first-component)
- [Working With Events](#working-with-events)
- [Working With State](#working-with-state)
- [Reusable Components](#reusable-components)
- [Working With Property Data](#working-with-property-data)
- [Working With Property Function](#working-with-property-function)
- [Data Between Child Components](#data-between-child-components)
- [Debugging in the Editor](#debugging-in-the-editor)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Code Splitting](#code-splitting)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Post-Processing CSS](#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](#adding-images-fonts-and-files)
- [Using the `public` Folder](#using-the-public-folder)
  - [Changing the HTML](#changing-the-html)
  - [Adding Assets Outside of the Module System](#adding-assets-outside-of-the-module-system)
  - [When to Use the `public` Folder](#when-to-use-the-public-folder)
- [Using Global Variables](#using-global-variables)
- [Adding Bootstrap](#adding-bootstrap)
  - [Using a Custom Theme](#using-a-custom-theme)
- [Adding Flow](#adding-flow)
- [Adding Custom Environment Variables](#adding-custom-environment-variables)
  - [Referencing Environment Variables in the HTML](#referencing-environment-variables-in-the-html)
  - [Adding Temporary Environment Variables In Your Shell](#adding-temporary-environment-variables-in-your-shell)
  - [Adding Development Environment Variables In `.env`](#adding-development-environment-variables-in-env)
- [Can I Use Decorators?](#can-i-use-decorators)
- [Integrating with an API Backend](#integrating-with-an-api-backend)
  - [Node](#node)
  - [Ruby on Rails](#ruby-on-rails)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)
  - ["Invalid Host Header" Errors After Configuring Proxy](#invalid-host-header-errors-after-configuring-proxy)
  - [Configuring the Proxy Manually](#configuring-the-proxy-manually)
  - [Configuring a WebSocket Proxy](#configuring-a-websocket-proxy)
- [Using HTTPS in Development](#using-https-in-development)
- [Generating Dynamic `<meta>` Tags on the Server](#generating-dynamic-meta-tags-on-the-server)
- [Pre-Rendering into Static HTML Files](#pre-rendering-into-static-html-files)
- [Injecting Data from the Server into the Page](#injecting-data-from-the-server-into-the-page)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Snapshot Testing](#snapshot-testing)
  - [Editor Integration](#editor-integration)
- [Developing Components in Isolation](#developing-components-in-isolation)
  - [Getting Started with Storybook](#getting-started-with-storybook)
  - [Getting Started with Styleguidist](#getting-started-with-styleguidist)
- [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Opting Out of Caching](#opting-out-of-caching)
  - [Offline-First Considerations](#offline-first-considerations)
  - [Progressive Web App Metadata](#progressive-web-app-metadata)
- [Analyzing the Bundle Size](#analyzing-the-bundle-size)
- [Deployment](#deployment)
  - [Static Server](#static-server)
  - [Other Solutions](#other-solutions)
  - [Serving Apps with Client-Side Routing](#serving-apps-with-client-side-routing)
  - [Building for Relative Paths](#building-for-relative-paths)
  - [Azure](#azure)
  - [Firebase](#firebase)
  - [GitHub Pages](#github-pages)
  - [Heroku](#heroku)
  - [Netlify](#netlify)
  - [Now](#now)
  - [S3 and CloudFront](#s3-and-cloudfront)
  - [Surge](#surge)
- [Advanced Configuration](#advanced-configuration)
- [Troubleshooting](#troubleshooting)
  - [`npm start` doesn’t detect changes](#npm-start-doesnt-detect-changes)
  - [`npm test` hangs on macOS Sierra](#npm-test-hangs-on-macos-sierra)
  - [`npm run build` exits too early](#npm-run-build-exits-too-early)
  - [`npm run build` fails on Heroku](#npm-run-build-fails-on-heroku)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
  - [Moment.js locales are missing](#momentjs-locales-are-missing)
- [Something Missing?](#something-missing)

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


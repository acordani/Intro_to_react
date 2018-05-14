## Table

- [Create App](#create-app)
- [A L interieur du Fichier](#a-l-interieur-du-fichier)
- [Creation de Notre Composant Racine](#creation-de-notre-composant-racine)
- [Utiliser Notre Composant App](#utiliser-notre-composant-app)
- [Creer Un Composant Enfant Form](#creer-un-composant-enfant-form)
- [Creer Un Composant Enfant ItemList](#creer-un-composant-enfant-itemlist)
- [Utliser Des Composants Enfants Depuis Un Composant Parent](#utiliser-des-composants-enfants-depuis-un-composant-parent)
- [Stateless Functional Components Et Class Based Components](#stateless-functional-components-et-class-based-components)
- [Transformer Un Stateless Functional Component En Class Based Component](#transformer-un-stateless-functional-component-en-class-based-component')
- [Gerer Les Evenements Du Dom](#gerer-les-evenements-du-dom')

 




## Create App
On crée une application avec create-react-app

`create-react-app shoppinglist`

Puis on va dans l'application

`cd shoppinglist`

Puis `npm start`

Ca ouvre le navigateur sur localhost 3000

![1-ecran accueil](https://user-images.githubusercontent.com/10654877/39969312-389a8546-56da-11e8-88f1-6eec264850a2.jpeg)

## A L interieur du Fichier

On efface tout le repertoire src

Puis on recrée un nouveau repertoire src

Puis a l'intérieur de src, on crée un autre repertoire components

A l'intérieur de components, on crée un fichier, appelé App.js

## Création de Notre Composant Racine

Ce sont des pièces de légos

Le premier fichier est notre composant racine.

Tout commence par l'import de React

import React from 'react';

Puis on crée le composant par une classe

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Liste des Courses</h3>
        <div>En construction</div>
      </div>

    );
  }
}

Puis pour pouvoir utilisezr ce composant, il faut l'exporter

export default App;

## Utiliser Notre Composant App

Afin de pouvoir utiliser ce componant,
on va créer un nouveau fichier au meme niveau que componant qui va s'appeler index.js

On démarre par l'import de Réact
Puis on va importer ReactDOM qui va permettre d'interagir avec le DOM de notre application web

Et on va importer egalement App

import App from './components/App';
Pas besoin de mettre App.js

Puis on va utiliser la methode render de ReactDOM

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );

  Si on va dans public/index.html, le  div root  existe.

  Et voilà ...

  image ecran2

  ## Creer Un Composant Enfant Form

  On va créer un formulaire afin de rajouter les infos que nous souhaitons acheter

  Du coup on veut avoir un component Form et un component ItemList pour afficher les articles.

  <Form />
  <ItemList />

  Et du cup, on crée Form.js

  On import React

  Et cette fois, on va créer une simple fonction

const Form = () => {
  Cette fonction va juste retourner du jsx
  return (
    <div>Form Component</div>
  );
};

et ensuite on exporte

 export default Form;


 ## Creer Un Composant Enfant ItemList

 On va donc maintenant avoir besoin du formulaire ItemList

 On import eact, puis on crée une fonction

 const ItemList = () => {
  return(
    <div>ItemList</div>
  );

};

export default ItemList;

## Utliser Des Composants Enfants Depuis Un Composant Parent

On retourne dans App.js et on fait 2 imports

import Form from './Form';
import ItemList from './ItemList';

## Stateless Functional Components Et Class Based Components


2 types de composants

composants basé sur les fonction et les composants basés sur les classes

Les stateless n'ont pas d'état. Ils recoivent des données et renvient du contenu a affiché. Ils ne font que ca.
Ca leur permet d'etre facile a tester

Et les Class Based, sont à utiliser quand on a besoin d'un état.


## Transformer Un Stateless Functional Component En Class Based Component

On peut changer les component.

Form => Class Based

Class Form extends React.Component {
  render() {
    return(
    );
  }
}

Depuis la dernière version, 
on peut créer le state en dehors d'un constructor

state = {};

le state va recceuillir les données saisies par l'utlisateur

Le state va etre un simple objet javascript qui va comportera les propriétés name et quantity

state = {
  name: "",
  quantity: 0
};

et ensuite on va créer notre formulaire dans la methode render.

<form>
  <input type="number" placeholder="quantité"/>
  <input type="text" placholder="article"/>
  <button type="submit">Ajouter</button>
</form>

L'avantage du type submit est qu'il peut etre validé par la touche entrée

## Gerer Les Evenements Du Dom


 









## Table

- [Create App](#create-app)
- [A L interieur du Fichier](#a-l-interieur-du-fichier)
- [Création de Notre Composant Racine](#creation-de-notre-composant-racine)
- [Utliser Notre Composant App](#utiliser-notre-composant-app)

## Create App
On crée une application avec create-react-app

`create-react-app shoppinglist`

Puis on va dans l'application

`cd shoppinglist`

Puis `npm start`

Ca ouvre le navigateur sur localhost 3000

image 1

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

## Utliser Notre Composant App







import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

import Flat from "./components/flat";

import Marker from "./components/marker";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
      this.setState({
        flats: data

      });
    })
  }

  

  render() {

    const center = {
    lat: 48.864716 ,
    lng: 2.349014
  }
  	

    return (
      
      	<div className="app">
          <div className="main">
            <div className="search">
            </div>
            <div className="flats">
              {this.state.flats.map((flat)  => {
                return <Flat key={flat.name} flat={flat} />
              })}
            </div>
          </div>
          <div className="map">
             <GoogleMapReact
              center={center}
              zoom={11}>
              {this.state.flats.map((flat)  => {
                return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />
              })}
            </GoogleMapReact>
          </div>
        </div>

      
    );
  }
}

export default App;

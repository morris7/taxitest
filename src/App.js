import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'
import GoogleMap from './components/GoogleMap'
import { Marker } from 'google-maps-react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      markers: []
    }
    this.updateTaxiPositions = this.updateTaxiPositions.bind(this);
    this.fetchCars = this.fetchCars.bind(this);
    this.maximumCount = 50;
    this.minimumCount = 1;
  }

  render () {
    const mapStyles = {
      postion: 'relative',
      width: '1000px',
      height: '600px'
    };

    return (
      <div style={mapStyles}>
        <GoogleMap markers={this.state.markers} />
        <Slider callback={this.fetchCars} min={this.minimumCount} max={this.maximumCount} />
      </div>
    );

  }

  updateTaxiPositions(taxiPositions){
    let markers = [];

    taxiPositions.forEach((taxi, index) => {
      let myLatLng = {
        lat: taxi.location.latitude,
        lng: taxi.location.longitude
      };

      let marker = (<Marker
        position={myLatLng}
        name= {taxi["driver_id"]}
        key={taxi["driver_id"]}
      />);

      markers[index] = marker;
    });

    this.setState({markers});
  }

  fetchCars(count){
    let url = `https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${count}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.updateTaxiPositions(data.drivers);
        })
        .catch(error => console.log('Error:', error));
  }

  componentDidMount(){
    this.fetchCars(10);
  }
}

export default App;

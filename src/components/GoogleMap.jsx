import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

class GoogleMapContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const mapStyles = {
      width: '1000px',
      height: '600px'
    };

    return (
      <Map
         google={this.props.google}
         zoom={14}
         style={mapStyles}
         initialCenter={{lat: 51.505, lng: -0.090}}
       >
       {this.props.markers}
      </Map>
     );
  }
}

GoogleMapContainer.propTypes = {
  markers: PropTypes.array
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDqPjL56MrI0i6noAg82tbix3EjJGEE2lM'
})(GoogleMapContainer);

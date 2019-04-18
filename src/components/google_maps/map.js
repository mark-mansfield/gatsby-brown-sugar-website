import React, { Component } from "react"

import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

const mapStyles = {
  width: "45%",
  height: "80%",
}

const mapOptions = {
  styles: mapStyles, // straight out of something like snazzymaps
}

const API_KEY = "AIzaSyDBwyEdFm3ow9XbiEIGV5A1q03dbZczBu0"
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        mapTypeControl={false}
        style={mapStyles}
        initialCenter={{
          lat: -33.887887,
          lng: 151.273167,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Brown Sugar Restaurant"} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer)

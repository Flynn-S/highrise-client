import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Geocode from "react-geocode";

// import { LocationOnIcon } from "@mui/icons-material/LocationOn";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODING_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("en");
// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get address from latitude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   (response) => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

const highriseLogo = "../images/highriseLogo(cropped).png";

// Get latitude & longitude from address.
const AnyReactComponent = ({ highriseLogo }) => (
  <div>
    <img
      src={highriseLogo}
      className="YOUR-CLASS-NAME"
      style={{ height: "auto", width: "100%" }}
    />
    <LocationOnIcon />
  </div>
);

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 51.46067,
      lng: -2.58112,
    },
    zoom: 16,
  };
  state = {
    location: {},
    center: { lat: 51.46067, lng: -2.58112 },
  };

  componentDidMount() {
    // or you can set markers list somewhere else
    // please also set your correct lat & lng
    // you may only use 1 image for all markers, if then, remove the img_src attribute ^^
    const { location } = this.props;
    this.setState({
      location: this.setState({ location }),
    });
    console.log(this.state.location);
    // Get latitude & longitude from address.
    Geocode.fromAddress(`${this.state.location}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({ center: { lat: lat, lng: lng } });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "80vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;

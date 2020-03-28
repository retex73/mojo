import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function GMap() {
    // Centre Map over London 
    return <GoogleMap defaultZoom={10} defaultCenter={
        {
            lat: 51.500149, lng: -0.126240
        }
    } />
}

const WrappedMap = withScriptjs(withGoogleMap(GMap));

const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";

export default function Map() {
    return (
        <div style={
            { height: '100vh' }
        }>
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />} />
        </div>
    )
}

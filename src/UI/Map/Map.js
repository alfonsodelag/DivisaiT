import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 40.416775, lng: - 3.703790 }}
        />
    )
}

export default withScriptjs(withGoogleMap(Map));
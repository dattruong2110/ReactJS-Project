import React, { useState } from 'react';
import './map.scss';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { InfoWindowContent } from '../info-window-content/info-window-content';

const googleMapsApiKey = process.env['GOOGLE_MAP_REACT_KEY'];

const markers = [
  { lat: 10.802771466961614, lng: 106.68831215077282 },
];

const containerStyle = {
  width: '1000px',
  height: '580px'
};

export const Map = ({ store }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleSelectedMarker = (marker) => {
    if (marker === selectedMarker) {
      return;
    }
    setSelectedMarker(marker);
  };

  return (
    <div style={{ height: '580px', width: '100%' }}>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        onClick={() => setSelectedMarker(null)}
        mapContainerStyle={containerStyle}
        center={{ lat: 10.802771466961614, lng: 106.68831215077282 }}
        zoom={8}
      > 
        {markers && 
          markers.map((marker, index) => {
            return (
              <Marker 
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => handleSelectedMarker({ lat: marker.lat, lng: marker.lng })}
              >
                {selectedMarker?.lat === marker.lat &&
                  selectedMarker?.lng === marker.lng && (
                    <InfoWindow>
                      <InfoWindowContent store={store}></InfoWindowContent>
                    </InfoWindow>
                  )}
              </Marker>
            );
          })}
      </GoogleMap>
      </LoadScript>
    </div>
  )
}
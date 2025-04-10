import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import usaMapData from '../../constants/us-states.json'; // GeoJSON for USA states
import AppBox from '../mui/AppBox';
import AppText from '../mui/AppText';

const USAStateMap: React.FC = () => {
  const navigate = useNavigate(); // For routing to state details page

  const handleStateClick = (stateId: string) => {
    // Navigate to the state detail page when a state is clicked
   navigate(`/state/${stateId}`);
  };

  return (
    <AppBox sx={{height: '36rem' }}>
        <AppBox sx={{height:'38px', paddingLeft:'30px'}}>
          <AppText variant='subtitle2' text={"1,294 stores within map area"} sx={{margin:'auto'}} />
        </AppBox>
      <MapContainer center={[37.8, -96]} zoom={4} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        {/* Tile layer (OpenStreetMap by default) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* GeoJSON Layer for displaying USA states */}
        <GeoJSON
        //@ts-expect-error "USA State type"
          data={usaMapData}
          onEachFeature={(feature, layer) => {
            const stateName = feature.properties.name;
            layer.on('click', () => handleStateClick(stateName)); // Add click event to navigate to details page

            // Custom styling for each state
            // layer.setStyle({
            //   fillColor: '#ddd',
            //   weight: 2,
            //   opacity: 1,
            //   color: 'black',
            //   dashArray: '3',
            //   fillOpacity: 0.7,
            // });

            // Optional: Add a popup for each state
            layer.bindPopup(`<strong>${stateName}</strong>`).openPopup();
          }}
        />

        {/* You can add custom markers if needed */}
        {/* Example of a custom marker (just for demonstration) */}
        <Marker position={[37.8, -96]} icon={L.icon({ iconUrl: '/path/to/custom-icon.png', iconSize: [25, 25] })}>
          <Popup>Custom marker example</Popup>
        </Marker>
      </MapContainer>
    </AppBox>
  );
};

export default USAStateMap;

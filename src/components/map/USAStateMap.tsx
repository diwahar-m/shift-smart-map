import React from "react";
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import usaMapData from "../../constants/us-states.json";
import AppBox from "../mui/AppBox";
import AppText from "../mui/AppText";
import { stateStyling } from "../../constants";
import { getStoresList } from "../../constants/storeData";

const USAStateMap: React.FC = () => {
  const navigate = useNavigate();
  const handleStateClick = (stateId: string) => {
    navigate(`/state/${stateId}`);
  };

  return (
    <AppBox sx={{ height: "34rem" }}>
      <AppBox sx={{ height: "38px", paddingLeft: "30px" }}>
        <AppText
          variant="subtitle2"
          text={`${getStoresList()?.length} stores within map area`}
          sx={{ margin: "auto" }}
        />
      </AppBox>
      <MapContainer
        center={[37.8, -96]}
        zoom={4.3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* GeoJSON for USA states */}
        <GeoJSON
          //@ts-expect-error "USA State type"
          data={usaMapData}
          onEachFeature={(feature, layer) => {
            const stateName = feature.properties.name;
            layer.on("click", () => handleStateClick(stateName)); // Add click event to navigate to details page
            // common styling for state
            stateStyling(stateName, layer);
            // hover effect
            const vectorLayer = layer as L.Path;
            layer.on("mouseover", () => {
              vectorLayer.getElement()?.classList.add("state-hover");
            });

            layer.on("mouseout", () => {
              vectorLayer.getElement()?.classList.remove("state-hover");
            });
          }}
        />
        <Marker
          position={[37.8, -96]}
          icon={L.icon({
            iconUrl: "/path/to/custom-icon.png",
            iconSize: [25, 25],
          })}
        >
          {/* <Popup>Custom marker example</Popup> */}
        </Marker>
      </MapContainer>
    </AppBox>
  );
};

export default USAStateMap;

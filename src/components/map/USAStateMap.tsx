/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import usaMapData from "../../constants/us-states.json";
import AppBox from "../mui/AppBox";
import AppText from "../mui/AppText";
import { stateStyling } from "../../constants";
// import { getStoresList } from "../../constants/storeData";
import marker from "../../assets/AllRegions/marker.png";
import { HeaderContext } from "../../context/HeaderContext";
import { getStoresList } from "../../constants/storeData";

const USAStateMap: React.FC = () => {
  const navigate = useNavigate();
  const { storesList, setStoresList } = useContext(HeaderContext);
  const handleStateClick = (stateId: string) => {
    navigate(`/state/${stateId}`);
  };

  useEffect(() => {
    setStoresList(getStoresList());
  }, []);

  // const customIcon = new L.Icon({
  //   iconUrl: marker,
  //   iconSize: [25, 25],
  // });

  return (
    <AppBox sx={{ height: "34rem" }}>
      <AppBox sx={{ height: "38px", paddingLeft: "30px" }}>
        <AppText
          variant="subtitle2"
          text={`${[...new Set(storesList?.map((_: any) => _?.name))]?.length} stores and ${storesList?.length} audits  within map area`}
          sx={{ margin: "auto" }}
        />
      </AppBox>
      <MapContainer
        maxBounds={[
          [24.396308, -125.0],
          [49.384358, -66.93457],
        ]}
        maxBoundsViscosity={1.0}
        center={[37.8, -96]}
        zoom={4.3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <GeoJSON
          data={oceanBackground}
          style={{
            fillColor: "#0B57C0",
            color: "#000000",
            fillOpacity: 2,
            weight: 2,
          }}
        /> */}

        {/* GeoJSON for USA states */}
        <GeoJSON
          //@ts-expect-error "USA State type"
          data={usaMapData}
          // style={{ fillColor: "#609FF6", color: "#fff" }}
          onEachFeature={(feature, layer) => {
            const stateName = feature.properties.name;

            layer.on("click", () => handleStateClick(stateName));
            // common styling for state
            stateStyling(stateName, layer);
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
          icon={
            new L.Icon({
              iconUrl: marker,
              iconSize: [1, 1],
            })
          }
        >
          {/* <Popup>Custom marker example</Popup> */}
        </Marker>
      </MapContainer>
    </AppBox>
  );
};

export default USAStateMap;

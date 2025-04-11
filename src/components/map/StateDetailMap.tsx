import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import usaMapData from "../../constants/us-states.json";
import AppBox from "../mui/AppBox";
import AppText from "../mui/AppText";
import useModal from "../../constants/hooks/useHooks";
import AppModal from "../mui/AppModal";
import StateInfo from "../card/StateInfo";
import DetailCard from "../card/DetailCard";

interface statePropertiesProps {
  name: string;
  density: number;
}

interface USAStateProps {
  type: string;
  id: string;
  properties: statePropertiesProps;
  geometry: {
    type: string;
    coordinates: Array<Array<Array<number>>>;
  };
}

const StateDetailsMap: React.FC = () => {
  const navigate = useNavigate();
  const { stateId } = useParams<{ stateId: string }>();
  const [selectedState, setSelectedState] = useState<USAStateProps>();
  const { open, handleClose, handleOpen } = useModal();

  useEffect(() => {
    const stateData = usaMapData.features.find(
      (state) => state.properties.name === stateId
    );
    // @ts-expect-error "USA state error"
    setSelectedState(stateData);
    handleOpen();
  }, [stateId]);

  if (!selectedState) {
    return <div>State not found!</div>;
  }

  const onEachState = (feature: any, layer: L.Layer) => {
    const stateName = feature.properties.name;
    layer.bindPopup(`<strong>${stateName}</strong>`);

    layer.on("click", () => handleStateClick(stateName));

    if (selectedState && stateName === selectedState?.properties?.name) {
      (layer as L.Path).setStyle({
        fillColor: "#3388ff",
        weight: 2,
        color: "#666",
        fillOpacity: 0.7,
      });
    } else {
      (layer as L.Path).setStyle({
        fillColor: "",
        weight: 1,
        color: "#666",
        fillOpacity: 0.3,
      });
    }
  };

  const handleStateClick = (stateId: string) => {
    // Navigate to the state detail page when a state is clicked
    navigate(`/state/${stateId}`);
  };

  return (
    <AppBox sx={{ height: "36rem" }}>
      <AppBox sx={{ height: "38px", paddingLeft: "30px" }}>
        <AppText
          variant="subtitle2"
          text={"1,294 stores within map area"}
          sx={{ margin: "auto" }}
        />
      </AppBox>
      <MapContainer
        center={[37.8, -96]} // Default center if no state data available
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Filter the state data to render only the clicked state's geometry */}
        <GeoJSON
          //@ts-expect-error "USA State type"
          data={usaMapData}
          onEachFeature={onEachState}
        />
      </MapContainer>
      <AppModal
        sx={{ position: "absolute", bottom: "5px", right: "5px" }}
        open={open}
        handleClose={handleClose}
      >
        <DetailCard
          stateName={selectedState?.properties?.name}
          children={<StateInfo />}
        />
      </AppModal>
    </AppBox>
  );
};

export default StateDetailsMap;

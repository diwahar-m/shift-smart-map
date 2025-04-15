import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import usaMapData from "../../constants/us-states.json";
import StateInfo from "../card/StateInfo";
import DetailCard from "../card/DetailCard";
import { stateStyling } from "../../constants";
import { StateCoordinates, USAStateProps } from "../../pages/state";

interface StateDetailProps {
  coordinates: StateCoordinates;
  selectedState: USAStateProps | undefined;
}

function LocationMarker({ stateName }: { stateName: string | undefined }) {
  const [zoom, setZoom] = useState<number>(5);

  useMapEvents({
    zoomend: (e) => {
      console.log(e.target.getZoom());
      setZoom(e.target.getZoom());
    },
  });

  const getPopupSizeFromZoom = (zoom: number): number[] => {
    if (zoom < 4) return [430, 292];
    return [500, 362];
  };

  return (
    <Popup
      offset={[220, 150]}
      closeButton={false}
      maxHeight={getPopupSizeFromZoom(zoom)?.[0]}
      maxWidth={getPopupSizeFromZoom(zoom)?.[1]}
    >
      <DetailCard stateName={stateName} children={<StateInfo />} />
    </Popup>
  );
}

const StateDetailsMap = ({ coordinates, selectedState }: StateDetailProps) => {
  const navigate = useNavigate();
  const markerRef = useRef<L.Marker | null>(null);
  const [stateName, setStateName] = useState<string>("");

  useEffect(() => {
    if (selectedState?.properties?.name)
      setStateName(selectedState?.properties?.name);
  }, [selectedState]);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, []);

  const handleStateClick = (stateId: string) => {
    navigate(`/stores`);
  };

  const onEachState = (feature: any, layer: L.Layer) => {
    const stateName = feature.properties.name;
    stateStyling(stateName, layer);

    layer.on("click", () => handleStateClick(stateName));

    if (selectedState && stateName === selectedState?.properties?.name) {
      (layer as L.Path).setStyle({
        fillColor: "#8cebf9",
        weight: 2,
        color: "#666",
        fillOpacity: 0.7,
      });
    }
  };

  if (!selectedState) {
    return <div>State not found!</div>;
  }

  return (
    <MapContainer
      center={[coordinates?.latitude, coordinates?.longitude]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <GeoJSON
        key={stateName}
        //@ts-expect-error "USA State type"
        data={usaMapData}
        onEachFeature={onEachState}
      />
      <Marker
        position={[coordinates?.latitude, coordinates?.longitude]}
        ref={markerRef}
      >
        <LocationMarker stateName={stateName} />
      </Marker>
    </MapContainer>
  );
};

export default StateDetailsMap;

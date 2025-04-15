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
import L from "leaflet";
// import { MarkerIconImage } from "../../assets";
import marker from "../../assets/AllRegions/marker.png";

interface StateDetailProps {
  coordinates: StateCoordinates;
  selectedState: USAStateProps | undefined;
  modal?: React.ReactElement;
}

interface LocationMarkerInterface {
  stateName: string | undefined;
  modal?: React.ReactElement;
}

function LocationMarker({ stateName, modal }: LocationMarkerInterface) {
  const [zoom, setZoom] = useState<number>(5);

  useMapEvents({
    zoomend: (e) => {
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
      {modal ? (
        modal
      ) : stateName ? (
        <DetailCard
          stateName={stateName}
          children={<StateInfo stateName={stateName} />}
        />
      ) : (
        <></>
      )}
    </Popup>
  );
}

const StateDetailsMap = ({
  coordinates,
  selectedState,
  modal,
}: StateDetailProps) => {
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
    navigate(`/state/${stateId}`);
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

  const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });

  if (!selectedState) {
    return <div>State not found!</div>;
  }

  return (
    <MapContainer
      center={[coordinates?.latitude, coordinates?.longitude]}
      zoom={modal ? 9 : 5}
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
        icon={customIcon}
      >
        <LocationMarker stateName={stateName} modal={modal} />
      </Marker>
    </MapContainer>
  );
};

export default StateDetailsMap;

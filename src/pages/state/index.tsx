import { useEffect, useState } from "react";
import StateDetailsMap from "../../components/map/StateDetailMap";
import AppBox from "../../components/mui/AppBox";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import AppText from "../../components/mui/AppText";
import usaMapData from "../../constants/us-states.json";
import usaCoordinates from "../../constants/us-coordinates.json";
import { useParams } from "react-router-dom";
import { getStoresList } from "../../constants/storeData";

interface statePropertiesProps {
  name: string;
  density: number;
}
export interface USAStateProps {
  type: string;
  id: string;
  properties: statePropertiesProps;
  geometry: {
    type: string;
    coordinates: Array<Array<Array<number>>> | undefined;
  };
}
export interface StateCoordinates {
  state: string;
  latitude: number;
  longitude: number;
}

export default function StatePage() {
  const [selectedState, setSelectedState] = useState<USAStateProps>();
  const [coordinates, setCoordinates] = useState<StateCoordinates>({
    state: "USA",
    latitude: 37.8,
    longitude: -96,
  });
  const { stateId } = useParams<{ stateId: string }>();
  // const { open, handleClose, handleOpen } = useModal();

  useEffect(() => {
    const stateData = usaMapData.features.find(
      (state) => state.properties.name === stateId
    );
    const stateCoordinates = usaCoordinates?.filter(
      (_) => _?.state === stateId
    );
    setCoordinates(stateCoordinates?.[0]);
    // @ts-expect-error "USA state error"
    setSelectedState(stateData);
    // handleOpen();
  }, [stateId]);

  return (
    <AppVStack sx={{ flex: 1, width: "100%", maxWidth: "100%" }}>
      <AppBox sx={{ height: "34rem" }}>
        <AppBox sx={{ height: "38px", paddingLeft: "30px" }}>
          <AppText
            variant="subtitle2"
            text={`${getStoresList()?.length} stores within map area`}
            sx={{ margin: "auto" }}
          />
        </AppBox>
        <StateDetailsMap
          coordinates={coordinates}
          selectedState={selectedState}
        />
        {/* <AppModal
        sx={{ position: "absolute", bottom: "5px", right: "5px" }}
        open={open}
        handleClose={handleClose}
      >
        <DetailCard
          stateName={selectedState?.properties?.name}
          children={<StateInfo />}
        />
      </AppModal> */}
      </AppBox>
    </AppVStack>
  );
}

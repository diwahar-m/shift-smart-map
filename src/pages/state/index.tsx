import HeaderBar from "../../components/common/HeaderBar";
import StateDetailsMap from "../../components/map/StateDetailMap";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import { inventoryDetails } from "../dashboard";

export default function StatePage() {
  return (
    <AppVStack sx={{ flex: 1, width: "100%", maxWidth: "100%" }}>
      <HeaderBar headerCardDetails={inventoryDetails} />
      <StateDetailsMap />
    </AppVStack>
  );
}

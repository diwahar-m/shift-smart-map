import AppVStack from "../../components/mui/AppStack/AppVStack";
import ActionItems from "../../components/trends/ActionItems";
import DeferredMaintenance from "../../components/trends/DeferredMaintenance";
import RegionStatus from "../../components/trends/RegionStatus";
import TrendsHeader from "../../components/trends/trendsHeader";

const Trends = () => {
  return (
    <AppVStack sx={{ gap: "48px" }}>
      <TrendsHeader />
      <ActionItems />
      <RegionStatus />
      <DeferredMaintenance />
    </AppVStack>
  );
};

export default Trends;

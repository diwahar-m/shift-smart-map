import AppHStack from "../../components/mui/AppStack/AppHStack";
import AppVStack from "../../components/mui/AppStack/AppVStack";
// import ActionItems from "../../components/trends/ActionItems";
// import DeferredMaintenance from "../../components/trends/DeferredMaintenance";
// import RegionStatus from "../../components/trends/RegionStatus";
import TrendsHeader from "../../components/trends/trendsHeader";
import AverageSku from "../../components/trendsDummy/AverageSku";
import InventoryLevels from "../../components/trendsDummy/InventoryLevels";
import OnShelfRates from "../../components/trendsDummy/OnShelfRates";
import OutOfStockRates from "../../components/trendsDummy/OutOfStockRates";

const Trends = () => {
  return (
    <AppVStack sx={{ gap: "48px" }}>
      <TrendsHeader />
      {/* <ActionItems />
      <RegionStatus />
      <DeferredMaintenance /> */}

      {/* -------------DUMMY VALUES */}
      <InventoryLevels />
      <AverageSku />
      <AppHStack sx={{ gap: "6px" }}>
        <OutOfStockRates />
        <OnShelfRates />
      </AppHStack>
    </AppVStack>
  );
};

export default Trends;

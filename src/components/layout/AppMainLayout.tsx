import { Outlet } from "react-router-dom";
import AppHStack from "../mui/AppStack/AppHStack";
import SideBar from "../common/SideBar";
import AppVStack from "../mui/AppStack/AppVStack";
import HeaderBar from "../common/HeaderBar";
import { inventoryDetails } from "../../pages/dashboard";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";

export default function AppMainLayout() {
  const { onStateChange, onDateRangeChange } = useContext(HeaderContext);

  return (
    <AppHStack
      sx={{
        alignItems: "flex-start",
        minHeight: "100vh",
        maxWidth: "100vw",
      }}
    >
      <SideBar />

      <AppVStack sx={{ flex: 1, width: "100%", maxWidth: "100%" }}>
        <HeaderBar
          onStateChange={onStateChange}
          onDateRangeChange={onDateRangeChange}
          headerCardDetails={inventoryDetails}
        />
        <Outlet />
      </AppVStack>
    </AppHStack>
  );
}

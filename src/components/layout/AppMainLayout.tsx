import { Outlet, useLocation } from "react-router-dom";
import AppHStack from "../mui/AppStack/AppHStack";
// import SideBar from "../common/SideBar";
import AppVStack from "../mui/AppStack/AppVStack";
import HeaderBar from "../common/HeaderBar";
import { inventoryDetails } from "../../pages/dashboard";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { SessionNavBar } from "../ui/sidebar";

export default function AppMainLayout() {
  const { onStateChange, stateName } = useContext(HeaderContext);
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.region) onStateChange(state?.region);
    else if (state?.stateName) onStateChange(state?.stateName);
  }, [state]);

  return (
    <AppHStack
      sx={{
        alignItems: "flex-start",
        maxHeight: "100vh",
        maxWidth: "100vw",
        overflowY: "hidden",
      }}
    >
      {/* <SideBar /> */}
      <SessionNavBar />
      <AppVStack
        sx={{
          marginLeft: "3.05rem",
          zIndex: 30,
          flex: 1,
          width: "100%",
          maxWidth: "100%",
          maxHeight: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {pathname?.includes("trends") ? (
          <></>
        ) : (
          <HeaderBar
            onStateChange={onStateChange}
            // onDateRangeChange={onDateRangeChange}
            headerCardDetails={
              stateName ? inventoryDetails(stateName) : inventoryDetails()
            }
            stateName={stateName}
          />
        )}
        <Outlet />
      </AppVStack>
    </AppHStack>
  );
}

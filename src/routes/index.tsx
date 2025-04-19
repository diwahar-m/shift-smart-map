import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import AppMainLayout from "../components/layout/AppMainLayout";
import StoreLayout from "../components/layout/StoreLayout";
import HeaderContextProvider from "../context/HeaderContext";
import {
  DashboardRoutes,
  StateRoutes,
  StoreDetailPageRoutes,
  StoreRoutes,
  StoreViewPageRoutes,
} from "./stateRoutes";
import { TrendRoutes } from "./trendRoutes";
import AppCenterStack from "../components/mui/AppStack/AppCenterStack";
import AppVStack from "../components/mui/AppStack/AppVStack";
// import AppBox from "../components/mui/AppBox";
import AppImage from "../components/mui/AppImage";
import { SidebarLogoIcon } from "../assets";
import AppText from "../components/mui/AppText";

function MobileView() {
  return (
    <AppCenterStack sx={{ height: "100vh", width: "100vw" }}>
      <AppVStack sx={{ gap: "25px", alignItems: "center" }}>
        <AppImage src={SidebarLogoIcon} alt="logo" />
        <AppText
          fontStyles={["16px", "18px", "600"]}
          sx={{ color: "#000" }}
          text="Kindly load this page on desktop for better view"
        />
      </AppVStack>
    </AppCenterStack>
  );
}

export default function Routes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <HeaderContextProvider>
          <AppMainLayout />
        </HeaderContextProvider>
      ),
      children: [
        DashboardRoutes,
        StateRoutes,
        StoreRoutes,
        StoreViewPageRoutes,
        TrendRoutes,
      ],
    },
    {
      path: "/store",
      element: <StoreLayout />,
      children: [StoreDetailPageRoutes],
    },
  ]);

  return isMobile ? <MobileView /> : routes;
}

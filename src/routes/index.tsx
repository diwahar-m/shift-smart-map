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
import { CraftheinzIcon, ShiftsmartIcon } from "../assets";
import AppText from "../components/mui/AppText";
import AppHStack from "../components/mui/AppStack/AppHStack";
import { Divider } from "@mui/material";
import AppBox from "../components/mui/AppBox";

function MobileView() {
  return (
    <AppCenterStack sx={{ height: "100vh", width: "100vw" }}>
      <AppVStack sx={{ gap: "25px", alignItems: "center" }}>
        <AppHStack sx={{ height: "28px", gap: "13px", width: "260px" }}>
          <AppImage
            src={ShiftsmartIcon}
            sx={{ padding: "5px 0 5px ", width: "240px" }}
          />
          <Divider orientation="vertical" />
          <AppBox
            sx={{
              border: "1px solid #CBD5E1",
              borderRadius: "50px",
              width: "42px",
              height: "42px",
            }}
          >
            <AppImage sx={{ width: "40px" }} src={CraftheinzIcon} alt="logo" />
          </AppBox>
        </AppHStack>
        {/* <AppImage src={SidebarLogoIcon} sx={{ width: "300px" }} alt="logo" /> */}
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

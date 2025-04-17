import { useRoutes } from "react-router-dom";
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

export default function Routes() {
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
  return routes;
}

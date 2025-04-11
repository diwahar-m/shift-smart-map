import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./dashboard";
import AppMainLayout from "../components/layout/AppMainLayout";
import StateRoutes from "./state";
import StoreRoutes from "./stores";
import StoreDetailPageRoutes from "./storeDetail";
import StoreLayout from "../components/layout/StoreLayout";
import StoreViewPageRoutes from "./storeView";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppMainLayout />,
      children: [
        DashboardRoutes,
        StateRoutes,
        StoreRoutes,
        StoreViewPageRoutes,
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

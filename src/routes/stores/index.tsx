import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.js";
import { lazy } from "react";

const Stores_Page = "/stores";

const StoresPage = AppLoadSuspense(
  lazy(() => import("../../pages/stores/index.tsx"))
);

const StoreRoutes = {
  path: Stores_Page,
  element: <StoresPage />,
};

export default StoreRoutes;

import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.js";
import { lazy } from "react";

const StoreView_Page = "/store/:storeId/view";

const StoreViewPage = AppLoadSuspense(
  lazy(() => import("../../pages/storesView/index.tsx"))
);

const StoreViewPageRoutes = {
  path: StoreView_Page,
  element: <StoreViewPage />,
};

export default StoreViewPageRoutes;

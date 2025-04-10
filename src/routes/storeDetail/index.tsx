import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.js";
import { lazy } from "react";

const StoreDetail_Page = "/store/:storeId";

const StatePage = AppLoadSuspense(
  lazy(() => import("../../pages/storesDetail/index.js"))
);

const StoreDetailPageRoutes = {
  path: StoreDetail_Page,
  element: <StatePage />,
};

export default StoreDetailPageRoutes;

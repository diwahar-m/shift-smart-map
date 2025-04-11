import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.js";
import { lazy } from "react";

const StoreDetail_Page = "/store/:storeId";

const StorePage = AppLoadSuspense(
  lazy(() => import("../../pages/storesDetail/index.tsx"))
);

const StoreDetailPageRoutes = {
  path: StoreDetail_Page,
  element: <StorePage />,
};

export default StoreDetailPageRoutes;

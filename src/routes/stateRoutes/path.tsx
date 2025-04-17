import { lazy } from "react";
import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.tsx";

export const DashboardPage = AppLoadSuspense(
  lazy(() => import("../../pages/dashboard/index.js"))
);
export const StatePage = AppLoadSuspense(
  lazy(() => import("../../pages/state/index.js"))
);
export const StoreDetailPage = AppLoadSuspense(
  lazy(() => import("../../pages/stores/storesDetail/index.tsx"))
);
export const StoresPage = AppLoadSuspense(
  lazy(() => import("../../pages/stores/index.tsx"))
);
export const StoreViewPage = AppLoadSuspense(
  lazy(() => import("../../pages/storesView/index.tsx"))
);

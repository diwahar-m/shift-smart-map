import {
  Dashboard_Route,
  State_Route,
  StoreDetail_Route,
  Stores_Route,
  StoreView_Route,
} from "../url.js";
import {
  DashboardPage,
  StatePage,
  StoreDetailPage,
  StoresPage,
  StoreViewPage,
} from "./path.js";

export const DashboardRoutes = {
  path: Dashboard_Route,
  element: <DashboardPage />,
};
export const StateRoutes = {
  path: State_Route,
  element: <StatePage />,
};
export const StoreDetailPageRoutes = {
  path: StoreDetail_Route,
  element: <StoreDetailPage />,
};
export const StoreRoutes = {
  path: Stores_Route,
  element: <StoresPage />,
};
export const StoreViewPageRoutes = {
  path: StoreView_Route,
  element: <StoreViewPage />,
};

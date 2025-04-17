import { lazy } from "react";
import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.js";

export const TrendsPage = AppLoadSuspense(
  lazy(() => import("../../pages/trends/index.js"))
);

import { Outlet } from "react-router-dom";
import AppHStack from "../mui/AppStack/AppHStack";
import SideBar from "../common/SideBar";

export default function AppMainLayout() {
  return (
    <AppHStack
      sx={{ alignItems: "flex-start", minHeight: "100vh", maxWidth: "100vw" }}
    >
      <SideBar />
      <Outlet />
    </AppHStack>
  );
}

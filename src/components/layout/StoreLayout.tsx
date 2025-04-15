import { Outlet } from "react-router-dom";
import SideBarMini from "../common/SideBarMini";
import AppHStack from "../mui/AppStack/AppHStack";

export default function StoreLayout() {
  return (
    <AppHStack
      sx={{
        alignItems: "flex-start",
        minHeight: "100vh",
        maxWidth: "100vw",
      }}
    >
      <SideBarMini />
      {/* <AppHStack sx={{ flex: 1, maxWidth: "100%" }}> */}
      <Outlet />
      {/* </AppHStack> */}
    </AppHStack>
  );
}

import { Map, Text } from "lucide-react";
import AppHStack from "../mui/AppStack/AppHStack";
import AppButton from "../mui/AppButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function PathCard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isStoreListingPage = pathname?.includes("store");

  return (
    <AppHStack>
      <AppButton
        handleClick={() => navigate("/")}
        sx={{
          minWidth: "44px",
          padding: "9px",
          backgroundColor: isStoreListingPage ? "#fff" : "#E9EFF7",
          borderRightWidth: 0,
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          border: "1px solid #CBD5E1",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Map width={"12px"} color={"#052757"} />
      </AppButton>
      <AppButton
        handleClick={() => navigate("/stores")}
        sx={{
          minWidth: "44px",
          padding: "9px",
          backgroundColor: isStoreListingPage ? "#E9EFF7" : "#fff",
          borderRightWidth: "1px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          border: "1px solid #CBD5E1",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <Text width={"12px"} />
      </AppButton>
    </AppHStack>
  );
}

import AppImage from "../mui/AppImage";
import { AuditsIcon, ShiftIcon, TrendsIcon } from "../../assets";
import AppBox from "../mui/AppBox";
import AppButton from "../mui/AppButton";
import AppVStack from "../mui/AppStack/AppVStack";
import { useNavigate } from "react-router-dom";

export default function SideBarMini() {
  const navigate = useNavigate();

  return (
    <AppVStack
      sx={{
        minHeight: "100vh",
        maxWidth: "5%",
        padding: "14px 8px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        border: "1px solid #CBD5E1",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        flex: 1,
      }}
    >
      {/* Logo container */}

      <AppImage
        src={ShiftIcon}
        alt={"logo"}
        sx={{ height: "26px", marginTop: "7px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      {/* Links container */}
      <AppVStack sx={{ gap: "4px", alignItems: "center" }}>
        <AppButton
          sx={{
            backgroundColor: "#0B57C0",
            borderRadius: "11px",
            maxWidth: "70%",
            minWidth: "40px",
            maxHeight: "44px",
            padding: "19px",
          }}
        >
          <AppImage src={AuditsIcon} alt={"logo"} />
        </AppButton>
        <AppButton
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            maxWidth: "70%",
            minWidth: "40px",
            height: "44px",
            padding: "19px",
          }}
        >
          <AppImage src={TrendsIcon} alt={"logo"} />
        </AppButton>
      </AppVStack>
    </AppVStack>
  );
}

import AppImage from "../mui/AppImage";
import { AuditsIcon, ShiftIcon, TrendsIcon } from "../../assets";
import AppBox from "../mui/AppBox";
import AppButton from "../mui/AppButton";
import AppVStack from "../mui/AppStack/AppVStack";

export default function SideBarMini() {
  return (
    <AppVStack
      sx={{
        height: "100vh",
        maxWidth: "100px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        border: "1px solid #CBD5E1",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
      }}
    >
      {/* Logo container */}

      <AppImage src={ShiftIcon} alt={"logo"} sx={{ height: "26px" }} />

      {/* Links container */}
      <AppBox sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <AppButton
          sx={{
            backgroundColor: "#0B57C0",
            borderRadius: "19px",
            maxWidth: "52px",
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
            maxWidth: "52px",
            height: "44px",
            padding: "19px",
          }}
        >
          <AppImage src={TrendsIcon} alt={"logo"} />
        </AppButton>
      </AppBox>
    </AppVStack>
  );
}

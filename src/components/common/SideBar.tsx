import AppImage from "../mui/AppImage";
import { AuditsIcon, SidebarLogoIcon, TrendsIcon } from "../../assets";
import AppBox from "../mui/AppBox";
import AppButton from "../mui/AppButton";
import AppText from "../mui/AppText";

export default function SideBar() {
  return (
    <AppBox
      sx={{
        height: "100vh",
        maxWidth: "260px",
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
      <AppBox sx={{ borderColor: "#CBD5E1", borderWidth: "5px" }}>
        <AppBox sx={{ height: "28px", width: "100%" }}>
          <AppImage src={SidebarLogoIcon} alt={"logo"} />
        </AppBox>
      </AppBox>
      {/* Links container */}
      <AppBox sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <AppButton
          sx={{
            backgroundColor: "#0B57C0",
            borderRadius: "12px",
            width: "208px",
            height: "44px",
            padding: "19px",
          }}
        >
          <AppBox sx={{ display: "flex", gap: "5px", marginLeft: "-95px" }}>
            <AppImage src={AuditsIcon} alt={"logo"} />
            <AppText sx={{ color: "#fff" }} text={"Audits"} />
          </AppBox>
        </AppButton>
        <AppButton
          sx={{
            backgroundColor: "##fff",
            borderRadius: "12px",
            width: "208px",
            height: "44px",
            padding: "19px",
          }}
        >
          <AppBox sx={{ display: "flex", gap: "5px", marginLeft: "-95px" }}>
            <AppImage src={TrendsIcon} alt={"logo"} />
            <AppText sx={{ color: "#475569" }} text={"Trends"} />
          </AppBox>
        </AppButton>
      </AppBox>
    </AppBox>
  );
}

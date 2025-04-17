import AppImage from "../mui/AppImage";
import { AuditsIcon, SidebarLogoIcon, TrendsIcon } from "../../assets";
import AppBox from "../mui/AppBox";
import { useLocation, useNavigate } from "react-router-dom";
import AppButtonIcon from "../features/AppButtonIcon";
import { ClipboardList, TrendingUp } from "lucide-react";

export default function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        <AppBox
          onClick={() => navigate("/")}
          sx={{ height: "28px", width: "100%", cursor: "pointer" }}
        >
          <AppImage src={SidebarLogoIcon} alt={"logo"} />
        </AppBox>
      </AppBox>
      {/* Links container */}
      <AppBox sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <AppButtonIcon
          text={"Audits"}
          handleClick={() => navigate("/")}
          isActive={pathname?.length === 1}
          icon={<ClipboardList size={21} />}
          sx={{ padding: "12px 16px" }}
          textStyles={{ marginBottom: "6px" }}
        />
        <AppButtonIcon
          text={"Trends"}
          handleClick={() => navigate("/trends")}
          isActive={pathname?.includes("trends")}
          textStyles={{ marginBottom: "6px" }}
          sx={{ padding: "12px 16px" }}
          icon={<TrendingUp />}
        />
      </AppBox>
    </AppBox>
  );
}

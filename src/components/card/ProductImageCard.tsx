import { SampleProductImage } from "../../assets";
import AppImage from "../mui/AppImage";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

export default function ProductImageCard() {
  return (
    <AppVStack
      sx={{
        padding: "14px",
        gap: "10px",
        minWidth: "14rem",
        borderRadius: "24px",
        bgcolor: "#F8FAFC",
      }}
    >
      <AppText
        sx={{
          color: "#000000",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 400,
        }}
        text="Mar 18, 2025 9:08  AM"
      />
      <AppImage
        src={SampleProductImage}
        sx={{ minWidth: "85%", minHeight: "95", borderRadius: "12px" }}
      />
    </AppVStack>
  );
}

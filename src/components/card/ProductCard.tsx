import { ProductImage } from "../../assets";
import AppImage from "../mui/AppImage";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

export default function ProductCard() {
  return (
    <AppHStack
      sx={{
        border: "1px solid #E9EFF7",
        borderRadius: "12px",
        padding: "12px",
        gap: "16px",
        maxWidth: "260px",
        backgroundColor: "#E9EFF7",
      }}
    >
      <AppImage src={ProductImage} />
      <AppVStack>
        <AppText
          sx={{ fontSize: "16px", lineHeight: "20px", fontWeight: 600 }}
          text={"Capri Sun"}
        />
        <AppText
          sx={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}
          text={"Fruit Punch"}
        />
      </AppVStack>
    </AppHStack>
  );
}

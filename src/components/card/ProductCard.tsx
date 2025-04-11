import { SxProps } from "@mui/material";
import { ProductImage } from "../../assets";
import AppImage from "../mui/AppImage";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import TagCard from "./TagCard";
import { stockPrice } from "../mui/AppTable";

interface ProductCardProps {
  sx?: SxProps;
  detail?: stockPrice;
}

export default function ProductCard({ sx, detail }: ProductCardProps) {
  return (
    <AppHStack
      sx={{
        border: "1px solid #E9EFF7",
        borderRadius: "12px",
        padding: "8px",
        gap: "16px",
        maxWidth: "260px",
        backgroundColor: "#E9EFF7",
        ...sx,
      }}
    >
      <AppImage src={ProductImage} />
      {detail?.stock ? (
        <AppVStack sx={{ gap: "10px" }}>
          <AppHStack sx={{ justifyContent: "space-between", width: "100%" }}>
            <AppVStack sx={{ gap: "2px" }}>
              <AppText
                sx={{ fontSize: "16px", lineHeight: "20px", fontWeight: 600 }}
                text={"Capri Sun"}
              />
              <AppText
                sx={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}
                text={"Fruit Punch"}
              />
            </AppVStack>
            <AppText
              variant="subtitle2"
              sx={{ fontSize: "14px", lineHeight: "20px" }}
              text={detail?.price}
            />
          </AppHStack>
          <TagCard title={detail?.stock} theme={"green"} />
        </AppVStack>
      ) : (
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
      )}
    </AppHStack>
  );
}

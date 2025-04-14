import { SxProps } from "@mui/material";
import { ProductImage } from "../../assets";
import AppImage from "../mui/AppImage";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import TagCard from "./TagCard";
import { stockPrice } from "../mui/AppTable";
import { productDetail } from "../stores/StoreProductList";
import AppButton from "../mui/AppButton";

interface ProductCardProps {
  sx?: SxProps;
  detail?: stockPrice;
  productDetail: productDetail;
  path?: string;
  productTab?: string;
  setProductTab?: (arg0: string) => void;
}

export default function ProductCard({
  sx,
  detail,
  productDetail,
  productTab,
  setProductTab,
}: ProductCardProps) {
  return (
    <AppButton
      sx={{ padding: 0, width: "100%" }}
      handleClick={() => {
        if (setProductTab) setProductTab(productDetail?.title);
      }}
    >
      <AppHStack
        sx={{
          border: "1px solid #E9EFF7",
          borderRadius: "12px",
          padding: "8px",
          gap: "16px",
          minWidth: "260px",
          backgroundColor: productDetail?.link
            ? productDetail?.title === productTab
              ? "#E9EFF7"
              : "#fff"
            : "#fff",
          ...sx,
        }}
      >
        <AppImage src={ProductImage} />
        {detail?.stock ? (
          <AppVStack sx={{ gap: "10px", width: "100%" }}>
            <AppHStack sx={{ justifyContent: "space-between", width: "100%" }}>
              <AppVStack sx={{ gap: "2px" }}>
                <AppText
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: 600,
                    color: "#000",
                  }}
                  text={"Capri Sun"}
                />
                <AppText
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
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
        ) : productDetail?.title ? (
          <AppVStack>
            <AppText
              sx={{
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 600,
                color: "#000",
                textAlign: "left",
              }}
              text={"Capri Sun"}
            />
            <AppText
              sx={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "#000",
                textAlign: "left",
              }}
              text={productDetail?.title}
            />
          </AppVStack>
        ) : (
          <></>
        )}
      </AppHStack>
    </AppButton>
  );
}

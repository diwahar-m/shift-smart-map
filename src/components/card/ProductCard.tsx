import { SxProps } from "@mui/material";
import { ProductImage } from "../../assets";
import AppImage from "../mui/AppImage";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import TagCard from "./TagCard";
import { productDetail } from "../stores/StoreProductList";
import AppButton from "../mui/AppButton";
import { StoreDetail } from "../../constants/typeDeclarations";

interface ProductCardProps {
  sx?: SxProps;
  detail?: StoreDetail;
  productDetail?: productDetail;
  path?: string;
  productTab?: string;
  setProductTab?: (arg0: string) => void;
  type?: string;
}

export default function ProductCard({
  sx,
  detail,
  type,
  productDetail,
  productTab,
  setProductTab,
}: ProductCardProps) {
  return (
    <AppButton
      sx={{
        padding: 0,
        width: "100%",
        height: type ? "90px" : "100%",
      }}
      handleClick={() => {
        if (setProductTab && productDetail?.title)
          setProductTab(productDetail?.title);
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
          height: type ? "90px" : "100%",
          ...sx,
        }}
      >
        <AppImage src={ProductImage} />
        {type && detail ? (
          <AppVStack sx={{ gap: "5px", width: "100%" }}>
            <AppHStack sx={{ justifyContent: "space-between", width: "100%" }}>
              <AppVStack sx={{ gap: "2px", height: "100%" }}>
                <AppHStack
                  sx={{
                    gap: "2px",
                    marginTop: "-5px",
                  }}
                >
                  <AppText
                    sx={{
                      fontSize: "14px",
                      lineHeight: "12px",
                      fontWeight: 600,
                      color: "#000",
                    }}
                    text={"Capri Sun"}
                  />
                  <AppText
                    sx={{
                      fontSize: "12px",
                      lineHeight: "12px",
                      fontWeight: 400,
                      color: "#000",
                    }}
                    text={type}
                  />
                </AppHStack>
              </AppVStack>
              <AppText
                variant="subtitle2"
                sx={{ fontSize: "14px", lineHeight: "20px", color: "#0F172A" }}
                text={detail?.[`${type}, Price` as keyof StoreDetail]}
              />
            </AppHStack>
            <TagCard
              title={
                detail?.[`${type}, Stock` as keyof StoreDetail]
                  ? "On shelf"
                  : "Out of stock"
              }
              theme={
                detail?.[`${type}, Stock` as keyof StoreDetail]
                  ? "green"
                  : "red"
              }
            />
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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import ProductCard from "../card/ProductCard";
// import { StoreDetail } from "../../constants/typeDeclarations";
import { Dispatch, SetStateAction } from "react";

export type productDetail = {
  title: string;
  link: string;
};

interface StoreProductListProps {
  storeDetails: any; // Array<StoreDetail>;
  productTab: string;
  setProductTab: Dispatch<SetStateAction<string>>;
}

export default function StoreProductList({
  storeDetails,
  productTab,
  setProductTab,
}: StoreProductListProps) {
  const product = [
    { title: "Fruit Punch", link: "/fruit-punch" },
    { title: "Strawberry Kiwi", link: "/strawberry-kiwi" },
    { title: "Pacific Cooler", link: "/pacific-cooler" },
  ];

  return (
    <AppVStack
      sx={{
        flex: 0.02,
        padding: "20px",
        gap: "24px",
        border: "1px solid #CBD5E1",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        minHeight: "100vh",
        height: "100%",
        paddingTop: "40px",
      }}
    >
      <AppVStack sx={{ gap: "6px" }}>
        <AppText
          variant="subtitle2"
          sx={{
            color: "#0B57C0",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "16px",
          }}
          text="CIRCLE K"
        />
        <AppText
          variant="h4"
          sx={{ fontSize: "36px", fontWeight: 600, lineHeight: "40px" }}
          text={`Store ${storeDetails?.[0]?.["Store Number"]}`}
        />
      </AppVStack>
      {/* <AppHStack gap={"5px"}>
        <AppSearch />
        <AppCenterStack
          sx={{
            width: "38px",
            height: "38px",
            padding: "8px",
            border: "1px solid #CBD5E1",
            borderRadius: "9px",
          }}
        >
          <SlidersHorizontal size={"15px"} />
        </AppCenterStack>
      </AppHStack> */}
      <AppVStack sx={{ gap: "2px" }}>
        {product?.map((_) => (
          <ProductCard
            productTab={productTab}
            setProductTab={setProductTab}
            key={_?.title}
            productDetail={_}
          />
        ))}
      </AppVStack>
    </AppVStack>
  );
}

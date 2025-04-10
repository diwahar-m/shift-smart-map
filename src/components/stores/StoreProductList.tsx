import { SlidersHorizontal } from "lucide-react";
import AppSearch from "../mui/AppSearch";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppCenterStack from "../mui/AppStack/AppCenterStack";
import ProductCard from "../card/ProductCard";

export default function StoreProductList() {
  return (
    <AppVStack
      sx={{
        flex: 0.22,
        padding: "20px",
        gap: "24px",
        border: "1px solid #CBD5E1",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        minHeight: "100vh",
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
          text="CIRCLE k"
        />
        <AppText
          variant="h4"
          sx={{ fontSize: "36px", fontWeight: 600, lineHeight: "40px" }}
          text="Store 4707013"
        />
      </AppVStack>
      <AppHStack gap={"5px"}>
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
      </AppHStack>
      <AppVStack sx={{ gap: "2px" }}>
        {new Array(3)?.fill("_")?.map((_) => <ProductCard key={_} />)}
      </AppVStack>
    </AppVStack>
  );
}

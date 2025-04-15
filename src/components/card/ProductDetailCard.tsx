import { StoreDetail } from "../../constants/typeDeclarations";
import AppBox from "../mui/AppBox";
import AppVStack from "../mui/AppStack/AppVStack";
import ProductCard from "./ProductCard";

const productTypes = ["Fruit Punch", "Pacific Cooler", "Strawberry Kiwi"];

export default function ProductDetailCard({
  storeDetail,
}: {
  storeDetail: StoreDetail;
}) {
  return (
    <AppVStack
      sx={{
        gap: "4px",
        maxHeight: "310px",
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {productTypes?.map((_) => (
        <AppBox key={_} sx={{ height: "90px" }}>
          <ProductCard
            type={_}
            detail={storeDetail}
            sx={{ backgroundColor: "#fff", width: "100%" }}
          />
        </AppBox>
      ))}
    </AppVStack>
  );
}

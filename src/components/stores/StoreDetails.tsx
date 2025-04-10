import AppHStack from "../mui/AppStack/AppHStack";
import StoreProductDetail from "./StoreProductDetail";
import StoreProductList from "./StoreProductList";

export default function StoreDetails() {
  return (
    <AppHStack sx={{ flex: 1 }}>
      <StoreProductList />
      <StoreProductDetail />
    </AppHStack>
  );
}

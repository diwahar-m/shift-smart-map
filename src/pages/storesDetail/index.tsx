import AppHStack from "../../components/mui/AppStack/AppHStack";
import StoreProductDetail from "../../components/stores/StoreProductDetail";
import StoreProductList from "../../components/stores/StoreProductList";

export default function StoresDetail() {
  return (
    <AppHStack sx={{ flex: 1, width: "100%", height: "100%" }}>
      <StoreProductList />
      <StoreProductDetail />
    </AppHStack>
  );
}

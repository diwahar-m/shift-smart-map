import { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import ProductInfo from "../../components/card/ProductInfo";
import USAStateMap from "../../components/map/USAStateMap";
import AppModal from "../../components/mui/AppModal";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import useModal from "../../constants/hooks/useHooks";
import { inventoryDetails } from "../dashboard";
import HeaderBar from "../../components/common/HeaderBar";

export default function StoresView() {
  const { open, handleClose, handleOpen } = useModal();

  useEffect(() => {
    handleOpen();
  }, []);
  return (
    <AppVStack sx={{ flex: 1, width: "100%", maxWidth: "100%" }}>
      <HeaderBar headerCardDetails={inventoryDetails} />

      <USAStateMap />
      <AppModal
        sx={{ position: "absolute", bottom: "5px", right: "5px" }}
        open={open}
        handleClose={handleClose}
      >
        <DetailCard children={<ProductInfo />} />
      </AppModal>
    </AppVStack>
  );
}

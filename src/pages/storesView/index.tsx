/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import AppVStack from "../../components/mui/AppStack/AppVStack";
import AppBox from "../../components/mui/AppBox";
import AppText from "../../components/mui/AppText";
import StateDetailsMap from "../../components/map/StateDetailMap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { getStoreDetails } from "../../constants/storeData";
// import { StoreDetail } from "../../constants/typeDeclarations";
import { tabProps } from "../../components/stores/StoreProductDetail";
import { getDateFormat } from "../../constants";
import ProductInfo from "../../components/card/ProductInfo";
import ProductDetailCard from "../../components/card/ProductDetailCard";
import usaMapData from "../../constants/us-states.json";
import { USAStateProps } from "../state";
import { HeaderContext } from "../../context/HeaderContext";

export default function StoresView() {
  // const { open, handleClose, handleOpen } = useModal();
  // useEffect(() => {
  //   handleOpen();
  // }, []);
  const { storeId } = useParams();
  const { storesList } = useContext(HeaderContext);
  const [storeInfo, setStoreInfo] = useState<any>(getStoreDetails(storeId));
  const [auditDetail, setAuditDetail] = useState<tabProps[]>([]);
  useEffect(() => {
    setStoreInfo(getStoreDetails(storeId));
  }, [storeId]);

  const selectedState: { current: USAStateProps | undefined } = useRef();

  useEffect(() => {
    const tabs: Array<tabProps> = [];
    //@ts-expect-error "check"
    selectedState.current = usaMapData.features.find(
      (state) => state.properties.name === storeInfo?.[0]?.BU
    );
    //@ts-expect-error "."
    storeInfo?.map((_) => {
      const tabDetail: tabProps = {};
      tabDetail.tab = getDateFormat(_?.["Completion Date"]);
      tabDetail.component = <ProductDetailCard storeDetail={_} />;
      tabs?.push(tabDetail);
    });
    setAuditDetail(tabs);
  }, [storeInfo]);

  return (
    <AppVStack sx={{ flex: 1, width: "100%", maxWidth: "100%" }}>
      <AppBox sx={{ height: "34rem" }}>
        <AppBox sx={{ height: "38px", paddingLeft: "30px" }}>
          <AppText
            variant="subtitle2"
            text={`${[...new Set(storesList?.map((_: any) => _?.name))]?.length} stores and ${storesList?.length} audits  within map area`}
            sx={{ margin: "auto" }}
          />
        </AppBox>
        <StateDetailsMap
          coordinates={{
            state: storeInfo?.[0]?.BU,
            latitude: parseInt(storeInfo?.[0]?.["Store Latitude"]),
            longitude: parseInt(storeInfo?.[0]?.["Store Longitude"]),
          }}
          // @ts-expect-error "check"
          selectedState={selectedState}
          modal={<ProductInfo tabs={auditDetail} />}
        />
        {/* <AppModal
        sx={{ position: "absolute", bottom: "5px", right: "5px" }}
        open={open}
        handleClose={handleClose}
      >
        <DetailCard children={<ProductInfo />} />
      </AppModal> */}
      </AppBox>
    </AppVStack>
  );
}

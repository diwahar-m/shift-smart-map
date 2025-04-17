/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useParams } from "react-router-dom";
import { useState } from "react";
import { getStoreDetails } from "../../../constants/storeData";
import AppHStack from "../../../components/mui/AppStack/AppHStack";
import StoreProductList from "../../../components/stores/StoreProductList";
import StoreProductDetail from "../../../components/stores/StoreProductDetail";

export default function StoresDetail() {
  const { storeId } = useParams();
  const [productTab, setProductTab] = useState<string>("Fruit Punch");
  const storeDetails = getStoreDetails(storeId);

  return (
    <AppHStack
      sx={{
        maxWidth: "100%",
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <StoreProductList
        productTab={productTab}
        setProductTab={setProductTab}
        storeDetails={storeDetails}
      />
      <StoreProductDetail productTab={productTab} storeDetails={storeDetails} />
    </AppHStack>
  );
}

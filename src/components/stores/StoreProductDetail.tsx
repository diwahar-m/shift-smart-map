import { ReactElement, useEffect, useState } from "react";
import AppBreadcrumb from "../mui/AppBreadcrumb";
import AppVStack from "../mui/AppStack/AppVStack";
import AppTabs from "../mui/AppTabs";
import AppText from "../mui/AppText";
import Product from "../product/Product";
import ProductSampleTwo from "../product/ProductSampleTwo";
import ProductSampleOne from "../product/ProductSampleOne";
import { useParams } from "react-router-dom";
import { getDateFormat } from "../../constants";
import { StoreDetail } from "../../constants/typeDeclarations";

export interface tabProps {
  tab: string;
  component: ReactElement;
}

const tabs = [
  { tab: "Mar 18", component: <Product /> },
  { tab: "Feb 24", component: <ProductSampleOne /> },
  { tab: "Jan 6", component: <ProductSampleTwo /> },
];

interface StoreProductDetailProps {
  storeDetails: Array<StoreDetail>;
  productTab: string;
}

export default function StoreProductDetail({
  storeDetails,
  productTab,
}: StoreProductDetailProps) {
  const { storeId } = useParams();

  const [auditDetail, setAuditDetail] = useState([]);

  useEffect(() => {
    const tabs: Array<tabProps> = [];
    storeDetails?.map((_) => {
      const tabDetail = {};
      tabDetail.tab = getDateFormat(_?.["Completion Date"]);
      let selectedTabDetails = {
        image: _?.[productTab + ", Stock"],
        price: _?.[productTab + ", Price"],
        date: getDateFormat(_?.["Completion Date"]),
      };
      console.log(selectedTabDetails);
      tabDetail.component = <Product storeDetail={selectedTabDetails} />;
      console.log(tabDetail);
      tabs?.push(tabDetail);
    });
    setAuditDetail(tabs);
  }, [storeDetails, productTab]);

  let text = "Capri Sun Fruit Punch";

  switch (storeId) {
    case "2":
      text = "Capri Sun Strawberry Kiwi";
      break;
    default:
      text = "Capri Sun Pacific cooler";
  }

  return (
    <AppVStack
      sx={{
        gap: "20px",
        minHeight: "100vh",
        maxWidth: "100%",
        flex: 1,
        justifyContent: "flex-start",
        maxHeight: "100px",
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <AppVStack
        sx={{
          padding: "50px 20px",
          paddingBottom: "5px",
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        <AppBreadcrumb />
        <AppText
          variant="h4"
          sx={{ fontSize: "24px", lineHeight: "28px", fontWeight: 600 }}
          text={productTab}
        />
      </AppVStack>
      <AppTabs tabs={auditDetail} />
    </AppVStack>
  );
}

import { ReactElement, useEffect, useState } from "react";
import AppBreadcrumb from "../mui/AppBreadcrumb";
import AppVStack from "../mui/AppStack/AppVStack";
import AppTabs from "../mui/AppTabs";
import AppText from "../mui/AppText";
import Product from "../product/Product";
import { getDateFormat } from "../../constants";
import { StoreDetail } from "../../constants/typeDeclarations";

export interface tabProps {
  tab?: string;
  component?: ReactElement;
}

interface StoreProductDetailProps {
  storeDetails: StoreDetail[];
  productTab: string;
}

export default function StoreProductDetail({
  storeDetails,
  productTab,
}: StoreProductDetailProps) {
  const [auditDetail, setAuditDetail] = useState<tabProps[]>([]);

  useEffect(() => {
    const tabs: Array<tabProps> = [];
    storeDetails?.map((_) => {
      const tabDetail: tabProps = {};
      tabDetail.tab = getDateFormat(_?.["Completion Date"]);
      const selectedTabDetails = {
        image: _?.[(productTab + ", Stock") as keyof StoreDetail],
        price: _?.[(productTab + ", Price") as keyof StoreDetail],
        date: getDateFormat(_?.["Completion Date"]),
      };
      tabDetail.component = <Product storeDetail={selectedTabDetails} />;
      tabs?.push(tabDetail);
    });
    setAuditDetail(tabs);
  }, [storeDetails, productTab]);

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

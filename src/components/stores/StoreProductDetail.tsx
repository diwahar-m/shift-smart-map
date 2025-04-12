import { ReactElement } from "react";
import AppBreadcrumb from "../mui/AppBreadcrumb";
import AppVStack from "../mui/AppStack/AppVStack";
import AppTabs from "../mui/AppTabs";
import AppText from "../mui/AppText";
import Product from "../product/Product";
import ProductSampleTwo from "../product/ProductSampleTwo";
import ProductSampleOne from "../product/ProductSampleOne";
import { useParams } from "react-router-dom";

export interface tabProps {
  tab: string;
  component: ReactElement;
}

const tabs = [
  { tab: "Mar 18", component: <Product /> },
  { tab: "Feb 24", component: <ProductSampleOne /> },
  { tab: "Jan 6", component: <ProductSampleTwo /> },
];

export default function StoreProductDetail() {
  const { storeId } = useParams();

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
        padding: "50px 20px",
        gap: "14px",
        minHeight: "100vh",
        maxWidth: "100%",
        justifyContent: "flex-start",
        maxHeight: "100px", // or any height you need
        overflowY: "auto",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <AppBreadcrumb />
      <AppText
        variant="h4"
        sx={{ fontSize: "24px", lineHeight: "28px", fontWeight: 600 }}
        text={text}
      />
      <AppTabs tabs={tabs} />
    </AppVStack>
  );
}

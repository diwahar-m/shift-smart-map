import { ReactElement } from "react";
import AppBreadcrumb from "../mui/AppBreadcrumb";
import AppVStack from "../mui/AppStack/AppVStack";
import AppTabs from "../mui/AppTabs";
import AppText from "../mui/AppText";
import Product from "../product/Product";

export interface tabProps {
  tab: string;
  component: ReactElement;
}

const tabs = [
  { tab: "Mar 18", component: <Product /> },
  { tab: "Feb 24", component: <Product /> },
  { tab: "Jan 6", component: <Product /> },
];

export default function StoreProductDetail() {
  return (
    <AppVStack
      sx={{
        padding: "30px",
        gap: "14px",
        minHeight: "100vh",
        width: "61rem",
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
        text="Capri Sun Fruit Punch"
      />
      <AppTabs tabs={tabs} />
    </AppVStack>
  );
}

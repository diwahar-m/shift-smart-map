import AppVStack from "../mui/AppStack/AppVStack";
import AppTabs from "../mui/AppTabs";
import AppText from "../mui/AppText";
import ProductDetailCard from "./ProductDetailCard";

const tabs = [
  {
    tab: "Mar 18",
    component: <ProductDetailCard />,
  },
  { tab: "Feb 24", component: <ProductDetailCard /> },
  { tab: "Jan 6", component: <ProductDetailCard /> },
];

export default function ProductInfo() {
  return (
    <AppVStack sx={{ width: "100%", gap: "6px" }}>
      <AppText
        variant="subtitle2"
        sx={{
          color: "#0B57C0",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "12px",
        }}
        text="CIRCLE k"
      />
      <AppText
        variant="h4"
        sx={{ fontSize: "24px", fontWeight: 600, lineHeight: "28px" }}
        text="Store 4707013"
      />
      <AppVStack sx={{ width: "100%" }}>
        <AppText
          variant="h4"
          sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px" }}
          text="489 Broadway"
        />
        <AppText
          variant="h4"
          sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px" }}
          text="Bangor, ME 04401"
        />
      </AppVStack>

      <AppTabs tabs={tabs} />
    </AppVStack>
  );
}

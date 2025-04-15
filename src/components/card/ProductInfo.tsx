import { useParams } from "react-router-dom";
import AppVStack from "../mui/AppStack/AppVStack";
import AppTabs from "../mui/AppTabs";
import AppText from "../mui/AppText";
import { tabProps } from "../stores/StoreProductDetail";

export default function ProductInfo({ tabs }: { tabs: tabProps[] }) {
  const { storeId } = useParams();

  return (
    <AppVStack sx={{ width: "100%", gap: "6px", padding: "16px" }}>
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
        text={`Store ${storeId}`}
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

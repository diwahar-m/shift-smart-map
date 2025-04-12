import HeaderBar from "../../components/common/HeaderBar";
import USAStateMap from "../../components/map/USAStateMap";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import {
  getCompletedAuditPercentage,
  getInstockAndOnshelfPercentage,
  getOutOfStockPercentage,
  getSKUAveragePrice,
} from "../../constants/data";

export type InventoryDetailProps =
  | {
      title: string;
      percentage: string;
      price?: undefined;
    }
  | {
      title: string;
      price: string;
      percentage?: undefined;
    };

// export interface InventoryDetailProps {
//   title: string;
//   percentage?: number | undefined;
//   price?: number | undefined;
// }

export const inventoryDetails = [
  {
    title: "Completed audits",
    percentage: getCompletedAuditPercentage(),
    price: undefined,
  },
  {
    title: "Out of stock",
    percentage: getOutOfStockPercentage(),
    price: undefined,
  },
  {
    title: "In stock and on shelf",
    percentage: getInstockAndOnshelfPercentage(),
    price: undefined,
  },
  {
    title: "Avg.sales price per SKU",
    percentage: undefined,
    price: getSKUAveragePrice(),
  },
];

export default function DashboardPage() {
  return (
    <AppVStack sx={{ flex: 1, width: "100%", maxWidth: "100%" }}>
      <HeaderBar headerCardDetails={inventoryDetails} />
      <USAStateMap />
    </AppVStack>
  );
}

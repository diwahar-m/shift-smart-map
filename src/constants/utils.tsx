import TagCard from "../components/card/TagCard";
import AppHStack from "../components/mui/AppStack/AppHStack";
import { stockPrice } from "../components/mui/AppTable";
import AppText from "../components/mui/AppText";

// { stock }: tagPriceProps
export function tagPrice(stock: stockPrice) {
  let theme = "green";
  switch (stock?.stock) {
    case "Out of stock":
      theme = "red";
      break;
    case "In inventory":
      theme = "blue";
      break;
    default:
      theme = "green";
  }
  //{ stock: "Out of stack", price: "$2.50" },
  return (
    <AppHStack sx={{ height: "100%", gap: "6px" }}>
      <TagCard title={stock?.stock} theme={theme} />
      <AppText
        variant="subtitle2"
        sx={{ fontSize: "14px", lineHeight: "20px" }}
        text={stock?.price}
      />
    </AppHStack>
  );
}

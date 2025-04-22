import { useEffect, useState } from "react";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppHStack from "../mui/AppStack/AppHStack";
import AppSelectBox from "../mui/AppSelectBox";
import OutOfStockGraph from "./OutOfStockGraph";
// import { tableRows } from "./InventoryLevels";
// import AppTable from "../mui/AppTable";
// import AppBox from "../mui/AppBox";

const outOfStockRates = [
  {
    sku: "All SKUs",
    values: [
      [93, 100, 100],
      [6, 13, 10],
      [63, 36, 35],
      [100, 71, 72],
      [83, 13, 3],
      [55, 49, 30],
    ],
  },
  {
    sku: "Fruit Punch",
    values: [
      [80, 100, 100],
      [0, 20, 0],
      [55, 23, 13],
      [100, 59, 55],
      [80, 0, 0],
      [36, 31, 22],
    ],
  },
  {
    sku: "Pacific Cooler",
    values: [
      ["NA", "NA", "NA"],
      ["NA", "NA", "NA"],
      ["NA", "NA", "NA"],
      ["NA", "NA", "NA"],
      ["NA", "NA", "NA"],
      ["NA", "NA", "NA"],
    ],
  },
  {
    sku: "Strawberry Kiwi",
    values: [
      [100, 100, 100],
      [0, 0, 10],
      [60, 31, 25],
      [100, 65, 75],
      [80, 10, 0],
      [64, 54, 33],
    ],
  },
];

export const outOfStockTableHeader = ["BH", "Audit 1", "Audit 2", "Audit 3"];

export default function OutOfStockRates() {
  const [product, setProduct] = useState("All SKUs");
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const selected = outOfStockRates?.filter((_) => _?.sku === product);
    //@ts-expect-error "a"
    setInventory(selected?.[0]?.values);
  }, [product]);

  return (
    <AppVStack
      sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "0px !important",
        borderLeftWidth: "0px !important",
        borderRightWidth: "0px !important",
        border: "1px solid #E9EFF7",
        padding: "20px ",
        maxWidth: "50%",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["24px", "28px", "600"]}
        text={"Out-Of-Stock Rates"}
      />
      <AppText
        variant="h3"
        sx={{ color: "#475569" }}
        fontStyles={["16px", "24px", "400"]}
        text={
          "Comparison of out-of-stock rates across divisions during audit checkpoints"
        }
      />
      <AppHStack sx={{ gap: "6px", margin: "20px 0" }}>
        <AppSelectBox
          label={"SKU"}
          value={product}
          options={[
            "All SKUs",
            "Fruit Punch",
            "Pacific Cooler",
            "Strawberry Kiwi",
          ]}
          onChange={(val) => {
            if (val) setProduct(val);
          }}
        />
      </AppHStack>
      {/* <AppHStack>
        <AppTable
          tableHead={outOfStockTableHeader}
          tableRow={tableRows(inventory)}
          tableRowLength={inventory?.length}
        />
        <AppBox sx={{ width: "78%" }}>
          <OutOfStockGraph inventory={inventory} />
        </AppBox>
      </AppHStack> */}
      <OutOfStockGraph inventory={inventory} />
    </AppVStack>
  );
}

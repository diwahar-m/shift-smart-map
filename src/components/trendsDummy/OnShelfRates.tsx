import { useEffect, useState } from "react";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppHStack from "../mui/AppStack/AppHStack";
import AppSelectBox from "../mui/AppSelectBox";
import OnShelfGraph from "./OnShelfGraph";

const onShelfRates = [
  {
    sku: "All SKUs",
    values: [
      [0, 0, 0],
      [94, 87, 90],
      [33, 56, 65],
      [0, 22, 28],
      [17, 83, 97],
      [36, 49, 70],
    ],
  },
  {
    sku: "Fruit Punch",
    values: [
      [0, 0, 0],
      [100, 80, 100],
      [45, 69, 88],
      [0, 29, 45],
      [20, 100, 100],
      [55, 69, 78],
    ],
  },
  {
    sku: "Pacific Cooler",
    values: [
      [0, 0, 0],
      [100, 100, 90],
      [35, 69, 75],
      [0, 24, 25],
      [20, 90, 100],
      [27, 46, 67],
    ],
  },
  {
    sku: "Strawberry Kiwi",
    values: [
      [0, 0, 0],
      [82, 80, 80],
      [20, 31, 31],
      [0, 12, 15],
      [10, 60, 90],
      [27, 31, 67],
    ],
  },
];

export default function OnShelfRates() {
  const [product, setProduct] = useState("All SKUs");
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const selected = onShelfRates?.filter((_) => _?.sku === product);

    setInventory(selected?.[0]?.values);
  }, [product]);

  return (
    <AppVStack
      sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "0px !important",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        border: "1px solid #E9EFF7",
        padding: "20px 40px",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["24px", "28px", "600"]}
        text={"On-Shelf Rates"}
      />
      <AppText
        variant="h3"
        sx={{ color: "#475569" }}
        fontStyles={["16px", "24px", "400"]}
        text={
          "Comparison of on-shelf rates across divisions during audit checkpoints"
        }
      />
      <AppHStack sx={{ gap: "6px", margin: "20px 0" }}>
        <AppSelectBox
          label={"SKU"}
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
      <OnShelfGraph inventory={inventory} />
    </AppVStack>
  );
}

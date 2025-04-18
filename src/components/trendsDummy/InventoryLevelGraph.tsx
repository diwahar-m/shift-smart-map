import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const xLabels = [
  "Grand Canyon",
  "Great Lakes",
  "Coastal Carolina",
  "Florida",
  "Gulf Coast",
  "South Atlantic",
];

export default function InventoryLevelGraph({ inventory }) {
  const [values, setValues] = React.useState({
    OutOfStock: [0, 0, 0, 0, 0, 0],
    Ininventory: [0, 0, 0, 0, 0, 0],
    onShelf: [0, 0, 0, 0, 0, 0],
  });

  React.useEffect(() => {
    const OutOfStock = inventory.map((row) => row[0]); // All first elements of each row
    const Ininventory = inventory.map((row) => row[1]); // All second elements of each row
    const onShelf = inventory.map((row) => row[2]);

    setValues({ OutOfStock, Ininventory, onShelf });
  }, [inventory]);

  const toDecimal = (arr: number[]) => arr.map((v) => v / 100);

  const outData = toDecimal(values?.OutOfStock);
  const invData = toDecimal(values?.Ininventory);
  const shelfData = toDecimal(values?.onShelf);
  return (
    <BarChart
      height={300}
      series={[
        {
          data: outData,
          label: "Out of Stock",
          id: "out",
          stack: "percent",
          barLabel: ({ value }) => `${Math.round(value * 100)}%`,
          color: "#ef4444",
        },
        {
          data: invData,
          label: "In Inventory",
          id: "inv",
          stack: "percent",
          barLabel: ({ value }) => `${Math.round(value * 100)}%`,
          color: "#3b82f6",
        },
        {
          data: shelfData,
          label: "On Shelf",
          id: "shelf",
          stack: "percent",
          barLabel: ({ value }) => `${Math.round(value * 100)}%`,
          color: "#10b981",
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      yAxis={[
        {
          min: 0,
          max: 1,
          width: 60,
          tickCount: 11,
          valueFormatter: (value) => `${value * 100}%`,
        },
      ]}
    />
  );
}

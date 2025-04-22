/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

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

export default function InventoryLevelGraph({ inventory }: any) {
  const [values, setValues] = React.useState({
    onShelf: [0, 0, 0, 0, 0, 0],
    Ininventory: [0, 0, 0, 0, 0, 0],
    OutOfStock: [0, 0, 0, 0, 0, 0],
  });

  React.useEffect(() => {
    //@ts-expect-error
    const onShelf = inventory.map((row) => row[0]); // All first elements of each row
    //@ts-expect-error
    const Ininventory = inventory.map((row) => row[1]); // All second elements of each row
    //@ts-expect-error
    const OutOfStock = inventory.map((row) => row[2]);

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
          // @ts-expect-error ""
          barLabel: ({ value }) => `${Math.round(value * 100)}%`,
          color: "#ef4444",
        },
        {
          data: invData,
          label: "In Inventory",
          id: "inv",
          stack: "percent",
          // @ts-expect-error ""
          barLabel: ({ value }) => `${Math.round(value * 100)}%`,
          color: "#3b82f6",
        },
        {
          data: shelfData,
          label: "On Shelf",
          id: "shelf",
          stack: "percent",
          // @ts-expect-error ""
          barLabel: ({ value }) => `${Math.round(value * 100)}%`,
          color: "#10b981",
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      yAxis={[
        {
          min: 0,
          label: "Percentage (100%)",
          max: 1,
          width: 60,
          // @ts-expect-error ""
          tickCount: 11,
          // @ts-expect-error ""
          valueFormatter: (value) => `${value * 100}%`,
        },
      ]}
    />
  );
}

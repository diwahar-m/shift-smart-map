/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

const xLabels = ["Audit 1", "Audit 2", "Audit 3"];

const states = [
  "Grand Canyon",
  " Great Lakes",
  "Coastal Carolina",
  "Florida",
  "Gulf Coast",
  "South Atlantic",
];

export default function OutOfStockGraph({ inventory }: any) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    setValues(inventory);
  }, [inventory]);
  return (
    <LineChart
      width={500}
      height={400}
      xAxis={[
        {
          data: xLabels,
          scaleType: "point",
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 100,
          //@ts-expect-error
          valueFormatter: (v) => `${v}%`,
          //@ts-expect-error
          tickCount: 6,
        },
      ]}
      series={values.map((row, index) => ({
        id: `line-${index}`,
        data: row,
        label: `${states[index]}`,
        curve: "linear",
        valueFormatter: (v) => `${v}%`,
      }))}
      margin={{ top: 20, right: 30, left: 40, bottom: 50 }}
    />
  );
}

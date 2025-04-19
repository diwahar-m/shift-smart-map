/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";

const states = [
  "Grand Canyon",
  " Great Lakes",
  "Coastal Carolina",
  "Florida",
  "Gulf Coast",
  "South Atlantic",
];

export default function AverageSkuGraph({ inventory }: any) {
  const [values, setValues] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setValues(inventory);
  }, [inventory]);
  return (
    <BarChart
      width={1000}
      height={400}
      series={[
        {
          data: values,
          label: "Price ($)",
        },
      ]}
      xAxis={[
        {
          data: states,
          scaleType: "band", // For categorical data (states)
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 4.5, // Slightly above your max value (4)
          //@ts-expect-error ""
          tickInterval: 0.5, // Shows ticks at 0, 0.5, 1, 1.5, etc.
        },
      ]}
      margin={{ top: 20, right: 30, left: 40, bottom: 50 }}
    />
  );
}

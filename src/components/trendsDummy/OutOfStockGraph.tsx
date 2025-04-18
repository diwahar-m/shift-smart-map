import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

const rawData = [
  [93, 100, 100],
  [6, 13, 10],
  [63, 36, 35],
  [100, 71, 72],
  [83, 13, 3],
  [55, 49, 30],
];

const xLabels = ["Audit 1", "Audit 2", "Audit 3"];

const states = [
  "Grand Canyon",
  " Great Lakes",
  "Coastal Carolina",
  "Florida",
  "Gulf Coast",
  "South Atlantic",
];

export default function OutOfStockGraph({ inventory }) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    setValues(inventory);
  }, [inventory]);
  console.log(values);
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
          valueFormatter: (v) => `${v}%`,
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

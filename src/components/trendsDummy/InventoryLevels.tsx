/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import AppSelectBox from "../mui/AppSelectBox";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import InventoryLevelGraph from "./InventoryLevelGraph";
import { TableCell, TableRow } from "@mui/material";
import { auditedStates } from "./OnShelfGraph";
// import AppTable from "../mui/AppTable";
// import AppBox from "../mui/AppBox";

const inventories = [
  {
    week: "Audit 1",
    sku: "All SKUs",
    values: [
      [0, 7, 93],
      [94, 0, 6],
      [33, 3, 63],
      [0, 0, 100],
      [17, 0, 83],
      [36, 9, 55],
    ],
  },
  {
    week: "Audit 1",
    sku: "Fruit Punch",
    values: [
      [0, 20, 80],
      [100, 0, 0],
      [45, 0, 55],
      [0, 0, 100],
      [20, 0, 80],
      [55, 9, 36],
    ],
  },
  {
    week: "Audit 1",
    sku: "Pacific Cooler",
    values: [
      [0, 0, "NA"],
      [100, 0, "NA"],
      [35, 5, "NA"],
      [0, 0, "NA"],
      [20, 0, "NA"],
      [27, 9, "NA"],
    ],
  },
  {
    week: "Audit 1",
    sku: "Strawberry Kiwi",
    values: [
      [0, 0, 100],
      [82, 0, 0],
      [20, 5, 60],
      [0, 0, 100],
      [10, 0, 80],
      [27, 9, 64],
    ],
  },
  //
  {
    week: "Audit 2",
    sku: "All SKUs",
    values: [
      [0, 0, 100],
      [87, 0, 13],
      [56, 8, 36],
      [22, 8, 71],
      [83, 3, 13],
      [49, 3, 49],
    ],
  },
  {
    week: "Audit 2",
    sku: "Fruit Punch",
    values: [
      [0, 0, 100],
      [80, 0, 20],
      [69, 8, 23],
      [29, 12, 59],
      [100, 0, 0],
      [69, 0, 31],
    ],
  },
  {
    week: "Audit 2",
    sku: "Pacific Cooler",
    values: [
      [0, 0, "NA"],
      [100, 0, "NA"],
      [69, 0, "NA"],
      [24, 12, "NA"],
      [90, 0, "NA"],
      [46, 0, "NA"],
    ],
  },
  {
    week: "Audit 2",
    sku: "Strawberry Kiwi",
    values: [
      [0, 0, 100],
      [80, 0, 0],
      [31, 15, 31],
      [12, 0, 65],
      [60, 10, 10],
      [31, 8, 54],
    ],
  },
  //
  {
    week: "Audit 3",
    sku: "All SKUs",
    values: [
      [0, 0, 100],
      [90, 0, 10],
      [65, 0, 35],
      [28, 0, 72],
      [97, 0, 3],
      [70, 0, 30],
    ],
  },
  {
    week: "Audit 3",
    sku: "Fruit Punch",
    values: [
      [0, 0, 100],
      [100, 0, 0],
      [88, 0, 13],
      [45, 0, 55],
      [100, 0, 0],
      [78, 0, 22],
    ],
  },
  {
    week: "Audit 3",
    sku: "Pacific Cooler",
    values: [
      [0, 0, "NA"],
      [90, 0, "NA"],
      [75, 0, "NA"],
      [25, 0, "NA"],
      [100, 0, "NA"],
      [67, 0, "NA"],
    ],
  },
  {
    week: "Audit 3",
    sku: "Strawberry Kiwi",
    values: [
      [0, 0, 100],
      [80, 0, 10],
      [31, 0, 25],
      [15, 0, 75],
      [90, 0, 0],
      [67, 0, 33],
    ],
  },
];

// const tableHeader = ["BU", "On-shelf", "In inventory", "Out of stock"];

export function tableRows(tableRow: any) {
  return (
    <>
      {tableRow?.length ? (
        tableRow?.map((row: any, index: number) => (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
          >
            <TableCell
              sx={{
                paddingY: "5px",
                maxWidth: "90px",
              }}
              align="left"
              component="th"
              scope="row"
            >
              {auditedStates[index]}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "5px",
                // paddingLeft: "16px",
                maxWidth: "10px",
              }}
              align="left"
              component="th"
              scope="row"
            >
              {`${row[0]}%`}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "5px",
                // paddingLeft: "16px",
                maxWidth: "10px",
              }}
              align="left"
              component="th"
              scope="row"
            >
              {`${row[1]}%`}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "5px",
                // paddingLeft: "16px",
                maxWidth: "200px",
              }}
              align="left"
              component="th"
              scope="row"
            >
              {`${row[2]}%`}
            </TableCell>
          </TableRow>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default function InventoryLevels() {
  const [audit, setAudit] = useState("Audit 1");
  const [product, setProduct] = useState("All SKUs");
  const [inventory, setInventory] = useState<any>(inventories?.[0]?.values);

  useEffect(() => {
    const selected = inventories
      ?.filter((_) => _?.week === audit)
      ?.filter((_) => _?.sku === product);

    setInventory(selected?.[0]?.values);
  }, [audit, product]);

  return (
    <AppVStack
      sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "0px !important",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        border: "0px solid #E9EFF7",
        padding: "0px 40px",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["24px", "28px", "600"]}
        text={"Inventory Levels"}
      />
      <AppText
        variant="h3"
        sx={{ color: "#475569" }}
        fontStyles={["16px", "24px", "400"]}
        text={
          "Distribution of products that are of stock, in inventory, and on-shelf across divisions"
        }
      />
      <AppHStack sx={{ gap: "6px", margin: "20px 0" }}>
        <AppSelectBox
          label={"Week"}
          options={["Audit 1", "Audit 2", "Audit 3"]}
          value={audit}
          onChange={(val) => {
            if (val) setAudit(val);
          }}
        />
        <AppSelectBox
          value={product}
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
      {/* <AppHStack>
        <AppTable
          tableHead={tableHeader}
          tableRow={tableRows(inventory)}
          tableRowLength={inventory?.length}
        />
        <AppBox sx={{ width: "78%" }}>
          <InventoryLevelGraph inventory={inventory} />
        </AppBox>
      </AppHStack> */}
      <InventoryLevelGraph inventory={inventory} />
    </AppVStack>
  );
}

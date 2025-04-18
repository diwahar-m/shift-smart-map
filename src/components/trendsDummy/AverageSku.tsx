/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppHStack from "../mui/AppStack/AppHStack";
import AppSelectBox from "../mui/AppSelectBox";
import AverageSkuGraph from "./AverageSkuGraph";
import { TableCell, TableRow } from "@mui/material";
import { auditedStates } from "./OnShelfGraph";
import AppBox from "../mui/AppBox";
import AppTable from "../mui/AppTable";

const inventories = [
  {
    week: "Audit 1",
    sku: "All SKUs",
    values: [0.0, 2.73, 1.03, 0.85, 1.06, 0.74],
  },
  {
    week: "Audit 1",
    sku: "Fruit Punch",
    values: [0.0, 2.99, 1.26, 0.88, 1.06, 1.15],
  },
  {
    week: "Audit 1",
    sku: "Pacific Cooler",
    values: [0.0, 2.99, 1.26, 0.88, 1.06, 0.62],
  },
  {
    week: "Audit 1",
    sku: "Strawberry Kiwi",
    values: [0.0, 2.33, 0.6, 0.77, 1.06, 0.46],
  },
  //
  {
    week: "Audit 2",
    sku: "All SKUs",
    values: [0.0, 2.64, 1.23, 0.93, 2.08, 0.91],
  },
  {
    week: "Audit 2",
    sku: "Fruit Punch",
    values: [0.0, 2.99, 1.63, 1.0, 2.39, 1.38],
  },
  {
    week: "Audit 2",
    sku: "Pacific Cooler",
    values: [0.0, 2.99, 1.63, 1.06, 2.09, 1.15],
  },
  {
    week: "Audit 2",
    sku: "Strawberry Kiwi",
    values: [0.0, 2.14, 0.5, 0.75, 1.79, 0.21],
  },
  //
  {
    week: "Audit 3",
    sku: "All SKUs",
    values: [0.0, 2.52, 1.82, 0.98, 2.3, 1.69],
  },
  {
    week: "Audit 3",
    sku: "Fruit Punch",
    values: [0.0, 2.99, 2.39, 1.17, 2.39, 1.99],
  },
  {
    week: "Audit 3",
    sku: "Pacific Cooler",
    values: [0.0, 2.59, 2.39, 1.05, 2.39, 1.74],
  },
  {
    week: "Audit 3",
    sku: "Strawberry Kiwi",
    values: [0.0, 2.14, 0.75, 0.73, 2.12, 1.32],
  },
];

function tableRows(tableRow: any) {
  console.log(tableRow);
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
              {`$${row}`}
            </TableCell>
          </TableRow>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default function AverageSku() {
  const [audit, setAudit] = useState("Audit 1");
  const [product, setProduct] = useState("All SKUs");
  const [inventory, setInventory] = useState(inventories?.[0]?.values);

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
        border: "1px solid #E9EFF7",
        padding: "20px 40px",
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
          onChange={(val) => {
            if (val) setAudit(val);
          }}
        />
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
      <AppHStack>
        <AppTable
          tableHead={["BU", "Price"]}
          tableRow={tableRows(inventory)}
          tableRowLength={inventory?.length}
        />
        <AppBox sx={{ width: "78%" }}>
          <AverageSkuGraph inventory={inventory} />
        </AppBox>
      </AppHStack>
    </AppVStack>
  );
}

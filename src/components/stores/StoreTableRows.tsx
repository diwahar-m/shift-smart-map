import { TableCell, TableRow } from "@mui/material";
import { StoreAudit } from "../../constants/storeData";
import { tagPrice } from "../../constants/utils";

interface StoreTableRowsProps {
  tableRow: Array<StoreAudit>;
  handleRowClick?: (storeName: string) => void;
}

export default function StoreTableRows({
  tableRow,
  handleRowClick,
}: StoreTableRowsProps) {
  return (
    <>
      {tableRow?.length ? (
        tableRow?.map((row: any, index: number) => (
          <TableRow
            onClick={() => handleRowClick?.(row?.name)}
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
          >
            <TableCell sx={{ maxWidth: "40px" }} align="left"></TableCell>

            <TableCell
              sx={{
                paddingY: "14px",
                paddingLeft: "16px",
                maxWidth: "200px",
              }}
              align="left"
              component="th"
              scope="row"
            >
              {"CIRCLE K | Store " + row.name}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "14px",
                paddingX: "16px",
                paddingRight: "50px",
                maxWidth: "200px",
              }}
              align="left"
            >
              {tagPrice(row.punch)}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "14px",
                paddingX: "16px",
                paddingRight: "50px",
                maxWidth: "200px",
              }}
              align="left"
            >
              {tagPrice(row.kiwi)}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "14px",
                paddingX: "16px",
                paddingRight: "50px",
                maxWidth: "200px",
              }}
              align="left"
            >
              {tagPrice(row.cooler)}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "14px",
                paddingLeft: "16px",
                maxWidth: "200px",
              }}
              align="left"
            >
              {row.audited}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "14px",
                paddingLeft: "16px",
                maxWidth: "200px",
              }}
              align="left"
            >
              {row.delivery}
            </TableCell>
          </TableRow>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

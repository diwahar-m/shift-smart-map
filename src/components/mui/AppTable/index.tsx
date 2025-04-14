/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tagPrice } from "../../../constants/utils";
import { StoreAudit } from "../../../constants/storeData";

export interface stockPrice {
  stock: string;
  price: string;
}

interface AppTableProps {
  tableHead: Array<string>;
  handleRowClick: (storeName: string) => void;
  tableRow: Array<StoreAudit>;
}

export default function AppTable({
  tableHead,
  handleRowClick,
  tableRow = [],
}: AppTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ maxWidth: "40px" }} align="left"></TableCell>
            {tableHead?.map((_) => (
              <TableCell
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  paddingY: "14px",
                  paddingLeft: "16px",
                  maxWidth: "200px",
                }}
                key={_}
                align="left"
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRow?.map((row: any, index: number) => (
            <TableRow
              onClick={() => handleRowClick(row?.name)}
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
                {"Circle K | Store " + row.name}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

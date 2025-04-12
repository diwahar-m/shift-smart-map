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

export interface stockPrice {
  stock: string;
  price: string;
}

function createData(
  name: string,
  punch: stockPrice,
  kiwi: stockPrice,
  cooler: stockPrice,
  audited: string,
  delivery: string
) {
  return { name, punch, kiwi, cooler, audited, delivery };
}

const rows = [
  createData(
    "Circle K | Store 2709744",
    { stock: "Out of stack", price: "$2.50" },
    { stock: "In inventory", price: "$0.00" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "Out of stack", price: "$2.50" },
    { stock: "In inventory", price: "$0.00" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "Out of stack", price: "$2.50" },
    { stock: "In inventory", price: "$0.00" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "Out of stack", price: "$2.50" },
    { stock: "In inventory", price: "$0.00" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "Out of stack", price: "$2.50" },
    { stock: "In inventory", price: "$0.00" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "Out of stack", price: "$2.50" },
    { stock: "In inventory", price: "$0.00" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
  createData(
    "Circle K | Store 2709744",
    { stock: "In inventory", price: "$0.00" },
    { stock: "Out of stack", price: "$2.50" },
    { stock: "On shelf", price: "$2.44" },
    "Mar 18, 2025",
    "Feb 20, 2025"
  ),
];

interface AppTableProps {
  tableHead: Array<string>;
  handleRowClick: () => void;
  tableRow: any;
}

export default function AppTable({
  tableHead,
  handleRowClick,
  tableRow,
}: AppTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead?.map((_) => (
              <TableCell
                sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}
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
              onClick={handleRowClick}
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{tagPrice(row.punch)}</TableCell>
              <TableCell align="center">{tagPrice(row.kiwi)}</TableCell>
              <TableCell align="center">{tagPrice(row.cooler)}</TableCell>
              <TableCell align="center">{row.audited}</TableCell>
              <TableCell align="center">{row.delivery}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

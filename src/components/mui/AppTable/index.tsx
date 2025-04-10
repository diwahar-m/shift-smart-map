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
];

interface AppTableProps {
  tableHead: Array<string>;
  handleRowClick: () => void;
}

export default function AppTable({ tableHead, handleRowClick }: AppTableProps) {
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
          {rows.map((row) => (
            <TableRow
              onClick={handleRowClick}
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{tagPrice(row.punch)}</TableCell>
              <TableCell align="right">{tagPrice(row.kiwi)}</TableCell>
              <TableCell align="right">{tagPrice(row.cooler)}</TableCell>
              <TableCell align="right">{row.audited}</TableCell>
              <TableCell align="right">{row.delivery}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { Skeleton } from "@mui/material";
import { Skeleton } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import AppCenterStack from "../AppStack/AppCenterStack";
import AppText from "../AppText";

export interface stockPrice {
  stock: string;
  price: string;
}

interface AppTableProps {
  tableHead: Array<string>;
  tableRow: ReactElement;
  tableRowLength: number;
}

export default function AppTable({
  tableHead,
  tableRow,
  tableRowLength,
}: AppTableProps) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead?.includes("Store") && (
              <TableCell sx={{ maxWidth: "40px" }} align="left"></TableCell>
            )}
            {tableHead?.map((_) => (
              <TableCell
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  paddingY: "14px",
                  paddingLeft: "16px",
                  maxWidth: "250px",
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
          {loader
            ? new Array(10)?.fill("_")?.map((_row: any, index: number) => (
                <TableRow
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
                    <Skeleton variant="rounded" width={150} height={16} />
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
                    <Skeleton variant="rounded" width={150} height={16} />
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
                    <Skeleton variant="rounded" width={150} height={16} />
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
                    <Skeleton variant="rounded" width={150} height={16} />
                  </TableCell>
                  <TableCell
                    sx={{
                      paddingY: "14px",
                      paddingLeft: "16px",
                      maxWidth: "200px",
                    }}
                    align="left"
                  >
                    <Skeleton variant="rounded" width={150} height={16} />
                  </TableCell>
                  <TableCell
                    sx={{
                      paddingY: "14px",
                      paddingLeft: "16px",
                      maxWidth: "200px",
                    }}
                    align="left"
                  >
                    <Skeleton variant="rounded" width={150} height={16} />
                  </TableCell>
                </TableRow>
              ))
            : tableRow}
        </TableBody>
      </Table>
      {!tableRowLength ? (
        <AppCenterStack sx={{ width: "100%", height: "300px" }}>
          <AppText text="No Data" />
        </AppCenterStack>
      ) : (
        <></>
      )}
    </TableContainer>
  );
}

import { TableCell, TableRow } from "@mui/material";
import { tagPrice } from "../../constants/utils";
import AppHStack from "../mui/AppStack/AppHStack";
import AppText from "../mui/AppText";
import AppLinearProgress from "../mui/AppLinearProgress";
import AppImage from "../mui/AppImage";
import { greenRaiseIconImage, redRaiseIconImage } from "../../assets";

interface RegionStatusTableRowsProps {
  tableRow: Array<object>;
  handleRowClick?: (storeName: string) => void;
}

export default function RegionStatusTableRows({
  tableRow,
  handleRowClick,
}: RegionStatusTableRowsProps) {
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
              {row?.country}
            </TableCell>
            <TableCell
              sx={{
                paddingY: "14px",
                paddingX: "16px",
                paddingRight: "50px",
                maxWidth: "120px",
              }}
              align="left"
            >
              <AppHStack
                sx={{
                  height: "100%",
                  justifyContent: "space-between",
                  maxWidth: "120px",
                }}
              >
                <AppText
                  variant="subtitle2"
                  sx={{ fontSize: "14px", lineHeight: "20px" }}
                  text={`${row?.audits}%`}
                />
                <AppLinearProgress
                  backgroundColor={"#0B57C0"}
                  sx={{ width: "80px" }}
                  value={row?.audits}
                />
              </AppHStack>
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
              <AppHStack
                sx={{
                  height: "100%",
                  justifyContent: "space-between",
                  maxWidth: "210px",
                }}
              >
                <AppText
                  variant="subtitle2"
                  fontStyles={["16px", "20px", "600"]}
                  text={`${row?.score}%`}
                />
                <AppImage src={greenRaiseIconImage} />
                <AppText
                  variant="subtitle2"
                  fontStyles={["16px", "24px", "400"]}
                  text={`+5app vs. last audit`}
                />
              </AppHStack>
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
              <AppHStack
                sx={{
                  height: "100%",
                  justifyContent: "space-between",
                  width: "100%",
                  minWidth: "270px",
                }}
              >
                <AppText
                  variant="subtitle2"
                  fontStyles={["16px", "20px", "600"]}
                  text={`${row?.maintenance}%`}
                />
                <AppImage src={redRaiseIconImage} />
                <AppText
                  variant="subtitle2"
                  fontStyles={["16px", "24px", "400"]}
                  text={`+5app vs. last audit`}
                />
              </AppHStack>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

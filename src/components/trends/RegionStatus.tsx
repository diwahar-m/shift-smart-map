import AppVStack from "../mui/AppStack/AppVStack";
import AppTable from "../mui/AppTable";
import AppText from "../mui/AppText";
import RegionStatusTableRows from "./RegionStatusTableRows";

const tableHead = [
  "Region",
  "Completed audits",
  "Avg, stoe condition score",
  "Deferred maintenance ($)",
];

const tableRows = [
  {
    country: "California",
    audits: 100,
    score: 88,
    maintenance: "$ 3,125,239",
  },
  {
    country: "Pacific",
    audits: 60,
    score: 28,
    maintenance: "$ 1,125,239",
  },
  {
    country: "New York Metro",
    audits: 70,
    score: 78,
    maintenance: "$ 9,125,239",
  },
  {
    country: "California",
    audits: 100,
    score: 88,
    maintenance: "$ 3,125,239",
  },
  {
    country: "Pacific",
    audits: 60,
    score: 28,
    maintenance: "$ 1,125,239",
  },
  {
    country: "New York Metro",
    audits: 70,
    score: 78,
    maintenance: "$ 9,125,239",
  },
  {
    country: "California",
    audits: 100,
    score: 88,
    maintenance: "$ 3,125,239",
  },
  {
    country: "Pacific",
    audits: 60,
    score: 28,
    maintenance: "$ 1,125,239",
  },
  {
    country: "New York Metro",
    audits: 70,
    score: 78,
    maintenance: "$ 9,125,239",
  },
];

export default function RegionStatus() {
  return (
    <AppVStack
      sx={{
        padding: "0 40px",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["24px", "28px", "600"]}
        text={"Region status and prformance"}
      />
      <AppText
        variant="h3"
        sx={{ color: "#475569", margin: "4px 0 24px 0" }}
        fontStyles={["16px", "24px", "400"]}
        text={
          "Audit status and changes in conditions and deferred maintenance ($)"
        }
      />
      <AppTable
        tableRow={<RegionStatusTableRows tableRow={tableRows} />}
        tableRowLength={tableRows?.length}
        tableHead={tableHead}
      />
    </AppVStack>
  );
}

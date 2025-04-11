import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppLinearProgress from "../mui/AppLinearProgress";
import AppHStack from "../mui/AppStack/AppHStack";
import TagCard from "./TagCard";
import AuditTrendText from "./AuditTrendText";

const tags = ["On Shelf", "In inventory", "Out of stock"];

export default function StateInfo() {
  return (
    <AppVStack sx={{ gap: "26px" }}>
      <AppVStack sx={{ gap: "4px" }}>
        <AppText
          variant={"h4"}
          text={"Completed audits"}
          sx={{ color: "#475569", fontSize: "16px" }}
        />
        <AppText
          sx={{
            color: "#0F172A",
            fontSize: "36px",
            fontWeight: 600,
            lineHeight: "45px",
            height: "40px",
          }}
          variant="h1"
          text={"85%"}
        />
        <AppLinearProgress value={50} />
      </AppVStack>
      <AppVStack>
        <AppText variant={"subtitle1"} text={"Inventory"} />
        <AppLinearProgress value={35} />
      </AppVStack>
      <AppVStack sx={{ marginTop: "6px", gap: "18px" }}>
        {tags?.map((_) => (
          <AppHStack
            key={_}
            sx={{ width: "323px", justifyContent: "space-between" }}
          >
            <TagCard title={_} />
            <AppHStack sx={{ justifyContent: "space-between" }}>
              <AppText
                variant="subtitle2"
                sx={{
                  fontSize: "24px",
                  lineHeight: "28px",
                  fontWeight: 600,
                }}
                text={"20%"}
              />
              <AuditTrendText />
            </AppHStack>
          </AppHStack>
        ))}
      </AppVStack>
    </AppVStack>
  );
}

import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppLinearProgress from "../mui/AppLinearProgress";
import AppHStack from "../mui/AppStack/AppHStack";
import TagCard from "./TagCard";
import AuditTrendText from "./AuditTrendText";
import {
  getCompletedAuditPercentage,
  getInstockPercentage,
  getOnshelfPercentage,
  getOutOfStockPercentage,
} from "../../constants/storeData";
import MultiSegmentProgressBar from "../mui/AppMultiSegmentProgressBa";
import { useEffect, useState } from "react";

export default function StateInfo({ stateName }: { stateName: string }) {
  const [tagList, setTagsList] = useState<
    Array<{ title: string; value: string | number }> | undefined
  >();

  useEffect(() => {
    if (stateName) {
      const tags = [];
      tags?.push({ title: "On shelf", value: getOnshelfPercentage(stateName) });
      tags?.push({
        title: "In inventory",
        value: getInstockPercentage(stateName),
      });
      tags?.push({
        title: "Out of stock",
        value: getOutOfStockPercentage(stateName),
      });
      setTagsList(tags);
    }
  }, [stateName]);
  console.log(stateName);

  return (
    <AppVStack sx={{ gap: "22px" }}>
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
          text={`${getCompletedAuditPercentage(stateName)}%`}
        />
        <AppLinearProgress
          value={parseInt(getCompletedAuditPercentage(stateName))}
        />
      </AppVStack>
      <AppVStack>
        <AppText variant={"subtitle1"} text={"Inventory"} />
        <MultiSegmentProgressBar
          values={[
            parseInt(getOnshelfPercentage(stateName)),
            parseInt(getInstockPercentage(stateName)),
            parseInt(getOutOfStockPercentage(stateName)),
          ]}
        />
        {/* <AppLinearProgress value={stateInfo?.Instock ? 100 : "0%"} /> */}
      </AppVStack>
      <AppVStack sx={{ marginTop: "6px", gap: "10px" }}>
        {tagList?.map((_) => (
          <AppHStack
            key={_?.title}
            sx={{ width: "323px", justifyContent: "space-between" }}
          >
            <TagCard title={_?.title} />
            <AppHStack sx={{ justifyContent: "space-between" }}>
              <AppText
                variant="subtitle2"
                sx={{
                  fontSize: "24px",
                  lineHeight: "28px",
                  fontWeight: 600,
                }}
                text={_?.value?.toLocaleString() + "%"}
              />
              <AuditTrendText />
            </AppHStack>
          </AppHStack>
        ))}
      </AppVStack>
    </AppVStack>
  );
}

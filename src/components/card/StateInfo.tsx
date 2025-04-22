import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppLinearProgress from "../mui/AppLinearProgress";
import AppHStack from "../mui/AppStack/AppHStack";
import TagCard from "./TagCard";
// import AuditTrendText from "./AuditTrendText";
import {
  getCompletedAuditPercentage,
  getInstockPercentage,
  getOnshelfPercentage,
  getOutOfStockPercentage,
} from "../../constants/storeData";
import MultiSegmentProgressBar from "../mui/AppMultiSegmentProgressBa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface StateInfoProps {
  stateName: string;
}

export default function StateInfo({ stateName }: StateInfoProps) {
  const [tagList, setTagsList] = useState<
    Array<{ title: string; value: string | number }> | undefined
  >();
  const { stateId } = useParams();

  useEffect(() => {
    if (stateName) {
      const tags = [];
      tags?.push({
        title: "On shelf",
        value: getOnshelfPercentage(null, stateId, true),
      });
      tags?.push({
        title: "In inventory",
        value: getInstockPercentage(null, stateId, true),
      });
      tags?.push({
        title: "Out of stock",
        value: getOutOfStockPercentage(null, stateId, true),
      });
      setTagsList(tags);
    }
  }, [stateName, stateId]);

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
          text={`${getCompletedAuditPercentage(null, stateId, true)}%`}
        />
        <AppLinearProgress
          // value={parseInt(getCompletedAuditPercentage(stateName))}
          value={parseInt(getCompletedAuditPercentage(null, stateId, true))}
        />
      </AppVStack>
      <AppVStack>
        <AppText variant={"subtitle1"} text={"Inventory"} />
        <MultiSegmentProgressBar
          values={[
            parseInt(getOnshelfPercentage(null, stateId, true)),
            parseInt(getInstockPercentage(null, stateId, true)),
            parseInt(getOutOfStockPercentage(null, stateId, true)),
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
              {/* <AuditTrendText /> */}
            </AppHStack>
          </AppHStack>
        ))}
      </AppVStack>
    </AppVStack>
  );
}

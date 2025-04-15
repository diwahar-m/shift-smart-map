import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import AppLinearProgress from "../mui/AppLinearProgress";
import AppHStack from "../mui/AppStack/AppHStack";
import TagCard from "./TagCard";
import AuditTrendText from "./AuditTrendText";
import { useEffect, useState } from "react";
import auditData from "../../../inventoryDatabase.json";
import { StoreDetail } from "../../constants/typeDeclarations";

export default function StateInfo({ stateName }: { stateName: string }) {
  const [stateInfo, setStateInfo] = useState<StoreDetail>();
  console.log(stateName);
  const [tagList, setTagList] =
    useState<Array<{ title: string; value: number }>>();

  useEffect(() => {
    if (stateName) {
      const filteredData = auditData?.filter((_) => _?.BU === stateName);
      const tags: Array<{ title: string; value: number }> = [];
      if (filteredData?.[0]?.Instock) {
        tags.push({ title: "In Stock", value: 1 });
      } else {
        tags.push({ title: "In Stock", value: 0 });
      }
      if (filteredData?.[0]?.["In Inventory"]) {
        tags.push({ title: "In Inventory", value: 1 });
      } else {
        tags.push({ title: "In Inventory", value: 1 });
      }
      if (filteredData?.[0]?.["No inventory"]) {
        tags.push({ title: "No inventory", value: 1 });
      } else {
        tags.push({ title: "No inventory", value: 1 });
      }
      setTagList(tags);
      setStateInfo(filteredData?.[0]);
    }
  }, [stateName]);
  console.log(stateInfo);

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
          text={stateInfo?.Instock ? `${100}%` : "0%"}
        />
        <AppLinearProgress value={stateInfo?.Instock ? 100 : 0} />
      </AppVStack>
      <AppVStack>
        <AppText variant={"subtitle1"} text={"Inventory"} />
        <AppLinearProgress value={stateInfo?.Instock ? 100 : "0%"} />
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
                text={_?.value ? "100%" : "2%"}
              />
              <AuditTrendText />
            </AppHStack>
          </AppHStack>
        ))}
      </AppVStack>
    </AppVStack>
  );
}

import AppText from "../mui/AppText";
import AppHStack from "../mui/AppStack/AppHStack";
import AppSelectBox from "../mui/AppSelectBox";
import CardSection from "../card/CardSection";
import AppVStack from "../mui/AppStack/AppVStack";
import { usaStates } from "../../constants";
import PathCard from "../card/PathCard";
import AppDateRangePicker from "../mui/AppDateRangePicker";
import { InventoryDetailProps } from "../../pages/dashboard";
interface HeaderBarProps {
  headerCardDetails: Array<InventoryDetailProps>;
  onStateChange?: (value: string) => void;
  onDateRangeChange?: (value: string[]) => void;
}

export default function HeaderBar({
  headerCardDetails,
  onStateChange,
  onDateRangeChange,
}: HeaderBarProps) {
  return (
    <AppVStack sx={{ width: "100%", padding: "30px", gap: "20px" }}>
      <AppText
        variant={"h4"}
        text={"Audits"}
        sx={{
          color: "#0F172A",
          fontWeight: 600,
          lineHeight: "40px",
          fontSize: "2rem",
        }}
      />
      <AppHStack sx={{ justifyContent: "space-between", width: "100%" }}>
        <AppHStack sx={{ gap: "8px" }}>
          <AppSelectBox
            label={"Select State"}
            onChange={(value) => onStateChange?.(value)}
            sx={{ width: "248px", borderRadius: "8px", borderColor: "#CBD5E1" }}
            options={usaStates}
          />
          <AppDateRangePicker
            style={{ width: "188px", height: "42px" }}
            onChange={onDateRangeChange}
          />
        </AppHStack>
        <PathCard />
      </AppHStack>
      <AppHStack sx={{ gap: "5px" }}>
        {headerCardDetails?.map((_, index) => (
          <CardSection detail={_} key={index} />
        ))}
      </AppHStack>
    </AppVStack>
  );
}

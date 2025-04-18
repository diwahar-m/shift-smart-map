import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

export default function DeferredMaintenance() {
  return (
    <AppVStack
      sx={{
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        border: "1px solid #E9EFF7",
        padding: "20px 40px",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["24px", "28px", "600"]}
        text={"Deferred maintenance ($)"}
      />
      <AppText
        variant="h3"
        sx={{ color: "#475569", marginBottom: "24px" }}
        fontStyles={["16px", "24px", "400"]}
        text={"Total deferred maintenance cost over time"}
      />
    </AppVStack>
  );
}

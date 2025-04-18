import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
import ActionItemCards from "./ActionItemCards";

export default function ActionItems() {
  return (
    <AppVStack
      sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "0px !important",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        border: "1px solid #E9EFF7",
        padding: "20px 40px",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["24px", "28px", "600"]}
        text={"Action Items"}
      />
      <AppText
        variant="h3"
        sx={{ color: "#475569" }}
        fontStyles={["16px", "24px", "400"]}
        text={"Take action with data-backe recommendations"}
      />
      <AppVStack sx={{ margin: "24px 0", gap: "8px" }}>
        {Array(3)
          ?.fill("_")
          ?.map((_) => <ActionItemCards />)}
      </AppVStack>
    </AppVStack>
  );
}

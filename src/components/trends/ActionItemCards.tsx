import { ArrowRight, Sparkles } from "lucide-react";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

export default function ActionItemCards() {
  return (
    <AppVStack
      sx={{
        border: "1px solid #3A87F3",
        borderRadius: "12px",
        padding: "16px 20px",
        backgroundColor: "#D4E5FC",
        gap: "6px",
      }}
    >
      <AppHStack sx={{ gap: "8px" }}>
        <Sparkles size={16} color={"#0B57C0"} style={{}} />
        <AppText sx={{ color: "#0B57C0" }} fontStyles={["16px", "24px"]}>
          <span style={{ textDecoration: "underline", fontWeight: 600 }}>
            US Southeast{" "}
          </span>
          had 243 audits completed in the last week
        </AppText>
      </AppHStack>
      <AppHStack sx={{ gap: "3px" }}>
        <AppText sx={{ color: "#0B57C0" }} fontStyles={["16px", "24px", "600"]}>
          View audits
        </AppText>
        <ArrowRight size={15} color={"#0B57C0"} />
      </AppHStack>
    </AppVStack>
  );
}

import AppHStack from "../mui/AppStack/AppHStack";
import { Circle } from "lucide-react";
import AppText from "../mui/AppText";

interface TagCardProps {
  title: string;
  theme?: string;
}

function tagContainer(theme: string, title: string) {
  let color, backgroundColor;

  switch (theme) {
    case "red":
      color = "#B91C1C";
      backgroundColor = "#FEE2E2";
      break;
    case "blue":
      color = "#0B57C0";
      backgroundColor = "#D4E5FC";
      break;
    default:
      color = "#047857";
      backgroundColor = "#DDF6E9";
  }

  switch (title) {
    case "Out of stock":
      color = "#B91C1C";
      backgroundColor = "#FEE2E2";
      break;
    case "In inventory":
      color = "#0B57C0";
      backgroundColor = "#D4E5FC";
      break;
    default:
      color = "#047857";
      backgroundColor = "#DDF6E9";
  }

  return { color, backgroundColor };
}

export default function TagCard({ title, theme = "green" }: TagCardProps) {
  const { color, backgroundColor } = tagContainer(theme, title);
  return (
    <AppHStack
      sx={{
        maxWidth: "100px",
        height: "24px",
        borderRadius: "100px",
        padding: "4px 8px",
        gap: "4px",
        backgroundColor: { backgroundColor },
      }}
    >
      <Circle
        color={color}
        size="8px"
        style={{
          backgroundColor: color, // Change this color to fill the circle
          borderRadius: "100%",
        }}
      />
      <AppText variant="subtitle2" sx={{ fontSize: "12px" }} text={title} />
    </AppHStack>
  );
}

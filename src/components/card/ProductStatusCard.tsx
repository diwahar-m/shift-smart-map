import { ReactElement } from "react";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

interface ProductStatusCardProps {
  text: string;
  children: ReactElement;
}

export default function ProductStatusCard({
  text,
  children,
}: ProductStatusCardProps) {
  return (
    <AppVStack
      sx={{
        border: "1px solid #CBD5E1",
        borderRadius: "24px",
        padding: "20px",
        gap: "8px",
        height: "140px",
        minWidth: "400px",
        backgroundColor: "#fff",
      }}
    >
      <AppText
        sx={{
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 600,
          color: "#475569",
        }}
        text={text}
      />
      {children}
    </AppVStack>
  );
}

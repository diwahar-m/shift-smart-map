import AppVStack from "../mui/AppStack/AppVStack";
import AppHStack from "../mui/AppStack/AppHStack";
import AppText from "../mui/AppText";
import AppButton from "../mui/AppButton";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
interface DetailCardProps {
  stateName?: string | null;
  children: ReactElement;
}

export default function DetailCard({
  stateName = null,
  children,
}: DetailCardProps) {
  const navigate = useNavigate();

  return (
    <AppVStack
      sx={{
        bgcolor: "#fff",
        // border: "1px solid #CBD5E1",
        borderRadius: "16px",
        maxWidth: "362px",
        minWidth: "350px",
        maxHeight: "514px",
        padding: "22px",
        gap: "18px",
        boxSizing: "border-box",
        position: "absolute",
        bottom: "10px",
        right: "10px",
      }}
    >
      {stateName && (
        <AppHStack sx={{ width: "100%", justifyContent: "space-between" }}>
          <AppText
            variant={"h4"}
            text={stateName}
            sx={{ fontWeight: 600, fontSize: "24px", lineHeight: "28px" }}
          />
        </AppHStack>
      )}
      {children}
      <AppButton
        handleClick={() => navigate(`/stores`)}
        sx={{
          marginTop: "18px",
          fontSize: "16px",
          fontWeight: 500,
          backgroundColor: "#0B57C0",
          height: "36px",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        View Stores
      </AppButton>
    </AppVStack>
  );
}

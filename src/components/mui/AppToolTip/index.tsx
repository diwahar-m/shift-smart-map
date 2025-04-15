import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { ReactElement } from "react";

interface AppToolTipProps {
  children: ReactElement<unknown>;
  title: string;
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function AppToolTip({ children, title }: AppToolTipProps) {
  return (
    <LightTooltip sx={{ fontFamily: "Figtree" }} title={title || "Add"} arrow>
      {children}
    </LightTooltip>
  );
}

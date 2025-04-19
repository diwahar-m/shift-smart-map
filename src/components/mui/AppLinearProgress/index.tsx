import { LinearProgress, linearProgressClasses } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";

interface AppLinearProgressProps {
  value: number | string | undefined;
  backgroundColor?: string | null;
  sx?: SxProps;
}

export default function AppLinearProgress({
  value,
  backgroundColor = null,
  sx,
}: AppLinearProgressProps) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: backgroundColor ?? "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));
  // @ts-expect-error "h"
  return <BorderLinearProgress sx={sx} variant="determinate" value={value} />;
}

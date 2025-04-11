import { Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface AppHStackProps {
  children: ReactNode;
  sx?: SxProps;
  rest?: object;
  gap?: string;
}

const AppHStack = ({ children, gap = "0px", sx, ...rest }: AppHStackProps) => {
  return (
    <Stack
      sx={{ flexDirection: "row", alignItems: "center", ...sx }}
      gap={gap}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default AppHStack;

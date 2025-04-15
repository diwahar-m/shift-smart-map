import { Box, SxProps } from "@mui/material";
import { ReactNode, Ref } from "react";

interface AppBoxProps {
  children?: ReactNode;
  ref?: Ref<unknown>;
  sx?: SxProps;
  onClick?: () => void;
}

const AppBox = ({ children, ref, sx, onClick, ...rest }: AppBoxProps) => {
  return (
    <Box sx={sx} ref={ref} onClick={onClick} {...rest}>
      {children}
    </Box>
  );
};

export default AppBox;

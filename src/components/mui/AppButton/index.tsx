import {SxProps, Tooltip, Button } from "@mui/material";
import AppCircleProgress from "../AppCircleProgress";
import { ReactNode } from "react";

interface AppButtonProps {
  children?: ReactNode;
  sx?: SxProps;
  isLoading ?: boolean;
  padding ?: string;
  isDisabled ?: boolean;
  tooltipText?: string;
  handleClick?: ()=> void
}

const AppButton = ({
  children,
  sx,
  isLoading = false,
  padding = "8px 16px",
  isDisabled = false,
  tooltipText,
  handleClick,
  ...rest
} : AppButtonProps) => {
 

  return (
    <>
      <Tooltip title={tooltipText}>
        <Button
          onClick={handleClick}
          sx={{
            boxSizing:'border-box',
            padding: padding,
            textTransform: 'none',
            ...sx,
            borderColor: 'none',
            '&:focus': {
              outline: 'none',
              boxShadow: 'none', // Also remove any box shadow that might appear
            },
          }}
          disabled={isLoading || isDisabled}
          {...rest}
        >
          {children}
          {isLoading && <AppCircleProgress size={16} sx={{ ml: 1 }} />}
        </Button>
      </Tooltip>
    </>
  );
};

export default AppButton;

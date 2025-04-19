import { SxProps, Tooltip, Typography, TypographyVariant } from "@mui/material";
import { ReactNode } from "react";

interface AppTextProps {
  text?: string | number;
  children?: ReactNode;
  variant?: TypographyVariant;
  sx?: SxProps;
  tooltipText?: string;
  rest?: object;
  fontStyles?: Array<string>;
}

const AppText = ({
  text,
  children,
  variant,
  sx,
  tooltipText,
  fontStyles,
  ...rest
}: AppTextProps) => {
  const [fontSize, lineHeight, fontWeight] = fontStyles ?? [];

  return (
    <Typography
      sx={{
        textTransform: "none",
        fontSize,
        lineHeight,
        color: "#000",
        fontWeight,
        ...sx,
      }}
      variant={variant}
      {...rest}
    >
      <Tooltip title={tooltipText}>
        <span style={{ whiteSpace: "nowrap" }}> {text || children}</span>
      </Tooltip>
    </Typography>
  );
};

export default AppText;

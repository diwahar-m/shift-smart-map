import { ReactElement } from "react";
import AppBox from "../mui/AppBox";
import AppButton from "../mui/AppButton";
import AppText from "../mui/AppText";
import { SxProps } from "@mui/material";

interface AppButtonIconprops {
  icon: ReactElement;
  text: string;
  isActive?: boolean;
  handleClick?: () => void;
  isButtonTools?: boolean;
  isSelected?: boolean;
  sx?: SxProps;
  textStyles?: SxProps;
}

export default function AppButtonIcon({
  icon,
  text,
  handleClick,
  isButtonTools = false,
  isActive = false,
  isSelected = false,
  sx,
  textStyles,
}: AppButtonIconprops) {
  return (
    <AppButton
      handleClick={handleClick}
      sx={{
        backgroundColor: isSelected ? "#D4E5FC" : isActive ? "#0B57C0" : "#fff",
        borderRadius: "8px",
        width: "208px",
        height: "44px",
        padding: "12px",
        display: "flex",
        justifyContent: "flex-start",
        gap: "5px",
        alignItems: "center",
        ...sx,
      }}
    >
      {/* <AppImage src={icon} alt={"logo"} /> */}
      <AppBox
        sx={{
          color: isButtonTools ? "#0B57C0" : isActive ? "#fff" : "#475569",
        }}
      >
        {icon}
      </AppBox>
      <AppText
        sx={{
          color: isButtonTools ? "#0B57C0" : isActive ? "#fff" : "#475569",
          lineHeight: "14px",
          fontSize: "14px",
          fontWeight: 500,

          ...textStyles,
        }}
        text={text}
      />
    </AppButton>
  );
}

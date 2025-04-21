import { ReactElement } from "react";
import AppBox from "../mui/AppBox";
import AppButton from "../mui/AppButton";
import AppText from "../mui/AppText";
import { SxProps } from "@mui/material";
import AppHStack from "../mui/AppStack/AppHStack";

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
        maxWidth: "208px",
        maxHeight: "44px",
        // paddingTop: "15px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        ...sx,
      }}
    >
      {/* <AppImage src={icon} alt={"logo"} /> */}
      <AppHStack sx={{ alignItems: "center", gap: "5px" }}>
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
      </AppHStack>
    </AppButton>
  );
}

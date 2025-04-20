import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
// import { Share2, Sparkles } from "lucide-react";
// import AppButtonIcon from "../features/AppButtonIcon";
// import AppImage from "../mui/AppImage";
// import { compressIconImage, exportIconImage } from "../../assets";
// import AppSelectBox from "../mui/AppSelectBox";
// import { getStatesList } from "../../constants/storeData";
// import { DatePicker } from "antd";

export default function TrendsHeader() {
  return (
    <AppVStack
      sx={{
        padding: "40px 40px 0px 40px ",
        gap: "24px",
      }}
    >
      <AppHStack sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <AppText
          sx={{ fontSize: "36px", lineHeight: "40px", fontWeight: 600 }}
          variant="h4"
          text={"Trends"}
        />
        {/* <AppHStack sx={{ gap: "6px" }}>
          <AppButtonIcon
            sx={{ width: "40%", justifyContent: "center" }}
            text={"Compare"}
            textStyles={{ fontSize: "16px", lineHeight: "16px" }}
            isButtonTools={true}
            icon={
              <AppImage
                sx={{ width: "18px", marginTop: "5px" }}
                src={compressIconImage}
                alt={"logo"}
              />
            }
          />
          <AppButtonIcon
            sx={{ width: "40%", justifyContent: "center" }}
            text={"Export"}
            isButtonTools={true}
            textStyles={{ fontSize: "16px", lineHeight: "16px" }}
            icon={
              <AppImage
                sx={{ width: "15px", marginTop: "5px" }}
                src={exportIconImage}
                alt={"logo"}
              />
            }
          />
          <AppButtonIcon
            sx={{ width: "40%", justifyContent: "center" }}
            text={"Share"}
            isButtonTools={true}
            textStyles={{ fontSize: "16px", lineHeight: "16px" }}
            icon={<Share2 size={15} style={{ marginTop: "7px" }} />}
          />
          <AppButtonIcon
            sx={{ width: "40%", justifyContent: "center" }}
            text={"Assistant"}
            isButtonTools={true}
            isSelected={true}
            textStyles={{ fontSize: "16px", lineHeight: "16px" }}
            icon={<Sparkles size={16} style={{ marginTop: "7px" }} />}
          />
        </AppHStack> */}
      </AppHStack>
      {/* <AppHStack sx={{ gap: "8px" }}>
        <AppSelectBox
          label={"Select State"}
          sx={{ width: "248px", borderRadius: "8px", borderColor: "#CBD5E1" }}
          options={getStatesList()}
        />
        <DatePicker style={{ height: "40px" }} />
      </AppHStack> */}
    </AppVStack>
  );
}

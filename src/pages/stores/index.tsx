import { useNavigate } from "react-router-dom";
import AppBox from "../../components/mui/AppBox";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import AppTable from "../../components/mui/AppTable";
import AppText from "../../components/mui/AppText";
import { storesTableHead } from "../../constants";
import HeaderBar from "../../components/common/HeaderBar";
import { inventoryDetails } from "../dashboard";

export default function StoresPage() {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/store/1");
  };

  return (
    <AppVStack
      sx={{
        flex: 1,
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        justifyContent: "flex-start",
        maxHeight: "100px", // or any height you need
        overflowY: "auto",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <HeaderBar headerCardDetails={inventoryDetails} />
      <AppVStack>
        <AppBox sx={{ height: "38px", paddingLeft: "30px" }}>
          <AppText
            variant="subtitle2"
            text={"1,294 stores within map area"}
            sx={{ margin: "auto" }}
          />
        </AppBox>
        <AppTable handleRowClick={handleRowClick} tableHead={storesTableHead} />
      </AppVStack>
    </AppVStack>
  );
}

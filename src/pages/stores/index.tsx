import { useNavigate } from "react-router-dom";
import { getDateDuration, storesTableHead } from "../../constants";
import HeaderBar from "../../components/common/HeaderBar";
import { inventoryDetails } from "../dashboard";
import { getStoresList, StoreAudit } from "../../constants/storeData";
import { useContext, useEffect, useState } from "react";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import AppBox from "../../components/mui/AppBox";
import AppText from "../../components/mui/AppText";
import AppTable from "../../components/mui/AppTable";
import { HeaderContext } from "../../context/HeaderContext";

export default function StoresPage() {
  const navigate = useNavigate();

  const { storesList, setStoresList } = useContext(HeaderContext);

  useEffect(() => {
    setStoresList(getStoresList());
  }, []);

  const handleRowClick = (storeName: string) => {
    navigate(`/store/${storeName}`);
  };

  return (
    <AppVStack
      sx={{
        flex: 1,
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        justifyContent: "flex-start",
        maxHeight: "100px",
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <AppBox sx={{ height: "38px", paddingLeft: "40px" }}>
        <AppText
          variant="subtitle2"
          text={`${storesList?.length} stores within map area`}
          sx={{ margin: "auto" }}
        />
      </AppBox>
      <AppTable
        handleRowClick={handleRowClick}
        tableRow={storesList}
        tableHead={storesTableHead}
      />
    </AppVStack>
  );
}

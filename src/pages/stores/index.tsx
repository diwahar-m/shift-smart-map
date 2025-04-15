import { useNavigate } from "react-router-dom";
import { storesTableHead } from "../../constants";
import { getStoresList } from "../../constants/storeData";
import { useContext, useEffect } from "react";
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
        maxHeight: "100%",
        justifyContent: "flex-start",
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

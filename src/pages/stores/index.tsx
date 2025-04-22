/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLocation, useNavigate } from "react-router-dom";
import { storesTableHead } from "../../constants";
import { getStoresList } from "../../constants/storeData";
import { useContext, useEffect } from "react";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import AppBox from "../../components/mui/AppBox";
import AppText from "../../components/mui/AppText";
import AppTable from "../../components/mui/AppTable";
import { HeaderContext } from "../../context/HeaderContext";
import StoreTableRows from "../../components/stores/StoreTableRows";

export default function StoresPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { storesList, setStoresList } = useContext(HeaderContext);

  useEffect(() => {
    if (state?.stateName) setStoresList(getStoresList(state?.stateName));
    else setStoresList(getStoresList());
  }, [state]);

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
          text={`${[...new Set(storesList?.map((_: any) => _?.name))]?.length} stores and  within map area`}
          sx={{ margin: "auto" }}
        />
      </AppBox>
      <AppTable
        tableRow={
          <StoreTableRows
            handleRowClick={handleRowClick}
            tableRow={storesList}
          />
        }
        tableRowLength={storesList?.length}
        tableHead={storesTableHead}
      />
    </AppVStack>
  );
}

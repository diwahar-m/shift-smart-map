import { useNavigate } from "react-router-dom";
import { getDateDuration, storesTableHead } from "../../constants";
import HeaderBar from "../../components/common/HeaderBar";
import { inventoryDetails } from "../dashboard";
import { getStoresList, StoreAudit } from "../../constants/storeData";
import { useEffect, useState } from "react";
import AppVStack from "../../components/mui/AppStack/AppVStack";
import AppBox from "../../components/mui/AppBox";
import AppText from "../../components/mui/AppText";
import AppTable from "../../components/mui/AppTable";

export default function StoresPage() {
  const navigate = useNavigate();

  const [storesList, setStoresList] = useState<StoreAudit[]>([]);
  const [stateName, setStateName] = useState("");

  useEffect(() => {
    setStoresList(getStoresList());
  }, []);

  const handleRowClick = (storeName: string) => {
    navigate(`/store/${storeName}`);
  };

  const onStateChange = (stateName: string) => {
    console.log(stateName);
    setStateName(stateName);
    setStoresList(getStoresList(stateName));
  };

  const onDateRangeChange = (dateRange: string) => {
    let [fromDate, toDate] = dateRange;
    console.log(fromDate);
    let filteredStores = storesList;
    if (fromDate) {
      filteredStores = storesList?.filter((_) => {
        return (
          getDateDuration(_?.completion_date) > getDateDuration(fromDate) &&
          getDateDuration(_?.completion_date) < getDateDuration(toDate)
        );
      });
    } else {
      filteredStores = getStoresList(stateName);
    }

    setStoresList(filteredStores);
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
      <HeaderBar
        onStateChange={onStateChange}
        onDateRangeChange={onDateRangeChange}
        headerCardDetails={inventoryDetails}
      />
      <AppVStack>
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
    </AppVStack>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, ReactElement, useState } from "react";
import { getStoresList, StoreAudit } from "../constants/storeData";
import { getDateDuration } from "../constants";

export const HeaderContext = createContext<any>(null);

export default function HeaderContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [storesList, setStoresList] = useState<StoreAudit[]>([]);
  const [stateName, setStateName] = useState("");

  //   const handleRowClick = (storeName: string) => {
  //     navigate(`/store/${storeName}`);
  //   };

  const onStateChange = (stateName: string) => {
    setStateName(stateName);
    if (stateName) setStoresList(getStoresList(stateName));
    else setStoresList(getStoresList());
  };

  const onDateRangeChange = (dateRange: string) => {
    const [fromDate, toDate] = dateRange;
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
    <HeaderContext.Provider
      value={{
        storesList,
        setStoresList,
        stateName,
        setStateName,
        onStateChange,
        onDateRangeChange,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

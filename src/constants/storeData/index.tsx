/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getDateFormat, getProductAvailability, getProductPrice } from "..";
import auditReport from "../../../inventoryDatabaseTwo.json";
const auditData = auditReport?.["Data Feed"];

export function getCompletedAuditPercentage(stateName?: string) {
  let stateTotalAudits = 0;
  let completedAudits = 0;
  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
      stateTotalAudits += 1;
      if (_?.["Completion Date"] !== "") completedAudits += 1;
    });
  const completedAuditPercentage = (completedAudits / stateTotalAudits) * 100;
  return isNaN(completedAuditPercentage)
    ? "0"
    : completedAuditPercentage.toFixed();
}

export function getOnshelfPercentage(stateName?: string) {
  let totalStock = 0;
  let inStocks = 0;
  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] !== 0) inStocks += 1;
    });
  const outOfStockPercentage = (inStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed(2);
}

export function getInstockPercentage(stateName?: string) {
  let totalStock = 0;
  let inStocks = 0;
  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] !== 0 || _?.["In Inventory"] !== 0) inStocks += 1;
    });
  const outOfStockPercentage = (inStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed(2);
}

export function getOutOfStockPercentage(stateName?: string) {
  let totalStock = 0;
  let outOfStocks = 0;
  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] === 0 && _?.["In Inventory"] === 0) outOfStocks += 1;
    });
  const outOfStockPercentage = (outOfStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed(2);
}

export function getInstockAndOnshelfPercentage(stateName?: string) {
  let totalStock = 0;
  let inStocks = 0;
  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] !== 0 || _?.["In Inventory"] !== 0) inStocks += 1;
    });
  const outOfStockPercentage = (inStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed(2);
}

export function getSKUAveragePrice() {
  let totalSKUPrice = 0;
  let count = 0;
  auditData?.map((_) => {
    if (_?.["Strawberry Kiwi, Price"]) {
      count++;
      totalSKUPrice += _?.["Strawberry Kiwi, Price"];
    }
  });
  const completedAuditPercentage = totalSKUPrice / count;
  return completedAuditPercentage.toFixed(2);
}

// ----  store list ------
type ProductDetail = {
  stock: string;
  price: string;
};

export type StoreAudit = {
  name: string;
  punch: ProductDetail;
  kiwi: ProductDetail;
  cooler: ProductDetail;
  audited: string;
  delivery: string;
  completion_date: string;
};

export function getStoresList(stateName: string | null = null) {
  const storesList: StoreAudit[] = [];

  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
      const auditDetail = {
        name: _?.["Store Number"],
        punch: {
          stock: getProductAvailability(
            _?.["Fruit Punch, Stock"],
            _?.["Inventory, Fruit Punch"],
            _?.["Fruit Punch, Price"]
          ),
          price: getProductPrice(_?.["Fruit Punch, Price"]),
        },
        kiwi: {
          stock: getProductAvailability(
            _?.["Strawberry Kiwi, Stock"],
            _?.["Inventory, Strawberry Kiwi"],
            _?.["Strawberry Kiwi, Price"]
          ),
          price: getProductPrice(_?.["Strawberry Kiwi, Price"]),
        },
        cooler: {
          stock: getProductAvailability(
            _?.["Pacific Cooler, Stock"],
            _?.["Inventory, Pacific Cooler"],
            _?.["Pacific Cooler, Price"]
          ),
          price: getProductPrice(_?.["Pacific Cooler, Price"]),
        },
        audited: getDateFormat(_?.["Completion Date"]),
        delivery: "-",
        completion_date: _?.["Completion Date"],
      };
      storesList?.push(auditDetail);
    });
  return storesList;
}

// ---------------------

// ----- store data ----

export function getStoreDetails(stateName: string | undefined | number) {
  return auditData?.filter((_) => _?.["Store Number"] === stateName);
}

// -------------

// --- state list ---

export function getStatesList() {
  const statesList: any = [];
  auditData
    ?.filter((_) => _?.["Completion Date"] !== "")
    ?.map((_) => {
      if (!statesList?.includes(_?.["BU"])) {
        statesList?.push(_?.["BU"]);
      }
    });
  return statesList;
}

// ------

// export function getStateBasedStoresList(state) {
//   let stateBasedStoresList = [];
//   auditData?.map((_) => {
//     if (state === _?.BU) {
//     }
//   });
// }

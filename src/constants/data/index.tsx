import { getDateFormat, getProductAvailability, getProductPrice } from "..";
import auditData from "../../../inventoryDatabase.json";

let totalAudits = 0;
export function getCompletedAuditPercentage() {
  let completedAudits = 0;
  auditData?.map((_) => {
    totalAudits += 1;
    if (_?.["Completion Date"] !== "") completedAudits += 1;
  });
  const completedAuditPercentage = (completedAudits / totalAudits) * 100;
  return completedAuditPercentage.toFixed(2);
}

export function getOutOfStockPercentage() {
  let outOfStocks = 0;
  auditData?.map((_) => {
    if (_?.["Instock"] === "0") outOfStocks += 1;
  });
  const outOfStockPercentage = (outOfStocks / totalAudits) * 100;
  return outOfStockPercentage.toFixed(2);
}

export function getInstockAndOnshelfPercentage() {
  let inStocks = 0;
  auditData?.map((_) => {
    if (_?.["Instock"] !== "0") inStocks += 1;
  });
  const outOfStockPercentage = (inStocks / totalAudits) * 100;
  return outOfStockPercentage.toFixed(2);
}

export function getSKUAveragePrice() {
  let totalSKUPrice = 0;
  let count = 0;
  auditData?.map((_) => {
    totalAudits += 1;
    if (_?.["Strawberry Kiwi, Price"] !== "") {
      count++;
      totalSKUPrice += parseInt(_?.["Strawberry Kiwi, Price"]?.slice(1));
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
};
export function getStoresList(stateName: string | null = null) {
  console.log(stateName);
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
            _?.["Fruit Punch, Inventory"]
          ),
          price: getProductPrice(_?.["Fruit Punch, Price"]),
        },
        kiwi: {
          stock: getProductAvailability(
            _?.["Strawberry Kiwi, Stock"],
            _?.["Strawberry Kiwi, Inventory"]
          ),
          price: getProductPrice(_?.["Strawberry Kiwi, Price"]),
        },
        cooler: {
          stock: getProductAvailability(
            _?.["Pacific Cooler, Stock"],
            _?.["Pacific Cooler, Inventory"]
          ),
          price: getProductPrice(_?.["Pacific Cooler, Price"]),
        },
        audited: getDateFormat(_?.["Completion Date"]),
        delivery: "-",
      };
      storesList?.push(auditDetail);
    });
  return storesList;
}

// ---------------------

// export function getStateBasedStoresList(state) {
//   let stateBasedStoresList = [];
//   auditData?.map((_) => {
//     if (state === _?.BU) {
//     }
//   });
// }

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

// export function getStateBasedStoresList(state) {
//   let stateBasedStoresList = [];
//   auditData?.map((_) => {
//     if (state === _?.BU) {
//     }
//   });
// }

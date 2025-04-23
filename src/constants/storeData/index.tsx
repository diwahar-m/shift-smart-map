/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getDateFormat, getProductAvailability, getProductPrice } from "..";
import auditReport from "../../../inventoryDatabaseTwo.json";
import stateRegion from "../../../usa-state-region-lat-lng.json";
import usaMapData from "../../constants/us-states.json";
import { point, polygon, booleanPointInPolygon } from "@turf/turf";

const auditData = auditReport?.["Data Feed"];

export const stateRegions = {
  "South Carolina": ["Coastal Carolina"],
  Arizona: ["Grand Canyon"],
  Illinois: ["Great Lakes"],
  Michigan: ["Great Lakes"],
  Minnesota: ["Great Lakes"],
  "New York": ["Great Lakes"],
  Ohio: ["Great Lakes"],
  Pennysylvania: ["Great Lakes"],
  Wisconsin: ["Great Lakes"],
  Indiana: ["Great Lakes"],
  Texas: ["Gulf Coast"],
  Louisiana: ["Gulf Coast"],
  Mississippi: ["Gulf Coast"],
  Alabama: ["Gulf Coast"],
  Florida: ["Gulf Coast"],
};

export function getStateRegions(state: any) {
  // return stateRegions[state];
  return stateRegion?.filter((_) => _?.State === state)?.map((_) => _?.Region);
}

export function getBUbyStateName(stateName: string | undefined) {
  const isStateExists = auditData?.filter((_) => _?.BU === stateName);
  return isStateExists?.length;
}
//@ts-expect-error ""
function getDepth(arr: any) {
  return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getDepth)) : 0;
}

export function checkCoordinatesByBoundary(
  state: string,
  latLng: [number, number]
) {
  const boundaryCoOrdinates = usaMapData?.features
    ?.filter((_) => _?.properties?.name === state)
    ?.map((_) => _?.geometry?.coordinates);

  const depthOfArr = getDepth(boundaryCoOrdinates?.[0]);

  const pt = point(latLng);

  const poly = polygon(
    //@ts-expect-error ""
    depthOfArr > 3 ? boundaryCoOrdinates?.[0]?.[0] : boundaryCoOrdinates?.[0]
  );

  return booleanPointInPolygon(pt, poly);
}

export function checkCoOrdinatesWithinState(stateName: string) {
  const filteredSatesByCoOrdinates = auditData
    ?.filter((_) => {
      const latitude = _?.["Store Latitude"];
      const longitude = _?.["Store Longitude"];
      return checkCoordinatesByBoundary(stateName, [longitude, latitude]);
    })
    ?.map((_) => _?.BU);
  return filteredSatesByCoOrdinates[0];
}

export function getCompletedAuditPercentage(
  businessUnit?: string | null,
  stateName?: string | null,
  latLng: boolean = false
) {
  let stateTotalAudits = 0;
  let completedAudits = 0;
  auditData
    ?.filter((_) => {
      if (businessUnit) {
        return _?.BU === businessUnit;
      }
      if (latLng && stateName) {
        const latitude = _?.["Store Latitude"];
        const longitude = _?.["Store Longitude"];
        return checkCoordinatesByBoundary(stateName, [longitude, latitude]);
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

export function getOnshelfPercentage(
  businessUnit?: string | null,
  stateName?: string | null,
  latLng: boolean = false
) {
  let totalStock = 0;
  let inStocks = 0;
  auditData
    ?.filter((_) => {
      if (businessUnit) {
        return _?.BU === businessUnit;
      }
      if (latLng && stateName) {
        const latitude = _?.["Store Latitude"];
        const longitude = _?.["Store Longitude"];
        return checkCoordinatesByBoundary(stateName, [longitude, latitude]);
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] !== 0) inStocks += 1;
    });
  const outOfStockPercentage = (inStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed();
}

export function getInstockPercentage(
  businessUnit?: string | null,
  stateName?: string | null,
  latLng: boolean = false
) {
  let totalStock = 0;
  let inStocks = 0;
  auditData
    ?.filter((_) => {
      if (businessUnit) {
        return _?.BU === businessUnit;
      }
      if (latLng && stateName) {
        const latitude = _?.["Store Latitude"];
        const longitude = _?.["Store Longitude"];
        return checkCoordinatesByBoundary(stateName, [longitude, latitude]);
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] !== 0 || _?.["In Inventory"] !== 0) inStocks += 1;
    });
  const outOfStockPercentage = (inStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed();
}

export function getOutOfStockPercentage(
  businessUnit?: string | null,
  stateName?: string | null,
  latLng: boolean = false
) {
  let totalStock = 0;
  let outOfStocks = 0;
  auditData
    ?.filter((_) => {
      if (businessUnit) {
        return _?.BU === businessUnit;
      }
      if (latLng && stateName) {
        const latitude = _?.["Store Latitude"];
        const longitude = _?.["Store Longitude"];
        return checkCoordinatesByBoundary(stateName, [longitude, latitude]);
      }
      return _;
    })
    ?.map((_) => {
      totalStock++;
      if (_?.["Instock"] === 0 && _?.["In Inventory"] === 0) outOfStocks += 1;
    });
  const outOfStockPercentage = (outOfStocks / totalStock) * 100;
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed();
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
  return isNaN(outOfStockPercentage) ? "0" : outOfStockPercentage.toFixed();
}

export function getSKUAveragePrice(stateName?: string) {
  let totalSKUPrice = 0;
  let count = 0;
  auditData
    ?.filter((_) => {
      if (stateName) {
        return _?.BU === stateName;
      }
      return _;
    })
    ?.map((_) => {
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

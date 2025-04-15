export const usaStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

//  Table
export const storesTableHead = [
  "Store",
  "Capri Sun Punch",
  "Capri Sun StrawberryKiwi",
  "Capri Sun Pacific Cooler",
  "Last audited",
  "Last delivery",
];

export const storesTableRow = [
  "Circle K | Store 2709744",
  { stock: "Out of stack", price: "$2.50" },
  { stock: "In inventory", price: "$0.00" },
  { stock: "On shelf", price: "$2.44" },
  "Mar 18, 2025",
  "Feb 20, 2025",
];

//@ts-expect-error "j"
export function stateStyling(stateName, layer) {
  // state styling
  layer.bindTooltip(stateName, {
    permanent: true,
    direction: "center",
    className: "state-label",
  });
  // Path styling
  (layer as L.Path).setStyle({
    fillColor: "#CBD5E1",
    fillOpacity: 0.3,
    weight: 2,
    opacity: 1,
    color: "#9b9898",
    dashArray: "3",
  });

  // Optional: Add a popup for each state
  layer.bindPopup(`<strong>${stateName}</strong>`).openPopup();
}

export function getDateFormat(date: string) {
  // Output Ex - "Apr 03, 2025"

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    // year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return formattedDate;
}

export function getDateDuration(date: string) {
  const dateTime = new Date(date);

  const stripTime = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return stripTime(dateTime);
}

export function getProductAvailability(stock: string, inventory: string) {
  const productAvailability = ["On shelf", "In inventory", "Out of stock"];

  if (stock !== "") return productAvailability[0];
  else if (inventory) return productAvailability[1];

  return productAvailability[2];
}

export function getProductPrice(price: string) {
  if (price === "") return "$0.00";
  return price;
}

let displayName: string = "Kastastin's standing desk";
let invertoryType: string = "furniture";
let trackingNumber: string = "FE00001";
let createDate: Date = new Date();
let originalCost: number | string = 425;
originalCost = "$425";

enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture",
}

interface InventoryItem {
  displayName: string;
  invertoryType: "computer" | "furniture";
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {
  // item.trackingNumber = "newTrackingNumber"; // readonly property
}

let invertoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = invertoryItem;

invertoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MacBook Pro 15 Retina",
  invertoryType: "computer",
  trackingNumber: "MBP00002",
  createDate: new Date(),
});

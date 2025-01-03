var displayName = "Kastastin's standing desk";
var invertoryType = "furniture";
var trackingNumber = "FE00001";
var createDate = new Date();
var originalCost = 425;
originalCost = "$425";
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
    // item.trackingNumber = "newTrackingNumber"; // readonly property
}
var invertoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = invertoryItem;
invertoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    invertoryType: "computer",
    trackingNumber: "MBP00002",
    createDate: new Date(),
});

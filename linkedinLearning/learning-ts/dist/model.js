function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
function updateInventoryItem(trackingNumber, item) { }
updateInventoryItem("ID109", {
    displayName: "MacBook Pro",
    // createDate: new Date(), // error -> Omit<>
});
function clone(source, option) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
clone({ name: "Bob" }, { deep: true });
var keyValue = { Key: "age", Value: 30 };

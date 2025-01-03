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

function saveInventoryItem(item: InventoryItem) {}

function updateInventoryItem(
  trackingNumber: string,
  item: Omit<Partial<InventoryItem>, "trackingNumber" | "createDate">,
) {}

updateInventoryItem("ID109", {
  displayName: "MacBook Pro",
  // createDate: new Date(), // error -> Omit<>
});

function clone<T, U>(source: T, option: U): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

clone({ name: "Bob" }, { deep: true });

interface KeyValuePair<TKey, TValue> {
  Key: TKey;
  Value: TValue;
}

const keyValue: KeyValuePair<string, number> = { Key: "age", Value: 30 };

declare const Vue: any;

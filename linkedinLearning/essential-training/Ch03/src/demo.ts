interface Contact {
  id: number;
  name: ContactName;
  status?: ContactStatus;
  birthDate?: ContactBirthDate;
}

type ContactName = string;
type ContactStatus = "active" | "inactive";
type ContactBirthDate = Date | string | number;

type AddressableContact = Contact & Address;

interface Address {
  city?: string;
  street?: string;
  postalCode?: string;
}

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

const primaryContact: Contact = {
  id: 1,
  name: "Bob Builder",
  status: "active",
};

function getValue<T>(source: T, propertyName: keyof T) {
  return source[propertyName];
}

const contactStatus = getValue(primaryContact, "status");
const value = getValue({ text: "example" }, "text");

interface ContactEvent {
  contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent {}

interface ContactStatusChangedEvent extends ContactEvent {
  oldStatus: Contact["status"];
  newStatus: Contact["status"];
}

interface ContactEvents {
  deleted: ContactDeletedEvent;
  statusChanged: ContactStatusChangedEvent;
}

function handleEvent<T extends keyof ContactEvents>(
  eventName: T,
  handler: (event: ContactEvents[T]) => void,
) {
  if (eventName === "statusChanged") {
    handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" });
  }
}

handleEvent("statusChanged", (event) => event);

// <-- Records -->

let x: Record<string, string | number | boolean | Function> = { name: "Bob" };
x.age = 10;
x.active = true;
x.log = () => console.log("test");

interface Query {
  sort?: "asc" | "desc";
  matches(value): boolean;
}

function searchContacts(
  contacts: Contact[],
  query: Record<keyof Contact, Query>,
) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      // Get query object for the current property
      const propertyQuery = query[property];

      // Check IF it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

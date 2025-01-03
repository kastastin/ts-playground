interface Contact extends Address {
  id: number;
  name: ContactName;
  status?: "active" | "inactive";
  birthDate?: Date;
}

interface Address {
  city?: string;
  street?: string;
  postalCode?: string;
}

type ContactName = string;

let primaryContact: Contact = {
  id: 1,
  name: "Bob Builder",
  city: "Kyiv",
  status: "active",
};

function clone<T>(source: T): T {
  return Object.apply({}, source);
}

const primaryContactCopy = clone(primaryContact);

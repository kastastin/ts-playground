interface Contact {
  id: number;
  name: string;
  status: ContactStatus;
  address: Address;
}

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Query {
  sort?: "asc" | "desc";
  matches(val): boolean;
}

type ContactStatus = "active" | "inactive" | "new";
type ContactQuery = Omit<
  Partial<Record<keyof Contact, Query>>,
  "address" | "status"
>;

function searchContacts(contacts: Contact[], query: ContactQuery) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      const propertyQuery = query[property];

      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts = searchContacts(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
  },
);

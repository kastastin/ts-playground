import { faker } from "@faker-js/faker";

export class User {
  fullName: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.fullName = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}

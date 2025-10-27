/// <reference types="@types/google.maps" />

import { User } from "./User.ts";
import { Company } from "./Company.ts";

import "./style.css";

const user = new User();
const company = new Company();

console.log(user, company);

let map;
async function initMap(): Promise<void> {
  const position = { lat: company.location.lat, lng: company.location.lng };

  const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;

  map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

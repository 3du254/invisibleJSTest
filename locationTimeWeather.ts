interface location {
  name: string;
  postalCode: string;
}
const locations: location[] = [
  { name: "Nairobi", postalCode: "P.O BOX 100 Moi Avenue" },
  { name: "Kitale", postalCode: "P.O BOX 2001 Kenyatta Street" },
  { name: "Mombasa", postalCode: "P.O BOX 1001 Mombasa" }
];
const logTimeWeather = locations.map(company => company);
console.log(logTimeWeather);

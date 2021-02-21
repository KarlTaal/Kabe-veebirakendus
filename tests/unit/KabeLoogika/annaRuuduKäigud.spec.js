import lauaSeisud from "./LauaSeisud.json";
import annaRuuduKäigud from "@/scripts/annaRuuduKäigud";

describe("Testid võimalike käikude saamiseks", () => {

  // TODO tavanupu käigu testid
  //TODO tammi käikude testid
  //TODO tavanupu söömise testid
  //TODO tammi söömise testid
  //TODO edge cased
  //TODO Kõik stsenaarimuid musta ja valge nupu puhul

  it("Ühe käigu test",  () => {
    expect(annaRuuduKäigud([2,1], lauaSeisud.algseis)).toEqual([[3,0], [3,2]]);
  });


});

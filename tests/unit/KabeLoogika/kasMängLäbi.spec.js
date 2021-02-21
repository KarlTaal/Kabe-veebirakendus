import lauaSeisud from "./LauaSeisud.json";
import kasLõpp from "@/scripts/kasMängLäbi";

describe("Mängu lõpu kontroll", () => {

  it("Kas tagastab 'null' kui võitjat pole veel",  () => {
    expect(kasLõpp(lauaSeisud.algseis)).toEqual(null);
  });

  it("Kas tagastab 'valge' kui võitja on valge",  () => {
    expect(kasLõpp(lauaSeisud.valgeVõitja)).toEqual("valge");
  });

    it("Kas tagastab 'must' kui võitja on valge",  () => {
      expect(kasLõpp(lauaSeisud.mustVõitja)).toEqual("must");
    });
});





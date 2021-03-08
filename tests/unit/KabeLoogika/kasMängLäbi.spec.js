import ErinevadLauaSeisud from "../erinevadLauaSeisud";
import kasLõpp from "@/scripts/kasMängLäbi";

describe("Mängu lõpu kontroll", () => {

  it("Kas tagastab 'null' kui võitjat pole veel",  () => {
    expect(kasLõpp(ErinevadLauaSeisud().tavaSöömisedKeerulineValge)).toEqual(null);
  });

  it("Kas tagastab 'valge' kui võitja on valge",  () => {
    expect(kasLõpp(ErinevadLauaSeisud().tavaNupuTavaKäigudValge)).toEqual("valge");
  });

    it("Kas tagastab 'must' kui võitja on valge",  () => {
      expect(kasLõpp(ErinevadLauaSeisud().tavaNupuTavaKäigudMust)).toEqual("must");
    });
});





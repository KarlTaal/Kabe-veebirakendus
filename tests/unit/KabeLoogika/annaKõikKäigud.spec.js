import annaKõikKäigud from "@/scripts/annaKõikKäigud";
import ErinevadLauaSeisud from "../erinevadLauaSeisud";
import annaRuuduKäigud from "@/scripts/annaRuuduKäigud";

describe("Testid kõikide ühe tüübi nuppude käikude saamiseks(tavalised nupud)", () => {
  it("Tava kõik käigud must", () => {
    const käigud = annaKõikKäigud("must", ErinevadLauaSeisud().tavaMustaKõikErinevadKäigud);
    expect(käigud).toEqual([[[2,7]], [[4,3], [6,1]], [[4,3],[6,5]]]);
  });

  it("Tava kõik käigud valge", () => {
    const käigud = annaKõikKäigud("valge", ErinevadLauaSeisud().tavaValgeKõikErinevadKäigud);
    expect(käigud).toEqual([[[2, 3], [0, 5]], [[2, 3],[0,1]], [[4,7]]]);
  });
});

//TODO tammi testid
describe("Testid kõikide ühe tüübi nuppude käikude saamiseks(Tammid)", () => {
  it("Tammi kõik käigud must", () => {
    const käigud = annaKõikKäigud("must", ErinevadLauaSeisud().tavaMustaKõikErinevadKäigud);
    expect(käigud).toEqual([[[2,7]], [[4,3], [6,1]], [[4,3],[6,5]]]);
  });

  it("Tava kõik käigud valge", () => {
    const käigud = annaKõikKäigud("valge", ErinevadLauaSeisud().tavaValgeKõikErinevadKäigud);
    expect(käigud).toEqual([[[2, 3], [0, 5]], [[2, 3],[0,1]], [[4,7]]]);
  });
});
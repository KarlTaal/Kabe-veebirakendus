import ErinevadLauaSeisud from "../erinevadLauaSeisud";
import hinda from "@/scripts/hinda";

describe("Testid mängija skoori arvutamiseks", () => {

  it("Valged tammid ja tavanupud", () => {
    expect(hinda("valge", ErinevadLauaSeisud().tammiJaTavanupudValge)).toEqual(7);
  });

  it("Mustad tammid ja tavanupud", () => {
    expect(hinda("must", ErinevadLauaSeisud().tammiJaTavanupudMust)).toEqual(6);
  });

});
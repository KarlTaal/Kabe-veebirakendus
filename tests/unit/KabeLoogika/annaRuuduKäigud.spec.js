import lauaSeisud from "./LauaSeisud.json";
import annaRuuduKäigud from "@/scripts/annaRuuduKäigud";

describe("Testid võimalike käikude saamiseks", () => {

  //TODO tavanupu käigu testid
  //TODO tammi käikude testid
  //TODO tavanupu söömise testid
  //TODO tammi söömise testid
  //TODO edge cased
  //TODO Kõik stsenaarimuid musta ja valge nupu puhul

  it("Lihtsamad tavanupu käigud",  () => {
    expect(annaRuuduKäigud([2, 1], lauaSeisud.algseis)).toEqual([[[3,2]], [[3,0]]]);
    expect(annaRuuduKäigud([2, 5], lauaSeisud.algseis)).toEqual([[[3,6]], [[3,4]]]);
    expect(annaRuuduKäigud([2, 7], lauaSeisud.algseis)).toEqual([[[3,6]]]);
    expect(annaRuuduKäigud([5, 0], lauaSeisud.algseis)).toEqual([[[4,1]]]);
    expect(annaRuuduKäigud([5, 4], lauaSeisud.algseis)).toEqual([[[4,3]], [[4, 5]]]);

    expect(annaRuuduKäigud([2, 1], lauaSeisud.nupudAinultRealKaksJaViisTavanupud)).toEqual([[[3,2]], [[3,0]]]);
    expect(annaRuuduKäigud([2, 5], lauaSeisud.nupudAinultRealKaksJaViisTavanupud)).toEqual([[[3,6]], [[3,4]]]);
    expect(annaRuuduKäigud([2, 7], lauaSeisud.nupudAinultRealKaksJaViisTavanupud)).toEqual([[[3,6]]]);
    expect(annaRuuduKäigud([5, 0], lauaSeisud.nupudAinultRealKaksJaViisTavanupud)).toEqual([[[4,1]]]);
    expect(annaRuuduKäigud([5, 4], lauaSeisud.nupudAinultRealKaksJaViisTavanupud)).toEqual([[[4,3]], [[4, 5]]]);

    expect(annaRuuduKäigud([1, 2], lauaSeisud.algseis)).toEqual([]);
    expect(annaRuuduKäigud([6, 5], lauaSeisud.algseis)).toEqual([]);
    expect(annaRuuduKäigud([7, 4], lauaSeisud.algseis)).toEqual([]);
    expect(annaRuuduKäigud([0, 7], lauaSeisud.algseis)).toEqual([]);
    expect(annaRuuduKäigud([1, 0], lauaSeisud.algseis)).toEqual([]);

    expect(annaRuuduKäigud([1, 0], lauaSeisud.nupudÄärtesTavanupud)).toEqual([[[2,1]]]);
    expect(annaRuuduKäigud([2, 7], lauaSeisud.nupudÄärtesTavanupud)).toEqual([[[3,6]]]);
    expect(annaRuuduKäigud([5, 0], lauaSeisud.nupudÄärtesTavanupud)).toEqual([[[4,1]]]);
    expect(annaRuuduKäigud([6, 7], lauaSeisud.nupudÄärtesTavanupud)).toEqual([[[5,6]]]);
  });

  it("Lihtsamad tammi käigud",  () => {

    expect(annaRuuduKäigud([2, 1], lauaSeisud.nupudAinultRealKaksJaViisTammiVersioon)).toEqual([[[1,2]], [[3,2]], [[3,0]], [[1,0]]]);
    expect(annaRuuduKäigud([2, 7], lauaSeisud.nupudAinultRealKaksJaViisTammiVersioon)).toEqual([[[3,6]], [[1,6]]]);
    expect(annaRuuduKäigud([5, 4], lauaSeisud.nupudAinultRealKaksJaViisTammiVersioon)).toEqual([[[4,5]], [[6,5]], [[6,3]], [[4,3]]]);
    expect(annaRuuduKäigud([5, 0], lauaSeisud.nupudAinultRealKaksJaViisTammiVersioon)).toEqual([[[4,1]], [[6,1]]]);



  });


});

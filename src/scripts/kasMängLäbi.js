import {kasSaabKäia} from "@/scripts/annaRuuduKäigud";


const kasLõpp = (mänguLaud) => {
  let musti = 0;
  let valgeid = 0;


  for (let i = 0; i < mänguLaud.length; i++) {
    for (let j = 0; j < mänguLaud[0].length; j++) {
      const ruuduke = mänguLaud[i][j];
      if (ruuduke !== null) {

        if (ruuduke.powerful && ruuduke.player === "valge")
          valgeid++;

        if (ruuduke.powerful && ruuduke.player === "must")
          musti++;

        if (ruuduke.player === "must" && kasSaabKäia([i, j], mänguLaud))
          musti++;

        if (ruuduke.player === "valge" && kasSaabKäia([i, j], mänguLaud))
          valgeid++;

      }
    }
  }
  console.log(musti + "  " + valgeid)

  if (musti === 0 && valgeid !== 0)
    return "valge"
  if (valgeid === 0 && musti !== 0)
    return "must"

  return null;
}

export default kasLõpp;
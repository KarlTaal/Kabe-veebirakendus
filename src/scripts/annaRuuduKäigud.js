const annaRuuduKäigud = (ruut, mänguväljak) => {

  const kasOnTamm = mänguväljak[ruut[0]][ruut[1]].powerful;
  if (kasOnTamm) {
    return tammiNupuKäigud(ruut, mänguväljak);
  }
  else
    return tavanupuKäigud(ruut, mänguväljak);

}

const tavanupuKäigud = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;
  const võimalikudKäigud = [];


  if (nupp === "must") {
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;

    if (mänguväljak[reaIndeks][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks1]])

    if (mänguväljak[reaIndeks][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks2]])

  }

  if (nupp === "valge") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks1 = ruut[1] - 1;
    const tulbaIndeks2 = ruut[1] + 1;

    if (mänguväljak[reaIndeks][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks1]])

    if (mänguväljak[reaIndeks][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks2]])

  }

  return võimalikudKäigud;
}

const tammiNupuKäigud = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;
  const võimalikudKäigud = [];

  if (nupp === "must"){
    const reaIndeks1 = ruut[0] + 1;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;
    const reaIndeks2 = ruut[0] - 1;

    if (mänguväljak[reaIndeks2][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks1]])

    if (mänguväljak[reaIndeks1][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks1, tulbaIndeks1]])

    if (mänguväljak[reaIndeks1][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks1, tulbaIndeks2hn]])

    if (mänguväljak[reaIndeks2][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks2]])

  }

  if (nupp === "valge"){
    const reaIndeks1 = ruut[0] - 1;
    const tulbaIndeks1 = ruut[1] - 1;
    const tulbaIndeks2 = ruut[1] + 1;
    const reaIndeks2 = ruut[0] + 1;

    if (mänguväljak[reaIndeks1][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks1, tulbaIndeks2]])

    if (mänguväljak[reaIndeks2][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks2]])

    if (mänguväljak[reaIndeks2][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks1]])

    if (mänguväljak[reaIndeks1][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks1, tulbaIndeks1]])

  }

  return võimalikudKäigud;


}


export default annaRuuduKäigud;
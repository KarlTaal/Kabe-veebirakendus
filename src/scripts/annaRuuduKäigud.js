const annaRuuduKäigud = (ruut, mänguväljak) => {
  const kasOnTamm = mänguväljak[ruut[0]][ruut[1]].powerful;
  if (kasOnTamm) {
    if (kasSaabSüüa(ruut, mänguväljak))
      return true;
    else
      return false;

      //return tammiNupuKäigud(ruut, mänguväljak);
  } else {
    if (kasSaabSüüa(ruut, mänguväljak))
      return true;
    else
      return false;

    //return tavanupuKäigud(ruut, mänguväljak);
  }
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

  if (nupp === "must") {
    const reaIndeks1 = ruut[0] + 1;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;
    const reaIndeks2 = ruut[0] - 1;

    if (mänguväljak[reaIndeks2][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks1]])

    if (mänguväljak[reaIndeks1][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks1, tulbaIndeks1]])

    if (mänguväljak[reaIndeks1][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks1, tulbaIndeks2]])

    if (mänguväljak[reaIndeks2][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks2]])

  }

  if (nupp === "valge") {
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


const tavaNupuSöömisKäigud = (ruut, mänguväljak) =>{

}

const kasSaabSüüa = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "must"){
    const reaIndeks1 = ruut[0] + 1;
    const järgmineRida = ruut[0] + 2;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;
    const järgmineTulp1 = ruut[1] + 1;
    const järgmineTulp2 = ruut[1] + 2;

    if ((mänguväljak[reaIndeks1][tulbaIndeks1] && mänguväljak[reaIndeks1][tulbaIndeks1].player === "valge") || (mänguväljak[reaIndeks1][tulbaIndeks2] && mänguväljak[reaIndeks1][tulbaIndeks2].player === "valge")) {
      if (mänguväljak[järgmineRida][järgmineTulp1] === null || mänguväljak[järgmineRida][järgmineTulp2] == null)
        return true;
      else
        return false;
    }
    return false;
  }
  if (nupp === "valge"){
    const reaIndeks1 = ruut[0] - 1;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp1 = ruut[1] + 2;
    const järgmineTulp2 = ruut[1] - 2;

    if ((mänguväljak[reaIndeks1][tulbaIndeks1] && mänguväljak[reaIndeks1][tulbaIndeks1].player === "must") || (mänguväljak[reaIndeks1][tulbaIndeks2] && mänguväljak[reaIndeks1][tulbaIndeks2].player === "must")) {
      if (mänguväljak[järgmineRida][järgmineTulp1] === null || mänguväljak[järgmineRida][järgmineTulp2] == null)
        return true;
      else {
        return false;
      }
    }
    return false;
  }
}

export default annaRuuduKäigud;

//TODO taha ja ette
//TODO testimine

const annaRuuduKäigud = (ruut, mänguväljak) => {
  const kasOnTamm = mänguväljak[ruut[0]][ruut[1]].powerful;


    if (!kasOnTamm) {
      const tavaNupp = [];

      if (kasSaabKäia(ruut, mänguväljak)) {

        if (kasSaabVasakule(ruut, mänguväljak))
          tavaNupp.push(tavaVasakuleSöömised(ruut, mänguväljak));

        if (kasSaabParemale(ruut, mänguväljak))
          tavaNupp.push(tavaParemaleSöömised(ruut, mänguväljak));

        if (tavaNupp.length === 0)
          return tavanupuKäigud(ruut, mänguväljak);

        return tavaNupp;

      } else
        return [];
    }//Tavanupukäigud

  if (kasOnTamm){
    let võimalikudKäigudEtte = [];
    let võimalikudKäigudTaha = [];
    let tammiKäigudEtte = [];
    let tammiKäigudTaha = [];
    let tammiSöömisKäigud = [];
    let tammiKäigud = [];
    let peabSööma = false;



    //Vaatame tavanupu käigud üle
    if (kasSaabKäia(ruut, mänguväljak)) {

      if (kasSaabParemale(ruut, mänguväljak)) {
        võimalikudKäigudEtte.push(tavaParemaleSöömised(ruut, mänguväljak));
        peabSööma = true;
      }

      if (kasSaabVasakule(ruut, mänguväljak)) {
        võimalikudKäigudEtte.push(tavaVasakuleSöömised(ruut, mänguväljak));
        peabSööma = true;
      }

      //Ei ole võimalikke söömisi, siis saab vabalt käia
      if (võimalikudKäigudEtte.length === 0)
        tammiKäigudEtte = [...tavanupuKäigud(ruut, mänguväljak)];
    }//Tava variandid

    //Taha käigud
    if (kasSaabTahaKäia(ruut, mänguväljak)){

      if (kasSaabTahaParemale(ruut, mänguväljak)) {
        if (paremaleSöömisedTaha(ruut, mänguväljak)) {
          võimalikudKäigudTaha.push(paremaleSöömisedTaha(ruut, mänguväljak));
          peabSööma = true;
        }
      }

      if (kasSaabTahaVasakule(ruut, mänguväljak)) {
        if (vasakuleSöömisedTaha(ruut, mänguväljak)) {
          võimalikudKäigudTaha.push(vasakuleSöömisedTaha(ruut, mänguväljak));
          peabSööma = true;
        }
      }

      if (võimalikudKäigudTaha.length === 0)
        tammiKäigudTaha = [...tammiNupuKäigud(ruut, mänguväljak)];
    }

    if (peabSööma) {
      tammiSöömisKäigud = [...võimalikudKäigudEtte, ...võimalikudKäigudTaha];
      return tammiSöömisKäigud;
    }
    else {
      tammiKäigud = [...tammiKäigudEtte, ...tammiKäigudTaha];
      return tammiKäigud;
    }

  }else
    return[];

  }//RuuduKäigud



const tammiNupuKäigud = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;
  const võimalikudKäigud = [];

  if (nupp === "must") {
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;
    const reaIndeks2 = ruut[0] - 1;

    if (mänguväljak[reaIndeks2][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks1]])

    if (mänguväljak[reaIndeks2][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks2]])

  }

  if (nupp === "valge") {
    const tulbaIndeks1 = ruut[1] - 1;
    const tulbaIndeks2 = ruut[1] + 1;
    const reaIndeks2 = ruut[0] + 1;


    if (mänguväljak[reaIndeks2][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks2]])

    if (mänguväljak[reaIndeks2][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks2, tulbaIndeks1]])


  }
  return võimalikudKäigud;
}

const kasSaabVasakule = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "valge") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks = ruut[1] - 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] - 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else return false;
    } else
      return false;
  }

  if (nupp === "must") {

    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks = ruut[1] + 1; //Peegelpilt
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] + 2; //Peegelpilt

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }
}

const kasSaabParemale = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "valge") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks = ruut[1] + 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] + 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }


  if (nupp === "must") {
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks = ruut[1] - 1;
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] - 2;


    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }
}


//Vaatab ainult, tahapoole. Saaks ilmselt seda teha ka "kasSaabVasakule" meetodis. Sama "kasSaabParemale" puhul
const kasSaabTahaVasakule = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "must") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks = ruut[1] + 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] + 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }//MUST


  if (nupp === "valge") {
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks = ruut[1] - 1;
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] - 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }//VALGE

}

const kasSaabTahaParemale = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "must") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks = ruut[1] - 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] - 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }//MUST


  if (nupp === "valge") {
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks = ruut[1] + 1;
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] + 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        return true;
      } else
        return false;
    } else
      return false;
  }//VALGE
}

const kasSaabTahaKäia = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "must") {
    const rida = ruut[0] - 1;
    const tulpP = ruut[1] + 1;
    const tulpV = ruut[1] - 1;

    if (mänguväljak[rida][tulpP] === null || kasSaabTahaParemale(ruut, mänguväljak) || kasSaabTahaVasakule(ruut, mänguväljak)) {
      return true;
    } else if (mänguväljak[rida][tulpV] === null || kasSaabTahaParemale(ruut, mänguväljak) || kasSaabTahaVasakule(ruut, mänguväljak))
      return true;
    else
      return false;
  }//Must

  if (nupp === "valge") {
    const rida = ruut[0] + 1;
    const tulpP = ruut[1] + 1;
    const tulpV = ruut[1] - 1;

    if (mänguväljak[rida][tulpP] === null || kasSaabTahaParemale(ruut, mänguväljak) || kasSaabTahaVasakule(ruut, mänguväljak)) {
      return true;
    } else if (mänguväljak[rida][tulpV] === null || kasSaabTahaParemale(ruut, mänguväljak) || kasSaabTahaVasakule(ruut, mänguväljak))
      return true;
    else
      return false;
  }//Valge

}


const paremaleSöömisedTaha = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;
  const võimalikudSöömised = [];

  if (nupp === "must") {
    const rida = ruut[0] - 1;
    const tulp = ruut[1] - 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] - 2;


    if (mänguväljak[rida][tulp] && mänguväljak[rida][tulp].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else {
        võimalikudSöömised.push([]);
      }
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }//Must

  if (nupp === "valge") {
    const rida = ruut[0] + 1;
    const tulp = ruut[1] + 1;
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] + 2;

    if (mänguväljak[rida][tulp] && mänguväljak[rida][tulp].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else {
        võimalikudSöömised.push([]);
      }
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }//Valge


}

const vasakuleSöömisedTaha = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;
  const võimalikudSöömised = [];

  if (nupp === "must") {
    const rida = ruut[0] - 1;
    const tulp = ruut[1] + 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] + 2;

    if (mänguväljak[rida][tulp] && mänguväljak[rida][tulp].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else {
        võimalikudSöömised.push([]);
      }
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }//Must

  if (nupp === "valge") {
    const rida = ruut[0] + 1;
    const tulp = ruut[1] - 1;
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] - 2;

    if (mänguväljak[rida][tulp] && mänguväljak[rida][tulp].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else {
        võimalikudSöömised.push([]);
      }
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }//Valge

}

const tahaSööParemaleVõiVasakule = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  const vasakule = vasakuleSöömisedTaha(ruut, mänguväljak);
  const paremale = paremaleSöömisedTaha(ruut, mänguväljak);
  vasakule[1] = paremale[0];

  return vasakule;
}


const tavanupuKäigud = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;
  const võimalikudKäigud = [];
  const käigud = [];


  if (nupp === "must") {
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;

    if (mänguväljak[reaIndeks][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks1]])


    if (mänguväljak[reaIndeks][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks2]]);
  }

  if (nupp === "valge") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks1 = ruut[1] - 1;
    const tulbaIndeks2 = ruut[1] + 1;

    if (mänguväljak[reaIndeks][tulbaIndeks1] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks1]]);

    if (mänguväljak[reaIndeks][tulbaIndeks2] === null)
      võimalikudKäigud.push([[reaIndeks, tulbaIndeks2]]);

  }

  return võimalikudKäigud;
}

const tavaVasakuleSöömised = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "valge") {
    const võimalikudSöömised = [];

    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks = ruut[1] - 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] - 2;


    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else {
        võimalikudSöömised.push([]);
      }
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;


  }

  if (nupp === "must") {
    const võimalikudSöömised = [];

    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks = ruut[1] + 1; //Peegelpilt
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] + 2; //Peegelpilt

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else         //Ei tea, kas on vaja, aga better safe than sorry
        võimalikudSöömised.push([]);
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }

}

const tavaParemaleSöömised = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "valge") {
    const võimalikudSöömised = [];

    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks = ruut[1] + 1;
    const järgmineRida = ruut[0] - 2;
    const järgmineTulp = ruut[1] + 2;

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "must") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else         //Ei tea, kas on vaja, aga better safe than sorry
        võimalikudSöömised.push([]);
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }

  if (nupp === "must") {
    const võimalikudSöömised = [];
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks = ruut[1] - 1; //Peegelpilt
    const järgmineRida = ruut[0] + 2;
    const järgmineTulp = ruut[1] - 2; //Peegelpilt

    if (mänguväljak[reaIndeks][tulbaIndeks] && mänguväljak[reaIndeks][tulbaIndeks].player === "valge") {
      if (mänguväljak[järgmineRida][järgmineTulp] === null) {
        võimalikudSöömised.push([järgmineRida, järgmineTulp]);
      } else
        võimalikudSöömised.push([]);
    } else
      võimalikudSöömised.push([]);

    return võimalikudSöömised;
  }
}

const kasSaabKäia = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  if (nupp === "must") {
    const reaIndeks = ruut[0] + 1;
    const tulbaIndeks1 = ruut[1] + 1;
    const tulbaIndeks2 = ruut[1] - 1;

    if (mänguväljak[reaIndeks][tulbaIndeks1] === null || kasSaabParemale(ruut, mänguväljak) || kasSaabVasakule(ruut, mänguväljak)) {
      return true;
    } else if (mänguväljak[reaIndeks][tulbaIndeks2] === null || kasSaabParemale(ruut, mänguväljak) || kasSaabVasakule(ruut, mänguväljak))
      return true;
    else
      return false;

  }
  //VAlGE

  if (nupp === "valge") {
    const reaIndeks = ruut[0] - 1;
    const tulbaIndeks1 = ruut[1] - 1;
    const tulbaIndeks2 = ruut[1] + 1;

    if (mänguväljak[reaIndeks][tulbaIndeks1] === null || kasSaabParemale(ruut, mänguväljak) || kasSaabVasakule(ruut, mänguväljak))
      return true;
    else if (mänguväljak[reaIndeks][tulbaIndeks2] === null || kasSaabParemale(ruut, mänguväljak) || kasSaabVasakule(ruut, mänguväljak))
      return true;
    else
      return false;
  }
}



const tavaSööParemaleVõiVasakule = (ruut, mänguväljak) => {
  const nupp = mänguväljak[ruut[0]][ruut[1]].player;

  const vasakule = tavaVasakuleSöömised(ruut, mänguväljak);
  const paremale = tavaParemaleSöömised(ruut, mänguväljak);

  vasakule[1] = paremale[0];

  return vasakule;
}

export default annaRuuduKäigud;


/*
const annaRuuduKäigud = (ruut, mänguväljak) => {
  const kasOnTamm = mänguväljak[ruut[0]][ruut[1]].powerful;

  if (!kasOnTamm) {

    if (kasSaabKäia(ruut, mänguväljak)) {

      if (kasSaabVasakule(ruut, mänguväljak) && kasSaabParemale(ruut, mänguväljak))
        return tavaSööParemaleVõiVasakule(ruut, mänguväljak);

      else if (kasSaabParemale(ruut, mänguväljak) || kasSaabVasakule(ruut, mänguväljak)) {

        if (kasSaabVasakule(ruut, mänguväljak))
          return tavaVasakuleSöömised(ruut, mänguväljak);

        else if (kasSaabParemale(ruut, mänguväljak))
          return tavaParemaleSöömised(ruut, mänguväljak);

      } else
        return tavanupuKäigud(ruut, mänguväljak);
    } else
      return [];
  }//Tavakäigud

  if (kasOnTamm){
    const võimalikudKäigud = [];

    //Käsitleme algul nagu tavanuppu ja leiame võimalikud käigud.
    if (kasSaabKäia(ruut, mänguväljak))




    return võimalikudKäigud;
  }//Tammikäigud
 */
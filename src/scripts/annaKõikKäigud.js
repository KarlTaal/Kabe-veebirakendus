import {annaRuuduKäigud} from "@/scripts/annaRuuduKäigud";


const annaKõikKäigud = (mängija, mängulaud) => {
  const söömised = [];
  const käigud = [];
  let kõikLiikumised;
  let käik;

  for (let i = 0; i < mängulaud.length; i++) {
    for (let j = 0; j < mängulaud[0].length; j++) {
      if (mängulaud[i][j] !== null && mängulaud[i][j].player === mängija) {
        kõikLiikumised = annaRuuduKäigud([i, j], mängulaud);

        for (let k = 0; k < kõikLiikumised.length; k++) {
          käik = [[i, j]];
          käik.push(kõikLiikumised[k]);
          if (kasToimusSöömine(käik))
            söömised.push(käik);
          else
            käigud.push(käik);
        }

      }
    }
  }
  if (söömised.length !== 0)
    return söömised;
  return käigud;
}

const kasToimusSöömine = (käik) => {
  const algusRida = käik[0][0];
  const lõpuRida = käik[1][0][0];

  if (Math.abs(algusRida - lõpuRida) === 2)
    return true;
  else
    return false;
}


export default annaKõikKäigud;
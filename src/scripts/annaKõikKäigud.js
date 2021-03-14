import annaRuuduKäigud from "@/scripts/annaRuuduKäigud";

const annaKõikKäigud = (mängija, mängulaud) => {
  const käigud = [];
  let kõikLiikumised;
  let käik;

  for (let i = 0; i < mängulaud.length; i++) {
    for (let j = 0; j < mängulaud[0].length; j++) {
      if (mängulaud[i][j] !== null && mängulaud[i][j].player === mängija) {
        kõikLiikumised = annaRuuduKäigud([i, j], mängulaud);

        for (let k = 0; k < kõikLiikumised.length; k++) {
          käik = [[i,j]];
          käik.push(kõikLiikumised[k]);
          käigud.push(käik);
        }

      }
    }
  }
  return käigud;
}


export default annaKõikKäigud;
import annaRuuduKäigud from "@/scripts/annaRuuduKäigud";

const annaKõikKäigud = (mängija, mängulaud) => {
  const käigud = [];
  let käik;
  const liigne = abi(mängija, mängulaud);
  for (let i = 0; i < liigne.length; i++) {
    for (let j = 0; j < liigne[i].length; j++) {
      käik = liigne[i][j];
      käigud.push(käik);
    }
  }
  return käigud;
}

const abi = (mängija, mängulaud) => {
  let käigud = [];
  for (let i = 0; i < mängulaud.length; i++) {
    for (let j = 0; j < mängulaud[0].length; j++) {
      if (mängulaud[i][j] !== null) {
        if (mängulaud[i][j].player === mängija)
          käigud.push(annaRuuduKäigud([i, j], mängulaud));
      }
    }
  }
  return käigud;
}

export default annaKõikKäigud;
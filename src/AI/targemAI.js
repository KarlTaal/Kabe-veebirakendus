import annaKõikKäigud from "@/scripts/annaKõikKäigud";
import sooritaKäik from "@/scripts/sooritaKäik";
import hinda from "@/scripts/hinda";

const annaAiKäik = (mängija, mängulaud, sügavus, teekond, esialgneMängija) => {
  if (sügavus === 0) {
    return {hinne: hinda(esialgneMängija, mängulaud), tee: teekond};
  }

  const käigud = annaKõikKäigud(mängija, mängulaud);
  if (käigud.length === 0) {
    if (mängija === esialgneMängija)
      return {hinne: -100000, tee: teekond};
    else
      return {hinne: 100000, tee: teekond};
  }

  const harud = [];

  for (let i = 0; i < käigud.length; i++) {
    const käik = käigud[i];
    let asukoht = käik[0];
    let koopia = JSON.parse(JSON.stringify(mängulaud));
    for (let j = 0; j < käik[1].length; j++) {
      koopia = sooritaKäik([asukoht, käik[1][j]], koopia);
      asukoht = käik[1][j];
    }
    const tee = JSON.parse(JSON.stringify(teekond));
    tee.push(käik)
    harud.push(annaAiKäik(mängija === "valge" ? "must" : "valge", koopia, sügavus-1, tee, esialgneMängija));
  }

  let suurim = 0;
  for (let i = 0; i < harud.length; i++) {
    if (harud[i].hinne > suurim)
      suurim = i;
  }

  return harud[suurim];
}
export default annaAiKäik;
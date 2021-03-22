import annaKõikKäigud from "@/scripts/annaKõikKäigud";
import hinda from "@/scripts/hinda";
import sooritaKäik from "@/scripts/sooritaKäik";
import annaRumalAiKäik from "@/AI/rumalAI";

const annaRumalAiVol2Käik = (mängija, laud) => {
  let koopia = JSON.parse(JSON.stringify(laud));
  const vastane = mängija === "must" ? "valge" : "must";
  let parimKäik = null;
  let skoor = -1;

  const käigud = annaKõikKäigud(mängija, laud);
  for (let i = 0; i < käigud.length; i++) {
    koopia = laud;
    const käik = käigud[i];
    for (let j = 0; j < käik[1].length; j++) {
       koopia = sooritaKäik([käik[0], käik[1][j]], laud);
    }
    const vastaseKäigud = annaKõikKäigud(vastane, koopia);
    let abiLaud = JSON.parse(JSON.stringify(koopia));
    for (let j = 0; j < vastaseKäigud.length; j++) {
      const vastaseKäik = vastaseKäigud[j];
      abiLaud = koopia;
      for (let k = 0; k < vastaseKäik[1].length; k++) {
        abiLaud = sooritaKäik([vastaseKäik[0], vastaseKäik[1][k]], koopia);
        const punktid = hinda(mängija, abiLaud);
        if (punktid > skoor){
          parimKäik = käik;
          skoor = punktid;
        }
      }
    }
  }
  if (parimKäik === null)
    return annaRumalAiKäik(mängija, laud);

  return parimKäik;
}
export default annaRumalAiVol2Käik;
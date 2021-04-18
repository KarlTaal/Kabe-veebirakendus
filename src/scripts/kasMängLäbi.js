import {kasSaabKäia} from "@/scripts/annaRuuduKäigud";
import annaKõikKäigud from "@/scripts/annaKõikKäigud";


const kasLõpp = (mängija, mänguLaud) => {
  const käigud = annaKõikKäigud(mängija, mänguLaud);

  if (käigud.length === 0)
    return true;
  else
    return false;

}

export default kasLõpp;